import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
// import { useNavigation } from "@react-navigation/native";

// The navigation prop is given to any component function that is turned
// into a Stack.Screen.
export default function CategoriesScreen({ navigation }) {
  // const { navigate } = useNavigation();

  // Abstracted the "item" property from the "itemData" object that is
  // passed to the function on the FlatList "renderItem" property.
  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      // "MealsOverview" is the arbitrary name given to the
      // Stack.Screen.
      // The second argument, which is an object, is
      // optional but allows passing data when navigating (data is
      // accessible through the "route.params" prop that is passed to
      // the component that is being navigated to).
      navigation.navigate("MealsOverview", { categoryId: item.id });

      // The useNavigation hook can be used as an alternative to the
      // navigation prop that is passed to component functions that are
      // used in Stack.Screens.
      // navigate("MealsOverview");
    };

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

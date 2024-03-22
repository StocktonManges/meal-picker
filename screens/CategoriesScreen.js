import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
// import { useNavigation } from "@react-navigation/native";

// The navigation prop is given to any component function that is turned
// into a Stack.Screen.
export default function CategoriesScreen({ navigation }) {
  // const { navigate } = useNavigation();

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      // "MealsOverview" is the arbitrary name given to the
      // Stack.Screen.
      // The second argument, which is an object, is
      // optional but allows passing data when navigating.
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });

      // The useNavigation hook can be used as an alternative to the
      // navigation prop that is passed to component functions that are
      // used in Stack.Screens.
      // navigate("MealsOverview");
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
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

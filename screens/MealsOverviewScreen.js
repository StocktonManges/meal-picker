import { FlatList, StyleSheet, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
// import { useRoute } from "@react-navigation/native";

// Screen.Stack components automatically get "route" and "navigation"
// props.
export default function MealsOverviewScreen({ route, navigation }) {
  // The params property on the route prop contains any data that was
  // passed in the object argument when the "navigate" method is called
  // to navigate to a Stack.Screen.
  const catId = route.params.categoryId;

  // There is also a "useRoute" hook that gives access to the params prop.
  // const { params } = useRoute();
  // const catId = params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  // This hook runs before the component renders.
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, []);

  const renderMealItem = ({ item }) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(mealItem) => mealItem.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

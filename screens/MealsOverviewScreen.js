import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
// import { useRoute } from "@react-navigation/native";

export default function MealsOverviewScreen({ route }) {
  // The params property on the route prop contains any data that was
  // passed in the object argument when the "navigate" method is called
  // to navigate to a Stack.Screen.
  const catId = route.params.categoryId;
  // There is also a "useRoute" hook that gives access to the params prop.
  // const { params } = useRoute();
  // const catId = params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

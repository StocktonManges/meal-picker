import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { CATEGORIES } from "./data/dummy-data";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          // Adds styling to every screen.
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          {/* The first Stack.Screen rendered will be the default starting
           screen for the app unless the "initialRouteName" property on 
           the Stack.Navigator is given a value. */}
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            // Adds styling to the specific screen.
            options={{
              title: "All Categories",
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            /* 
            This is one option for setting the option object properties
            dynamically.

            // When using a function for the "options" prop, the
            // function receives an object with to key-value pairs.
            // The function must return an options object.
            options={({ route, navigation }) => {
              // "route" has a "params" property that stores all
              // "params" passed via the "navigation.navigate" method.
              const catId = route.params.categoryId;
              const title = CATEGORIES.find(
                (categoryItem) => categoryItem.id === catId
              ).title;
              return {
                title,
              };
            }}
            */
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

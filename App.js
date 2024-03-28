import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
// import { CATEGORIES } from "./data/dummy-data";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="list" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavoritesContextProvider>
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
            {/* The first Screen rendered will be the default starting
           screen for the app unless the "initialRouteName" property on 
           the Stack.Navigator is given a value. */}
            <Stack.Screen
              name="Drawer"
              // This is a drawer navigation component nested in the stack
              // component.
              component={DrawerNavigator}
              // Adds styling to the specific screen.
              options={{
                // Hides the header on the stack screen since the screens
                // in the drawer navigator also have headers and we want
                // the drawer menu icon to be visible.
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              /* 
            This is one option for setting the option object properties
            dynamically. The other option happens directly on the
            "MealsOverview" component.

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
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{
                title: "Meal Details",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

// AppStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import DrawerNavigator from "./DrawerNavigator";
import TopBar from "../components/TopBar";
import HomeScreen from "../screens/HomeScreen"; // Import your other screens

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={DrawerNavigator}
        options={{ headerShown: false }} // Hide default header
      />
      {/* Add more screens where you want to show TopBar */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ navigation }) => (
            <TopBar heading="Home" navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

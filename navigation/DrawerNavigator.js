// DrawerNavigator.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SidebarContent from "../components/SidebarContent";
import AppNavigator from "./AppNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="AppNavigator"
      drawerContent={(props) => <SidebarContent {...props} />}
    >
      <Drawer.Screen name="AppNavigator" component={AppNavigator}  options={{ headerShown: false }} />
      {/* Add more screens as needed */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

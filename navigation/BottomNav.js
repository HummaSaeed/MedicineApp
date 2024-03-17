import { StyleSheet, Text, View, TouchableOpacity,Dimensions,Image } from "react-native";
import React from "react";
import { Iconify } from 'react-native-iconify';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Appointments from "../screens/Appointments";
import Orders from "../screens/Orders";
import Records from "../screens/Records";
import Profile from "../screens/Profile";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5,
      ...styles.tabBarButton,
    }}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#0E4889",
        inactiveTintColor: "#A7A9AC",
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          {
            backgroundColor: "#FFFFFF",
            borderTopWidth: 1,
            borderTopColor: "lightgray",
            height: 60,
          },
        ],
      }}
    >
      <Tab.Screen
        name="Book"
        component={Appointments}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Iconify icon="carbon:task-asset-view" size={size} color={color} />
            
          ),
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={Orders}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../assets/Vector.png")}/>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <Iconify icon="fluent:home-24-regular" size={30} color={"white"} />
             
            </CustomTabBarButton>
          ),
        }}
      />
      <Tab.Screen
        name="Records"
        component={Records}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Iconify icon="mynaui:yen-hexagon" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Iconify icon="bx:user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  tabBarButton: {
    backgroundColor: "#0E4889",
    borderRadius: 30,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    // Adjust width and height based on the screen width
    ...width < 600 ? { width: 50, height: 50 } : { width: 60, height: 60 },
  },
});

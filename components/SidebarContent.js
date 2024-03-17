// SidebarContent.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const SidebarContent = ({ navigation }) => {
  const handleItemClick = (screenName) => {
    navigation.navigate(screenName,{navigation:navigation});
    navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView>
      {/* Logo at the top */}
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={{ maxWidth: 150 }}
          resizeMode="contain"/>
      </View>

      {/* List of items */}
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemClick("Service")}
      >
        <Text style={styles.itemText}>Services</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemClick("EditProfile")}
      >
        <Text style={styles.itemText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemClick("Notification")}
      >
        <Text style={styles.itemText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemClick("ContactUs")}
      >
        <Text style={styles.itemText}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemClick("ManagePatient")}
      >
        <Text style={styles.itemText}>Manage Patient</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemClick("ManageAddress")}
      >
        <Text style={styles.itemText}>Manage Address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemClick("PrivacyPolicy")}
      >
        <Text style={styles.itemText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemClick("PrivacyPolicy")}
      >
        <Text style={styles.itemText}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemClick("Home")}
      >
        <Text style={styles.itemText}>Logout</Text>
      </TouchableOpacity>
   
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
 alignItems:'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#BCBCBC",

  },
  logoText: {
    color: "#0E4889",
    fontSize: 18,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemText: {
    color: "#0E4889",
    fontSize: 16,
    marginLeft: 16,
  },
});

export default SidebarContent;

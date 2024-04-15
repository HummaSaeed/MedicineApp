// RowWithIcons.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { windowWidth } from "../utils/Dimensions";
const RowWithIcons = ({ lefticonPress,lefticon,heading, name, onPress, navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  const notification=()=>{
    navigation.navigate("Notification")
  }

  return (
    <View style={styles.rowContainer}>
      {/* Sidebar Icon */}
      <TouchableOpacity style={styles.iconContainer} onPress={name=="menu" ?openDrawer:lefticonPress}>
        <Ionicons name={lefticon} size={22} color="#D51D33" />
      </TouchableOpacity>

      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>{heading}</Text>
      </View>

      {/* Notification Icon */}
      {name && (
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={name=="filter" ? onPress:notification} >
            <Ionicons name={name} size={22} color="#D51D33" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 30,
  },
  iconContainer: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#BCBCBC",
    padding: 10,
  },
  headingContainer: {
    flex: 1,
    alignItems: "center",
  },
  headingText: {
    color: "#0E4889",
    fontSize: 0.06*windowWidth,
    fontWeight: "bold",
  },
});

export default RowWithIcons;

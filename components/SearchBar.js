import { StyleSheet, View, TextInput, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

const { width } = Dimensions.get("window");

const SearchBar = () => {
  const [search, setSearch] = useState();

  const onChangeText = () => {};

  return (
    <View style={styles.search}>
      <TextInput
        style={styles.placeholder}
        placeholder={"Find Doctors, Specialists, Diseases & Hospitals..."}
        value={search}
        onChangeText={onChangeText}
      />
      <View style={styles.arrowIcon}>
        <Ionicons name={"search"} size={24} color="#0E4889" />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search: {
    height: 50,
    width: width - 40, // Adjusted width based on screen width
    borderRadius: 25,
    backgroundColor: "#D4D4D4",
    paddingHorizontal: 20,
    justifyContent: "center",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto", // Align to right
    marginRight: "auto", // Align to right
  },
  arrowIcon: {
    marginLeft: "auto",
  },
  placeholder: {
    flex: 1, // Take remaining space
    fontFamily: "Barlow-Regular",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
    color: "#0E4889",
  },
});

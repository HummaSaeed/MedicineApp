import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CustomDropDown = ({ placeholder, options }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setIsDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.input}
        onPress={handleToggleDropdown}
      >
        <Text style={styles.placeholder}>{selectedOption || placeholder}</Text>
        <View style={styles.arrowIcon}>
          <AntDesign name={isDropdownVisible ? "up" : "down"} size={13} color="#0E4889" />
        </View>
      </TouchableOpacity>

      {isDropdownVisible && (
        <View style={styles.dropdownContent}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownOption}
              onPress={() => handleOptionPress(option)}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  placeholder: {
    fontFamily: "Barlow-Regular",
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
    color: "#0E4889",
  },
  input: {
    height: 50,
    width: "100%",
    borderRadius: 200,
    backgroundColor: "#D4D4D4",
    paddingHorizontal: 20,
    justifyContent: "center",
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  dropdownContent: {
    marginTop: 1,
    borderColor: "#0E4889",
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  dropdownOption: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#0E4889",
  },
});

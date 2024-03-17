import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Input = ({ label, value, onChangeText, secureTextEntry, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
  >
  
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <TextInput
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          value={value}
          style={styles.inputtext}
          onChangeText={onChangeText}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={24}
              color="#D51D33"
            />
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontFamily: "Barlow-Regular",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
    color: "#616161",
    paddingHorizontal: 10,
    // marginBottom: 10,
  },
  input: {
    height: 50,
    // width: "100%",
    borderRadius: 200,
    backgroundColor: "#D4D4D4",
    paddingHorizontal: 20,
    marginBottom: 5,
    justifyContent:'center'
  },
  inputtext: {
    fontSize: 17,
    color: "#0E4889",
    
  },
  eyeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

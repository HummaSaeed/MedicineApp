// LoginScreen.js
import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
  View,
  Text,
  ToastAndroid,
} from "react-native";
import Input from "../components/Input";
import backgroundImage from "../assets/bg.png";
import PrimaryButton from "../components/PrimaryButton";

const { width, height } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
 
  const sendNumber =() => {
        navigation.navigate("Register");
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={require("../assets/number.png")} />
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.accordian}>Enter number to continue</Text>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: height * 0.04,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.phone}>Mobile: </Text>
              <Text style={styles.number}>Number</Text>
            </View>
            <Input
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Enter your phone number"
            />
           
            <Text style={styles.content}>
              A 4 digit OTP will be sent via SMS to verify your phone number
            </Text>
            <PrimaryButton
            title={"Verify"}
            backgroundColor={"#0E4889"}
            textColor={"#fff"}
            borderColor={"#0E4889"}
            onPress={sendNumber}
          />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: width * 0.05,
    paddingTop: height * 0.2,
    alignItems: "center",
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  welcome: {
    fontFamily: "Barlow-Regular",
    fontSize: 36,
    color: "#D51932",
  },
  accordian: {
    fontSize: 17,
    color: "#0E4889",
    fontFamily: "Barlow-SemiBold",
  },
  phone: {
    fontSize: 16,
    fontFamily: "Barlow-SemiBold",
    color: "#0E4889",
    lineHeight: 19.2,
  },
  number: {
    fontSize: 16,
    fontFamily: "Barlow-SemiBold",
    color: "#D51D33",
    lineHeight: 19.2,
  },
  input: {
    backgroundColor: "#D4D4D4",
    padding: 10,
    borderRadius: 20,
  },
  content: {
    color: "#35544D",
    fontSize: 14,
    fontFamily: "Barlow-Regular",
    marginHorizontal: 5,
    marginBottom: 10,
  },
});

export default LoginScreen;

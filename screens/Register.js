import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
  View,
  Text,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import backgroundImage from "../assets/bg.png";
import PrimaryButton from "../components/PrimaryButton";

const { width, height } = Dimensions.get("window");

const Register = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", ""]); // State to hold OTP digits

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };
  const verifyCode = () => {
    navigation.navigate("Dashboard")
  };
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../assets/otp.png")}
            style={{ marginBottom: 20 }}
          />
          <Text style={styles.welcome}>OTP</Text>
          <Text style={styles.accordian}>
            A 4 digit code has been sent to +91 876 543 210.
          </Text>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: height * 0.04,
            }}
          >
            <View style={styles.otpContainer}>
              {[0, 1, 2, 3].map((index) => (
                <TextInput
                  key={index}
                  style={styles.otpInput}
                  maxLength={1}
                  keyboardType="numeric"
                  value={otp[index]}
                  onChangeText={(text) => handleOtpChange(index, text)}
                />
              ))}
            </View>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginBottom: height * 0.15,
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.phone}>Didn’t Recived the code? </Text>
              <Text style={styles.number}>Resend</Text>
            </View>
          </View>
          <PrimaryButton
            title={"Verify"}
            backgroundColor={"#0E4889"}
            textColor={"#fff"}
            borderColor={"#0E4889"}
            onPress={verifyCode}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Register;

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
    fontFamily: "Barlow-Regular",
    maxWidth: 240,
    textAlign: "center",
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
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  otpInput: {
    backgroundColor: "#D4D4D4",
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
    textAlign: "center",
    fontSize: 24,
    color: "#0E4889",
  },
});

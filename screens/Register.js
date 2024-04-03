// Register.js
import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions,Image, ImageBackground, ScrollView } from "react-native";
import backgroundImage from "../assets/bg.png";
import PrimaryButton from '../components/PrimaryButton'
import sendNumber from './LoginScreen'
const { width, height } = Dimensions.get("window");

const Register = ({ navigation, route }) => {
  const { userId, secret, number } = route.params;
  console.log(route.params);
  const [otp, setOtp] = useState(["", "", "", ""]); // State to hold OTP digits
  const refs = [useRef(), useRef(), useRef(), useRef()]; // Refs for OTP input fields
  const [focusedIndex, setFocusedIndex] = useState(0); // State to keep track of focused input field index

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== "") {
      // Move focus to the next input field
      if (index < 3) {
        refs[index + 1].current.focus();
      }
    }
    
  };
  const handleFocus = (index) => {
    setFocusedIndex(index);
  };
  const verifyCode = () => {
    const otpCode = otp.join("");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      userId,
      token: otpCode,
      secret,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://family-dr.vercel.app/api/auth/verifyOTP", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // Handle successful verification response here
        console.log(result);
        if(result.success==true){
           navigation.navigate("Dashboard");
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);
        
      });
  };
  

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.container}>
        <Image source={require("../assets/otp.png")} />
          <Text style={styles.heading}>OTP Verification</Text>
          <Text style={styles.subHeading}>A 4 digit code has been sent to {number}.</Text>
          <View style={styles.otpContainer}>
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                style={[styles.otpInput, focusedIndex === index && styles.focusedInput]}
                
                maxLength={1}
                keyboardType="numeric"
                value={otp[index]}
                onChangeText={(text) => handleOtpChange(index, text)}
                onFocus={() => handleFocus(index)}
                ref={refs[index]}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.resendContainer} onPress={sendNumber}>
            <Text style={styles.resendText}>Didn't receive the code? Resend</Text>
          </TouchableOpacity>
          <PrimaryButton title={"Verify"} backgroundColor={"#0E4889"} textColor={"#fff"} borderColor={"#0E4889"} onPress={verifyCode} />
          {/* <TouchableOpacity style={styles.verifyButton} onPress={verifyCode}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: height * 0.2,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  heading: {
    fontFamily: "Barlow-Regular",
    fontSize: 36,
    color: "#D51932",
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 17,
    color: "#0E4889",
    fontFamily: "Barlow-Regular",
    maxWidth: 240,
    textAlign: "center",
    marginBottom: 20,
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
  focusedInput: {
   
  },
  resendContainer: {
    marginBottom: 20,
  },
  resendText: {
    fontSize: 16,
    fontFamily: "Barlow-SemiBold",
    color: "#0E4889",
  },
  verifyButton: {
    backgroundColor: "#0E4889",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  verifyButtonText: {
    fontFamily: "Barlow-SemiBold",
    fontSize: 18,
    color: "#fff",
  },
});

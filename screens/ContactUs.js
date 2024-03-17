import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import TopBar from "../components/TopBar";
import backgroundImage from "../assets/bg.png";

const ContactUs = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <TopBar heading="Contact Us" navigation={navigation}  
       lefticon={"arrow-back-outline"}
         lefticonPress={() => {
           navigation.goBack();
         }} />
      <View style={styles.container}>
        {/* Your contact us content goes here */}
        <Text style={styles.contactText}>Contact</Text>
        <Text style={styles.contactInfo}>
          We are available 24/7, kindly contact us at our helpline number if you
          need or service or is experiencing any incontinence
        </Text>
        <Text style={styles.contactTextTitle}>Call us on:</Text>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <Image source={require("../assets/phone.png")} />
          <Text style={styles.no}>92 331 34 68 964 4</Text>
        </View>
        <Text style={styles.contactTextTitle}>Email us at:</Text>
        <Text style={styles.no}>handyman35@gmail.com</Text>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Image source={require("../assets/whatsapp.png")}/>
            <Image source={require("../assets/gmail.png")}/>
            <Image source={require("../assets/facebook.png")}/>
            <Image source={require("../assets/instagram.png")}/>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  backgroundImage: {
    flexGrow: 1,
  },
  container: {
    // flex: 1,
    backgroundColor: "#E0E0E1",
    padding: 30,
    justifyContent:'center',
   borderRadius:10,
    margin: 30,
  },
  contentContainer: {
    flex: 1,
    marginTop: 20,
  },
  contactText: {
    color: "#1C1727",
    fontSize: 20,
    fontFamily: "Barlow-SemiBold",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 20,
  },
  contactInfo: {
    marginTop: 20,
    fontFamily: "Barlow-Regular",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: "#9A9393",
  },
  contactTextTitle: {
    color: "#0E4889",
    fontSize: 18,
    fontFamily: "Barlow-SemiBold",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 20,
  },
  no: {
    fontSize: 20,
    fontFamily: "Barlow-Bold",
    color: "#2C3E50",
    marginLeft: 15,
    marginTop:10
  },
});

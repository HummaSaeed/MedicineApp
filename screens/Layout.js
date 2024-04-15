import { StyleSheet,  ScrollView,ImageBackground } from "react-native";
import React from "react";
import backgroundImage from "../assets/bg.png";

const Layout = ({ children }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        {children}
      </ImageBackground>
    </ScrollView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover", // or 'stretch' for a different effect
    justifyContent: "space-between",
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

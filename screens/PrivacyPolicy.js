import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "../components/TopBar";
import Layout from "./Layout";

const PrivacyPolicy = ({ navigation }) => {
  return (
    <Layout>
      <View>
      <TopBar
      lefticon={"arrow-back-outline"}
      lefticonPress={() => {
        navigation.goBack();
      }}
        heading="Terms and Conditions"
        navigation={navigation}
        name={"ellipsis-horizontal"}
      />
      <View style={{ padding: 20, }}>
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.text}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Text>
        <Text style={styles.text}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Text>
        <Text style={styles.text}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Text>
      </View>
      </View>
      </Layout>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  title: {
    color: "#616161",
    fontFamily: "Barlow-SemiBold",
    fontSize: 16,
    lineHeight: 19,
  },
  text: {
    marginTop: 10,
    color: "#979797",
    fontSize: 14,
    fontFamily: "Barlow-Regular",
  },
});

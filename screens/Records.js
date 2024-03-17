import { StyleSheet, ImageBackground, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import TopBar from "../components/TopBar";
import CentralTabBar from "../components/CentralTabBar";
import Prescription from "../components/Prescription";
import Reports from "../components/Reports";
import Layout from "./Layout";

const Records = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Prescription");
  return (
    <Layout>
      <TopBar
        lefticon="menu"
        lefticonPress={() => {
          navigation.openDrawer();
        }}
        heading={"Records"}
        name={""}
        navigation={navigation}
      />
      <CentralTabBar
        tabs={{
          title: "",
          viewAllText: "",
          items: [
            { id: "Prescription", label: "Prescription" },
            { id: "Reports", label: "Reports" },
          ],
        }}
        renderContent={(selectedTab) => {
          switch (selectedTab) {
            case "Prescription":
              return <Prescription navigation={navigation} />;
            case "Reports":
              return <Reports navigation={navigation} />;
            default:
              return null;
          }
        }}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </Layout>
  );
};

export default Records;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover", // or 'stretch' for a different effect
    justifyContent: "space-between",
  },
});

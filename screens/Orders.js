import { StyleSheet } from "react-native";
import React, { useState } from "react";
import CentralTabBar from "../components/CentralTabBar";
import PendingList from "../components/PedingList";
import ConfirmedList from "../components/ConfirmedList";
import CompletedList from "../components/CompletedList";
import Cancel from '../components/Cancel'
import TopBar from "../components/TopBar";
import Layout from "./Layout";

const Orders = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Pending");
  return (
    <Layout>
      <TopBar
        lefticon="menu"
        lefticonPress={() => {
          navigation.openDrawer();
        }}
        heading={"My Appointments"}
        name={"notifications-sharp"}
        navigation={navigation}
      />
      <CentralTabBar
        tabs={{
          title: "",
          viewAllText: "",
          items: [
            { id: "Pending", label: "Pending" },
            {
              id: "Confirmed",
              label: "Confirmed",
            },
            {
              id: "Completed",
              label: "Completed",
            },
            {
              id: "Cancel",
              label: "Cancel",
            },
          ],
        }}
        renderContent={(selectedTab) => {
          switch (selectedTab) {
            case "Pending":
              return <PendingList navigation={navigation} />;
            case "Confirmed":
              return <ConfirmedList navigation={navigation} />;
            case "Completed":
              return <CompletedList navigation={navigation} />;
            case "Cancel":
              return <Cancel navigation={navigation} />;
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

export default Orders;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    flexGrow: 1,
  },
});

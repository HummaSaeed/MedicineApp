import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import TopBar from "../components/TopBar";
import Layout from "./Layout";
import CarousalComponent from "../components/CarousalComponent";
import { Ionicons } from "@expo/vector-icons";
import Services from "../components/Services";
import CentralTabBar from "../components/CentralTabBar";
import Cancel from "../components/Cancel";
import PendingList from "../components/PedingList";
import ConfirmedList from "../components/ConfirmedList";
import CompletedList from "../components/CompletedList";

import { data } from "../utils/Data.js";
import { Iconify } from "react-native-iconify";
import {
  primaryColor,
  secondaryColor,
  textColor,
  backgroundColor,
} from "../utils/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const HomeScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Pending");
  const [showNotificationBar, setShowNotificationBar] = useState(true);
  console.log(data);
  const handleCloseNotification = () => {
    setShowNotificationBar(false);
  };
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <Layout>
      <TopBar
        lefticonPress={openDrawer}
        lefticon="menu"
        heading={"Dashboard"}
        name={"notifications-sharp"}
        navigation={navigation}
      />
      <View style={styles.subhead}>
        <Text style={styles.title}>Current City: </Text>
        <Text style={styles.subtitle}>Orlando, USA</Text>
      </View>
      {showNotificationBar && (
        <View style={styles.notificationBar}>
          {/* Left Section */}
          <View style={styles.leftSection}>
            <Iconify icon="typcn:info-outline" size={28} color={"#FFC107"} />
            <Text style={styles.notificationText}>
              Your location was automatically set. Do you want to proceed?
            </Text>
          </View>

          {/* Right Section */}
          <View style={styles.rightSection}>
            <TouchableOpacity>
              <Text style={[styles.linkText, { color: secondaryColor }]}>
                Change
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.linkText, { color: textColor }]}>
                Keep it
              </Text>
            </TouchableOpacity>
            <Ionicons
              name="close"
              size={20}
              color={secondaryColor}
              onPress={handleCloseNotification}
            />
          </View>
        </View>
      )}
      <CarousalComponent style={styles.carouselContainer} />
      <Services
        data={data}
        style={styles.servicesContainer}
        navigation={navigation}
      />
      <View style={styles.cardContainer}>
        <ImageBackground
          source={require("../assets/card-img.png")}
          style={styles.cardBackgroundImage}
        >
          <View style={styles.overlay}>
            <View style={styles.contentContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>Order Medicines</Text>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => {
                    navigation.navigate("Diagnostics");
                  }}
                >
                  <Text style={styles.buttonText}>Upto 10% off</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{ justifyContent: "center" }}
                onPress={() => {
                  navigation.navigate("Diagnostics");
                }}
              >
                <Ionicons name="arrow-forward" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <CentralTabBar
        tabs={{
          title: "My Appointments",
          viewAllText: "See All",
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

const styles = StyleSheet.create({
  subhead: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: windowHeight * 0.01, // 2% of window height
  },

  title: {
    fontFamily: "Barlow-Bold",
    fontSize: 16,
    lineHeight: 19.6,
    color: primaryColor,
  },
  subtitle: {
    fontFamily: "Barlow-Bold",
    fontSize: 16,
    lineHeight: 19.6,
    color: secondaryColor,
  },
  notificationBar: {
    backgroundColor: backgroundColor,
    width: "100%",
    flexDirection: "row",
    padding: windowWidth * 0.02, // 2% of window width
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  notificationText: {
    color: textColor,
    fontSize: windowWidth * 0.02, // 4% of window width
    marginLeft: windowWidth * 0.02, // 2% of window width
    maxWidth: windowWidth * 0.35, // 65% of window width
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkText: {
    fontSize: 12,
    marginRight: 10,
  },
  carouselContainer: {
    marginTop: windowHeight * 0.02, // 2% of window height
  },
  servicesContainer: {
    flex: 1,
  },
  cardContainer: {
    paddingHorizontal: windowWidth * 0.02, // 2% of window width
    marginVertical: windowHeight * 0.01, // 1% of window height
    marginHorizontal: windowWidth * 0.01,
  },
  cardBackgroundImage: {
    width: "100%",
    height: 100, // Set your desired height
    resizeMode: "cover",
    borderRadius: 11,
  },
  overlay: {
    flex: 1,
    borderRadius: 11,
    backgroundColor: "rgba(14, 72, 137, 0.9)", // Opacity overlay color
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    flexDirection: "row",
  },
  textContainer: {
    alignItems: "flex-start",
  },
  titleText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: secondaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 60,
  },
  buttonText: {
    color: "white",
    fontSize: 13,
  },
});

export default HomeScreen;

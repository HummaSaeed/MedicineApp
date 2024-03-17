import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { primaryColor } from "../utils/colors";
import { windowWidth } from "../utils/Dimensions";

const data = [
  {
    id: "1",
    appointmentDate: "Thu 01 Jun, 12:00 PM",
    status: "Completed",
    doctorName: "Medicine",
    sessionType: "Online:",
    deliveryTime: "60 mins",
  },
  // Add more data as needed
];

export const renderItem = ({ item, navigation }) => (
  <View style={styles.card}>
    {/* Top Section */}
    <View style={styles.topSection}>
      <View style={styles.leftTopSection}>
        <Text style={styles.appointmentDateText}>Order Date</Text>
        <Text style={styles.appointmentDate}>{item.appointmentDate}</Text>
      </View>
      <View style={styles.rightTopSection}>
        <View style={[styles.statusLabel, { backgroundColor: "#cffcd6" }]}>
          <Text style={{ color: "#19F03B" }}>{item.status}</Text>
        </View>
      </View>
    </View>

    {/* Bottom Section */}
    <View style={styles.bottomSection}>
      <View style={styles.leftBottomSection}>
        {/* Circle Profile */}
        <View style={styles.circleProfile}>
          <Text style={styles.profiletext}>SR</Text>
        </View>
      </View>
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{item.doctorName}</Text>
        <Text style={styles.doctorDescription}>
          {item.sessionType}
          {item.deliveryTime}
        </Text>
      </View>
    </View>
  </View>
);

const OrderData = ({ navigation }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
      navigation={navigation}
    />
  );
};

export default OrderData;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth * 0.05,
  },
  card: {
    backgroundColor: "#D4D4D4",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: "#0E4889",
    borderLeftWidth: 3,
    elevation: 3,
    marginVertical: 10,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  appointmentDateText: {
    color: "#616161",
    fontSize: windowWidth * 0.035,
  },
  leftTopSection: {},
  rightTopSection: {},
  appointmentDate: {
    color: primaryColor,
    fontFamily: "Barlow-SemiBold",
    fontSize: windowWidth * 0.045,
  },
  statusLabel: {
    paddingHorizontal: windowWidth * 0.02,
    paddingVertical: windowWidth * 0.01,
    borderRadius: windowWidth * 0.04,
    alignItems: "center",
  },
  bottomSection: {
    flexDirection: "row",
    paddingVertical: windowWidth * 0.025,
  },
  leftBottomSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleProfile: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    borderRadius: windowWidth * 0.1,
    backgroundColor: "#0E4889",
    marginRight: windowWidth * 0.03,
    alignItems: "center",
    justifyContent: "center",
  },
  profiletext: {
    color: "white",
    fontSize: windowWidth * 0.1,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.045,
    color: "#0E4889",
  },
  doctorDescription: {
    color: "#888",
    fontSize: windowWidth * 0.035,
  },
  rightBottomSection: {
    justifyContent: "flex-end",
  },
});

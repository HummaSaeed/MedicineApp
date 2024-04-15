import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
    {
      id: "1",
      appointmentDate: "Thu 01 Jun, 12:00 PM",
      status: "Pending",
      doctorName: "Dr. Sam Roberts",
      doctorDescription: "Individual Session: 60 mins Bullying",
    },
    {
      id: "2",
      appointmentDate: "Thu 01 Jun, 12:00 PM",
      status: "Pending",
      doctorName: "Dr. Sam Roberts",
      doctorDescription: "Individual Session: 60 mins Bullying",
    },
    // Add more data as needed
  ];

const Cards = () => {
  return (
    <View style={styles.card}>
    {/* Top Section */}
    <View style={styles.topSection}>
      <View style={styles.leftTopSection}>
        <Text style={styles.appointmentDateText}>Appointment Date</Text>
        <Text style={styles.appointmentDate}>{item.appointmentDate}</Text>
      </View>
      <View style={styles.rightTopSection}>
        <View style={[styles.statusLabel, { backgroundColor: "#FFD495" }]}>
          <Text style={{ color: "#F08619" }}>{item.status}</Text>
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

        {/* Doctor Name and Description */}
      </View>
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{item.doctorName}</Text>
        <Text style={styles.doctorDescription}>{item.doctorDescription}</Text>
      </View>
      {/* Edit Icon */}
      <View style={styles.rightBottomSection}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={24}
            color="#D51D33"
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

export default Cards

const styles = StyleSheet.create({})
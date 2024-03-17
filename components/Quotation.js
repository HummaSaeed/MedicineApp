import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { primaryColor } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { windowWidth } from "../utils/Dimensions";
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons';

const data = [
  {
    id: "1",
    appointmentDate: "Thu 01 Jun, 12:00 PM",
    status: "Pending",
    doctorName: "Medicine",
    sessionType: "Type",
    deliveryTime: "60 mins",
    phoneno:+917584758
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
        <View style={[styles.statusLabel, { backgroundColor: "#fdf3e7" }]}>
          <Text style={{ color: "#F08D19" }}>{item.status}</Text>
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
          {""}
          {item.deliveryTime}
        </Text>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate("Chat")}}>
             <Feather
               name="phone-call"
               size={0.04 * windowWidth}
               color="#12375C"
             />
             </TouchableOpacity> 
        <Text style={styles.doctorDescription}>
          
          {item.phoneno}
        </Text>
        </View>
      </View>
    </View>
    <View style={styles.bottom}>
      <Text style={styles.expectedCost}>Expected Cost</Text>
      <Text style={styles.expectedCostValue}>₹200</Text>
    </View>
    <View style={styles.bottom}>
      <Text style={styles.expectedCost}>Discount</Text>
      <Text style={styles.expectedCostValue}>200%</Text>
    </View>
    <TouchableOpacity
      style={[styles.expandButton]}
      onPress={() => {
        navigation.navigate("PatientReview");
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const Quotation = ({ navigation }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => renderItem({ item, navigation })}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};

export default Quotation;

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
    paddingHorizontal: 12,
  },
  expectedCost: {
    fontFamily: "Barlow-SemiBold",
    fontSize: windowWidth * 0.045,
    color: "#0E4889",
  },
  expectedCostValue: {
    fontFamily: "Barlow-SemiBold",
    fontSize: windowWidth * 0.045,
  },
  expandButton: {
    backgroundColor: "#D51D33",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 5,
    marginTop: windowWidth * 0.02,
    padding: windowWidth * 0.03,
  },
  buttonText: {
    color: "white",
    fontSize: windowWidth * 0.045,
    lineHeight: windowWidth * 0.055,
    fontFamily: "Barlow-Bold",
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: windowWidth * 0.02,
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
  bottom: {
    flexDirection: "row",
    paddingVertical: windowWidth * 0.02,
    justifyContent: "space-between",
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
    marginLeft:10
  },
  rightBottomSection: {
    justifyContent: "flex-end",
  },
});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Layout from "./Layout";
import TopBar from "../components/TopBar";
import { windowWidth, windowHeight } from "../utils/Dimensions";

const ManagePatient = ({ navigation }) => {
  return (
    <Layout>
      <TopBar
        lefticon={"arrow-back-outline"}
        lefticonPress={() => {
          navigation.goBack();
        }}
        heading={"Manage Patients"}
        name={"ellipsis-horizontal"}
        navigation={navigation}
      />
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={styles.addpatient}>+ Add new Patient</Text>
        <View style={styles.patient}>
          <Text style={styles.patientname}>Ved</Text>
          <View style={styles.patientcontainer}>
            <Text style={styles.patientdetail}>Myself, 35, Male</Text>
            <Text style={styles.editpatient}>Edit</Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default ManagePatient;

const styles = StyleSheet.create({
  addpatient: {
    fontSize: 20,
    fontFamily: "Barlow-Regular",
    color: "#0E4889",
    textAlign: "left",
    marginBottom: 10,
  },
  patient: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000000",
    padding: 20,
    width: windowWidth * 0.9, // Adjusted width for responsiveness
    marginTop: 10,
  },
  patientcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  patientname: {
    fontSize: 17,
    fontFamily: "Barlow-SemiBold",
  },
  patientdetail: {
    fontSize: 17,
    color: "#616161",
  },
  editpatient: {
    fontSize: 17, // Adjusted font size for consistency
    fontFamily: "Barlow-SemiBold",
    color: "#0E4889",
  },
});

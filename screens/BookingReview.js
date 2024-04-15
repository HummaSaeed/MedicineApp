import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TopBar from "../components/TopBar";
import PatientDetail from "../components/PatientDetail";
import PaymentDetail from "./PaymentDetail";
import Layout from "./Layout";
import {
  primaryColor,
  textColor,
  backgroundColor,
} from "../utils/colors";
import { windowWidth, windowHeight } from "../utils/Dimensions";

const BookingReview = ({ navigation }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [showPatientDetail, setShowPatientDetail] = useState(false);

  const handleSelectSection = (section) => {
    setSelectedSection(section);
    setShowPatientDetail(section === "Patient");
  };

  const patientData = {
    "Full Name": "Roberts Amelia",
    "Email": "roberts@gmail.com",
    "Contact Number": "041-268203",
    "User/Other": "Booked for User",
    "Age": 23,
    "Gender": "Female",
    "Session Type": "In-Person",
    "Slot": "Morning",
    "Date": "3-12-2022",
    "Reason": "To get consultation",
  };
  const paymentData = {
    "Per Session Fee": "₹ 200",
    "No. of Patients": "1",
    "Grand Total": "₹ 200",
  };

  return (
    <Layout>
      <TopBar
        heading={"Review"}
        name={""}
        navigation={navigation}
        lefticon={"arrow-back-outline"}
        lefticonPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.section,
            selectedSection === "Patient" && styles.selectedSection,
          ]}
          onPress={() => handleSelectSection("Patient")}
        >
          <View
            style={[
              styles.iconContainer,
              selectedSection === "Patient" && styles.selectedIconContainer,
            ]}
          >
            <FontAwesome
              name="user"
              size={windowWidth * 0.05}
              color={
                selectedSection === "Patient" ? primaryColor : "#616161"
              }
            />
          </View>
          <Text
            style={[
              styles.sectionText,
              selectedSection === "Patient" && styles.selectedSectionText,
            ]}
          >
            Patient Detail
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.section,
            selectedSection === "Payment" && styles.selectedSection,
          ]}
          onPress={() => handleSelectSection("Payment")}
        >
          <View
            style={[
              styles.iconContainer,
              selectedSection === "Payment" && styles.selectedIconContainer,
            ]}
          >
            <FontAwesome
              name="credit-card"
              size={windowWidth * 0.05}
              color={
                selectedSection === "Payment" ? primaryColor : "#616161"
              }
            />
          </View>
          <Text
            style={[
              styles.sectionText,
              selectedSection === "Payment" && styles.selectedSectionText,
            ]}
          >
            Payment Detail
          </Text>
        </TouchableOpacity>
      </View>

      {showPatientDetail ? (
        <PatientDetail patientData={patientData} />
      ) : (
        <PaymentDetail paymentData={paymentData} />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: windowWidth * 0.02,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    padding: windowWidth * 0.04,
    borderRadius: windowWidth * 0.02,
  },
  iconContainer: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: windowWidth * 0.075,
    borderWidth: 1,
    borderColor: "#616161",
    justifyContent: "center",
    alignItems: "center",
    marginRight: windowWidth * 0.01,
  },
  selectedIconContainer: {
    borderColor: primaryColor,
  },
  sectionText: {
    fontFamily: "Barlow-Regular",
    fontSize: windowWidth * 0.04,
    fontWeight: "500",
    lineHeight: windowWidth * 0.045,
    letterSpacing: 0,
    textAlign: "left",
    color: "#616161",
  },
  selectedSectionText: {
    color: primaryColor,
  },
  selectedSection: {},
});

export default BookingReview;

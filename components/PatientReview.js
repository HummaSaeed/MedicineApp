import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import { FontAwesome } from "@expo/vector-icons";
import PharmacyPatientDetails from "./PharmacyPatientDetails";
import PharmacyPaymentDetail from '../screens/PharmacyPaymentDetails'
import Layout from "../screens/Layout";
const { width, height } = Dimensions.get("window");

const PatientReview = ({ navigation }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [showPatientDetail, setShowPatientDetail] = useState(false);

  const handleSelectSection = (section) => {
    setSelectedSection(section);
    setShowPatientDetail(section === "Patient");
  };
  const patientData = {
    "Full Name": "Roberts Amelia",
    Email: "roberts@gmail.com",
    "Contact Number": "041-268203",
    "User/Other": "Booked for User",
    Age: 23,
    Gender: "Female",
    "Medicine Name": "Name",
    Amount: "23",
    Date: "3-12-2022",
  };
  const paymentData = {
    "Medicine Cost": "₹ 200",
    Discount: "₹ 200",
    "Delivery Charges": "₹ 200",
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
              size={width * 0.05}
              color={selectedSection === "Patient" ? "#0E4889" : "#616161"}
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
              size={width * 0.05}
              color={selectedSection === "Payment" ? "#0E4889" : "#616161"}
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
        <PharmacyPatientDetails patientData={patientData} />
      ) : (
        <PharmacyPaymentDetail paymentData={paymentData} />
      )}
    </Layout>
  );
};

export default PatientReview;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    // justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // padding: width * 0.05,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    padding: width * 0.04,
    borderRadius: width * 0.02,
  },
  iconContainer: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.075,
    borderWidth: 1,
    borderColor: "#616161",
    justifyContent: "center",
    alignItems: "center",
    marginRight: width * 0.01,
  },
  selectedIconContainer: {
    borderColor: "#0E4889",
  },
  sectionText: {
    fontFamily: "Barlow-Regular",
    fontSize: width * 0.04,
    fontWeight: "500",
    lineHeight: width * 0.045,
    letterSpacing: 0,
    textAlign: "left",
    color: "#616161",
  },
  selectedSectionText: {
    color: "#0E4889",
  },
  selectedSection: {
    // Change the background color when selected
  },
});

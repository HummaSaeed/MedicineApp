import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Modal } from "react-native";
import PrimaryButton from "./PrimaryButton";

const { width } = Dimensions.get("window");
const PharmacyPatientDetails = ({ patientData }) => {
    const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  return (
    <View style={{ height: "80%" }}>
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        {Object.entries(patientData).map(([label, value], index) => (
          <Text key={index} style={styles.label}>
            {label}:
          </Text>
        ))}
      </View>
      <View style={styles.rightColumn}>
        {Object.entries(patientData).map(([label, value], index) => (
          <Text key={index} style={styles.value}>
            {typeof value === "object"
              ? Object.values(value).join(", ")
              : value}
          </Text>
        ))}
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <PrimaryButton
        title={"Pay"}
        backgroundColor={"#0E4889"}
        textColor={"white"}
        borderColor={"#0E4889"}
        onPress={toggleModal}
      />
      <PrimaryButton
        title={"Cancel"}
        backgroundColor={"transparent"}
        textColor={"#D51D33"}
        borderColor={"white"}
      />
    </View>

    {/* Payment Success Modal */}
    <Modal
      transparent={true}
      animationType="slide"
      visible={isModalVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          {/* Close Button */}

          {/* Modal Content */}
          <View style={styles.modalContent}>
            <Text style={styles.title}>
              You have successfully paid for the appointment.
            </Text>
            <View style={{ marginTop: 40 }}>
              <PrimaryButton
                title={"Ok"}
                backgroundColor={"#0E4889"}
                textColor={"white"}
                borderColor={"#0E4889"}
                onPress={toggleModal}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  </View>
  )
}

export default PharmacyPatientDetails

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: width * 0.05,
      paddingVertical: width * 0.03,
      borderBottomWidth: 1,
      borderBottomColor: "#A4B1AE33",
      marginBottom: 2,
    },
    leftColumn: {
      flex: 1,
    },
    rightColumn: {
      flex: 1,
    },
    label: {
      fontFamily: "Barlow-SemiBold",
      fontSize: width * 0.04,
      fontWeight: "500",
      lineHeight: width * 0.045,
      letterSpacing: 0,
      textAlign: "left",
      color: "#616161",
      marginBottom: width * 0.04,
    },
    value: {
      fontFamily: "Barlow-SemiBold",
      fontSize: width * 0.04,
      fontWeight: "500",
      lineHeight: width * 0.045,
      letterSpacing: 0,
      textAlign: "left",
      color: "#000000",
      marginBottom: width * 0.04,
    },
    buttonContainer: {
      paddingHorizontal: 10,
      position: "absolute",
      bottom: 10,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: "white",
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 50,
      width: "80%",
      elevation: 5,
    },
    closeButton: {
      position: "absolute",
      top: -20,
      right: -10,
      backgroundColor: "white",
      borderRadius: 40,
      borderWidth: 2,
      borderColor: "#BCBCBC",
      padding: 5,
      zIndex: 1,
    },
    modalBackground: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent black
      justifyContent: "center",
      alignItems: "center",
    },
    modalText: {
      fontFamily: "Barlow",
      fontSize: 22,
      fontWeight: "700",
      lineHeight: 28,
      letterSpacing: 0,
      textAlign: "center",
      color: "#FFFFFF",
      marginBottom: 20,
    },
    title: {
      fontFamily: "Barlow-Bold",
      color: "#0E4889",
      fontSize: 20,
      lineHeight: 18,
      textAlign: "center",
    },
  });
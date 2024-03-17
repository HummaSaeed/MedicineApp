// OthersBooking.js

import React, { useState } from "react";
import {
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Booking from "./Booking";
import CustomDropDown from "../components/CustomDropDown";
import PrimaryButton from "../components/PrimaryButton";

const OthersBooking = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(true);
  const [name, setName] = useState("");
  const relation = ["Father", "Mother", "Spouse", "Sibling", "Son", "Daughter"];
  const age = ["5-10", "10-20", "20-40"];
  const Gender = ["Male", "Female"];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleFormSubmit = () => {
    setModalVisible(false);
    navigation.navigate('BookingReview')
  };
  return (
    <>
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Members Information</Text>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.label}>Relationship to me</Text>
              <CustomDropDown
                placeholder="Select One"
                options={relation}
                style={{ fontFamily: "Barlow-Regular" }}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                placeholder="Enter"
                value={name}
                placeholderTextColor="#0E4889"
                onChangeText={(text) => setName(text)} // Use onChangeText to handle text changes
                style={{
                  fontFamily: "Barlow-Regular",
                  backgroundColor: "#D4D4D4",
                  borderRadius: 20,
                  fontSize: 18,
                  padding: 10,
                  paddingHorizontal: 20,
                  color: "#0E4889", // Set text color to blue
                }}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.label}>Age</Text>
              <CustomDropDown
                placeholder="Select One"
                options={age}
                style={{ fontFamily: "Barlow-Regular" }}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.label}>Gender</Text>
              <CustomDropDown
                placeholder="Select One"
                options={Gender}
                style={{ fontFamily: "Barlow-Regular" }}
              />
            </View>
            <Text style={styles.text}>
              Do you want us to send this member a link so that they can manage
              their own appointments
            </Text>
            <View style={styles.radiocontainer}>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  selectedOption === "Yes" && styles.selectedRadioButton,
                ]}
                onPress={() => handleSelectOption("Yes")}
              >
                <View
                  style={[
                    styles.radioInnerCircle,
                    selectedOption === "Yes" && styles.radioInnerCircleSelected,
                  ]}
                />
                <Text style={styles.label}>Yes</Text>
              </TouchableOpacity>
              <View style={{ alignItems: "flex-start", width: "50%" }}>
                <TouchableOpacity
                  style={[
                    styles.radioButton,
                    selectedOption === "No" && styles.selectedRadioButton,
                  ]}
                  onPress={() => handleSelectOption("No")}
                >
                  <View
                    style={[
                      styles.radioInnerCircle,
                      selectedOption === "No" &&
                        styles.radioInnerCircleSelected,
                    ]}
                  />
                  <Text style={styles.label}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <PrimaryButton
                title={"Submit"}
                backgroundColor={"#0E4889"}
                textColor={"white"}
                borderColor={"#0E4889"}
                onPress={handleFormSubmit}
              />
            </View>
          </View>
        </View>
      </Modal>
      {isModalVisible ? <Booking /> : <Booking />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Opacity Background Color
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  submitButton: {
    backgroundColor: "#0E4889",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 22,
    color: "#0E4889",
    alignSelf: "center",
  },
  label: {
    color: "#616161",
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontFamily: "Barlow-Regular",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: 1,
    textAlign: "left",
  },
  radiocontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectedRadioButton: {
    borderColor: "#0E4889",
  },
  radioInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#0E4889",
    marginRight: 5,
  },
  radioInnerCircleSelected: {
    backgroundColor: "#0E4889",
  },
  label: {
    fontFamily: "Barlow",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: 1,
    textAlign: "left",
  },
});

export default OthersBooking;

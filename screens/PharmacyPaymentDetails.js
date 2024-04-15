import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";

import CustomDropDown from "../components/CustomDropDown";
import PrimaryButton from "../components/PrimaryButton";

const { width } = Dimensions.get("window");

const PharmacyPaymentDetail = ({ paymentData }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState();
  const [pin, setPin] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isaddress, setModalAddress] = useState(false);
  const paymentmethod = ["Payment Online", "Cash on Delivery"];


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          {Object.entries(paymentData).map(([label, value], index) => (
            <Text key={index} style={styles.label}>
              {label}:
            </Text>
          ))}
        </View>
        <View style={styles.rightColumn}>
          {Object.entries(paymentData).map(([label, value], index) => (
            <Text key={index} style={styles.value}>
              {typeof value === "object"
                ? Object.values(value).join(", ")
                : value}
            </Text>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 15, paddingHorizontal: 10 }}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={styles.label}>Address Detail</Text>
          <Text
            style={styles.label}
            onPress={() => {
              setModalAddress(!isaddress);
            }}
          >
            {" "}
            Add
          </Text>
        </View>
        <TextInput
          placeholder="No Address Added"
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
      <View style={{ paddingHorizontal: 10 }}>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.label}>Payment Status</Text>
          <CustomDropDown
            placeholder="Advance Online"
            options={paymentmethod}
            style={{ fontFamily: "Barlow-Regular" }}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.label}>Payment Type *</Text>
          <CustomDropDown
            placeholder="Card"
            options={paymentmethod}
            style={{ fontFamily: "Barlow-Regular" }}
          />
        </View>
      </View>
      <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
        <Text style={styles.label}>Card Holder Name</Text>
        <TextInput
          placeholder="Enter Name"
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
      <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput
          placeholder=""
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
      <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
          <Text style={styles.label}>Expiry Date</Text>
          <TextInput
            placeholder=""
            value={name}
            placeholderTextColor="#0E4889"
            onChangeText={(text) => setName(text)} // Use onChangeText to handle text changes
            style={{
              fontFamily: "Barlow-Regular",
              backgroundColor: "#D4D4D4",
              borderRadius: 20,
              minWidth: "45%",
              fontSize: 18,
              padding: 10,
              paddingHorizontal: 20,
              color: "#0E4889", // Set text color to blue
            }}
          />
        </View>
        <View style={{ marginTop: 15, paddingHorizontal: 20 }}>
          <Text style={styles.label}>CVV</Text>
          <TextInput
            placeholder=""
            value={name}
            placeholderTextColor="#0E4889"
            onChangeText={(text) => setName(text)} // Use onChangeText to handle text changes
            style={{
              fontFamily: "Barlow-Regular",
              backgroundColor: "#D4D4D4",
              borderRadius: 20,
              fontSize: 18,
              minWidth: "45%",
              padding: 10,
              paddingHorizontal: 20,
              color: "#0E4889", // Set text color to blue
            }}
          />
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          marginTop: 10,
          width: "100%",
        }}
      >
        <PrimaryButton
          title={"Pay"}
          backgroundColor={"#0E4889"}
          textColor={"white"}
          borderColor={"#0E4889"}
          onPress={toggleModal}
        />
      </View>
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
      <Modal
        transparent={true}
        animationType="slide"
        visible={isaddress}
        onRequestClose={()=>{setModalAddress(false)}}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Address</Text>
            
            <View style={{ marginTop: 15 }}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                placeholder=""
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
            <View >
              <Text style={styles.label}>City</Text>
              <TextInput
                placeholder=""
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
            <View >
              <Text style={styles.label}>Pin Code</Text>
              <TextInput
                placeholder=""
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
            <View style={{ marginTop: 10 }}>
              <PrimaryButton
                title={"Add"}
                backgroundColor={"#0E4889"}
                textColor={"white"}
                borderColor={"#0E4889"}
                onPress={()=>{setModalAddress(false)}}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PharmacyPaymentDetail;

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
    alignItems: "flex-end",
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
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 22,
    color: "#0E4889",
    alignSelf: "center",
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

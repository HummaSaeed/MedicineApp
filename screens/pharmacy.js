import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Image
} from "react-native";
import TopBar from "../components/TopBar";
import Layout from "./Layout";
import { MaterialIcons } from "@expo/vector-icons";
import CentralTabBar from "../components/CentralTabBar";
import Quotation from '../components/Quotation';
import Active from "../components/Active";
import OrderData from "../components/OrderData";
import PrimaryButton from "../components/PrimaryButton";
import { windowWidth, windowHeight } from "../utils/Dimensions";
import image from '../assets/pharmacy.png';

const pharmacy = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Completed");
  const [isaddress, setModalAddress] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState();
  const [pin, setPin] = useState();

  useEffect(() => {
    setModalAddress(true)
  }, [])
  const handleUpload=()=>{
    navigation.navigate("PrescriptionUpload")
  }
  
  return (
    <Layout>
      <TopBar
        lefticon={"arrow-back-outline"}
        lefticonPress={() => {
          navigation.goBack();
        }}
        heading={"Pharmacy"}
        name={"ellipsis-horizontal"}
        navigation={navigation}
      />
      <Image source={image} />
      <Text style={styles.uploadPhotoText}>Upload Photo</Text>

      <View style={styles.centeredContainer}>
        <TouchableOpacity style={styles.pictureUploader} onPress={()=>{navigation.navigate("PrescriptionUpload",{navigation})}}>
          <MaterialIcons name="photo-camera" size={windowWidth * 0.1} color="#010101" />
          <Text style={styles.photoUploaderText}>
            Add your prescription image
          </Text>
          <Text style={styles.selectPhotoText}>Select Photo</Text>
        </TouchableOpacity>
        <Text style={styles.addFromRecordText}>Add from record</Text>
      </View>
      <Text style={styles.ordersText}>Orders</Text>
      <CentralTabBar
        tabs={{
          title: "",
          viewAllText: "",
          items: [
            { id: "Completed", label: "Completed" },
            { id: "Active", label: "Active" },
            { id: "Quotation", label: "Quotation" },
          ],
        }}
        renderContent={(selectedTab) => {
          switch (selectedTab) {
            case "Completed":
              return <OrderData navigation={navigation} />;
            case "Active":
              return <Active navigation={navigation} />;
            case "Quotation":
              return <Quotation navigation={navigation} />;
            default:
              return null;
          }
        }}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
       <Modal
        transparent={true}
        animationType="slide"
        visible={isaddress}
        onRequestClose={()=>{setModalAddress(false)}}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Delivery Address</Text>
            
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
                title={"Confirm"}
                backgroundColor={"#0E4889"}
                textColor={"white"}
                borderColor={"#0E4889"}
                onPress={()=>{setModalAddress(false)}}
              />
            </View>
          </View>
        </View>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  uploadPhotoText: {
    fontFamily:'Barlow-SemiBold',
    color: "#616161",
    fontSize: windowWidth * 0.04,
    marginLeft: windowWidth * 0.05,
  },
  centeredContainer: {
    alignItems: "center",
  },
  pictureUploader: {
  
    backgroundColor: "#E7E7E7",
    opacity: 0.8,
    width: windowWidth * 0.75,
    height: windowHeight * 0.25,
    borderRadius: windowWidth * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  photoUploaderText: {
    color: "#909090",
    fontSize: windowWidth * 0.035,
  },
  selectPhotoText: {
    color: "#616161",
    fontSize: windowWidth * 0.04,
    marginTop: windowHeight * 0.02,
  },
  addFromRecordText: {
    color: "#0E4889",
    fontFamily:'Barlow-SemiBold',
    fontSize: windowWidth * 0.045,
    marginTop: windowHeight * 0.005,
  },
  ordersText: {
    color: "#616161",
    fontFamily:'Barlow-SemiBold',
    fontSize: windowWidth * 0.04,
    marginLeft: windowWidth * 0.05,
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

export default pharmacy;

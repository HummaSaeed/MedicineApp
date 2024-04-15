import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import TopBar from "../components/TopBar";
import PrimaryButton from "../components/PrimaryButton";
import backgroundImage from "../assets/bg.png";
import Modal from "react-native-modal";
import { Feather } from "@expo/vector-icons";

const PrescriptionDetail = ({ navigation, route }) => {
  const { item } = route.params;
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <TopBar
        heading={"Doctor's Prescription"}
        name={"ellipsis-horizontal"}
        navigation={navigation}
        lefticon={"arrow-back-outline"}
        lefticonPress={() => {
          navigation.goBack();
        }}
      />

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Prescription.png")}
          style={styles.image}
        />
        <TouchableOpacity style={styles.zoomButton} onPress={toggleModal}>
          <Feather name="zoom-in" size={15} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ padding: 20 }}>
        <PrimaryButton
          title={"Download"}
          backgroundColor={"#0E4889"}
          textColor={"white"}
          borderColor={"#0E4889"}
        />
      </View>

      <View style={{ paddingHorizontal: 40 }}>
        <PrimaryButton
          title={"Forward to Pharmacist"}
          backgroundColor={"#219653"}
          textColor={"white"}
          borderColor={"#219653"}
          onPress={() => {
            navigation.navigate("Pharmacy");
          }}
        />
      </View>

      <View style={{ paddingHorizontal: 60 }}>
        <PrimaryButton
          title={"Forward to Lab"}
          backgroundColor={"#219653"}
          textColor={"white"}
          borderColor={"#219653"}
          onPress={() => {
            navigation.navigate("Diagnostics");
          }}
        />
      </View>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <Image
          source={require("../assets/Prescription.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </Modal>
    </ImageBackground>
  );
};

export default PrescriptionDetail;

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: 300,
  },
  zoomButton: {
    position: "absolute",
    bottom: 0,
    right: 10,
    backgroundColor: "#0E4889",
    padding: 10,
    borderRadius: 50,
  },
});

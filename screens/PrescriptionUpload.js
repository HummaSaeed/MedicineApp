import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Layout from "./Layout";
import TopBar from "../components/TopBar";
import React from "react";
import { Iconify } from "react-native-iconify";
import uploader from "../assets/imageupload.png";
import PrimaryButton from "../components/PrimaryButton";

const PrescriptionUpload = ({ navigation }) => {
  return (
    <Layout>
      <TopBar
        lefticon={"arrow-back-outline"}
        lefticonPress={() => {
          navigation.goBack();
        }}
        heading={"Upload Prescription"}
        name={"ellipsis-horizontal"}
        navigation={navigation}
      />
      <View style={{ paddingHorizontal: 20 }}>
        <View>
          <Text style={styles.prescriptionText}>
            Do you have a prescription for your medicine?
          </Text>
          <Text style={styles.arrangeText}>
            Just upload it and we will arrange the medicines for you.
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity style={styles.btncontainer}>
              <View style={styles.button}>
                <Iconify icon="mdi:camera-plus" size={35} color={"#909090"} />
                <Text style={styles.text}>Use Camera</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btncontainer}>
              <View style={styles.button}>
                <Iconify
                  icon="solar:gallery-add-bold-duotone"
                  size={30}
                  color={"#909090"}
                />

                <Text style={styles.text}>Use Gallery</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.linecontainer} />
        </View>
        <View style={styles.overcontainer}>
          <View style={styles.innerContainer}>
            <Image source={uploader} style={styles.profileUploader} />
            <Text style={styles.pharmacytext}>
              Our pharmacist will call to confirm the medicines in your
              prescription.
            </Text>
          </View>
        </View>
        <PrimaryButton
          title={"Save Changes"}
          backgroundColor={"#0E4889"}
          textColor={"white"}
          borderColor={"#0E4889"}
        />
      </View>
    </Layout>
  );
};

export default PrescriptionUpload;

const styles = StyleSheet.create({
  prescriptionText: {
    color: "#0E4889",
    fontSize: 19.8,
    fontWeight: "500",
    lineHeight: 30.22,
    wordWrap: "break-word",
  },
  arrangeText: {
    color: "#616161",
    fontSize: 16.5,
    fontFamily: "Poppins",
    fontWeight: "300",
    lineHeight: 25.18,
    wordWrap: "break-word",
  },
  btncontainer: {
    height: 132,
    width: 122,
    borderRadius: 11,
    backgroundColor: "#E7E7E7",
    padding: 17,
    display: "flex",
    marginRight: 20,
    justifyContent: "center",
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  pharmacytext: {
    textAlign: "center",
    fontFamily: "Barlow-Regular",
    fontSize: 20,
    color: "#0E4889",
    textAlign: "left",
    // Adjust as needed
  },
  linecontainer: {
    width: "100%",
    height: 20,
    marginTop: 10,
    backgroundColor: "#D4D4D4",
    display: "flex",
  },
  overcontainer: {
    borderWidth: 1,
    borderColor: "#EDEFEF",
    marginBottom: 140,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 150,
    maxWidth: 250,
    // borderWidth:1,
    // borderColor:"black"
  },
  profileUploader: {
    // adjust as needed
    borderRadius: 20, // half of width and height to make it circular
    marginRight: 10,
  },
  text: {
    fontSize: 16, // adjust as needed
    fontFamily: "Poppins", // adjust as needed
    fontWeight: "500", // adjust as needed
    lineHeight: 25.18, // adjust as needed
    color: "#000000", // adjust as needed
  },
});

import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Layout from "./Layout";
import TopBar from "../components/TopBar";
import PrimaryButton from "../components/PrimaryButton";

const AddressDetail = ({ navigation }) => {
  return (
    <Layout>
      <TopBar
        lefticon={"arrow-back-outline"}
        lefticonPress={() => {
          navigation.goBack();
        }}
        heading={"Address Detail"}
        name={"ellipsis-horizontal"}
        navigation={navigation}
      />
      <View
        style={{ display: "flex", justifyContent: "flex-start", padding: 20 }}
      >
        <Text style={styles.addpatient}>Enter pincode</Text>
        <View style={styles.patientcontainer}>
          <TextInput
            style={[styles.textInput, { marginRight: 15 }]}
            placeholder="400076"
            placeholderTextColor="#D9D9D9"
          />
          <TextInput
            style={[styles.textInput]}
            placeholder="Use current location"
            placeholderTextColor="#0E4889"
          />
        </View>
        <Text style={styles.addpatient}>
          House number, Floor, Building name
        </Text>
        <View style={styles.patientcontainer}>
          <TextInput
            style={styles.textInput}
            placeholder="21/24, Kailash Apartments"
            placeholderTextColor="#D9D9D9"
          />
        </View>
        <Text style={styles.addpatient}>Street, Locality, Area</Text>
        <View style={styles.patientcontainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Indirangar"
            placeholderTextColor="#D9D9D9"
          />
        </View>
        <Text style={styles.addpatient}>Landmark ( Optional )</Text>
        <View style={styles.patientcontainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Closest shoppin mall, shop, park etc."
            placeholderTextColor="#D9D9D9"
          />
        </View>

        <View style={styles.patientcontainer}>
          <View style={{ width: "50%", marginRight: 10 }}>
            <Text style={styles.addpatient}>City</Text>
            <TextInput
              style={[styles.textInput]}
              placeholder="Mumbai"
              placeholderTextColor="#D9D9D9"
            />
          </View>
          <View style={{ width: "50%" }}>
            <Text style={styles.addpatient}>State</Text>
            <TextInput
              style={[styles.textInput]}
              placeholder="Mahashratara"
              placeholderTextColor="#D9D9D9"
            />
          </View>
        </View>
        <View style={{marginTop:50}}>
        <PrimaryButton
          title={"Save and Continue"}
          backgroundColor={"#0E4889"}
          textColor={"white"}
          borderColor={"#0E4889"}
          
        />
        </View>
      </View>
    </Layout>
  );
};

export default AddressDetail;

const styles = StyleSheet.create({
  patientcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 14,
    paddingHorizontal: 10,

    height: 60,
  },
  addpatient: {
    fontSize: 16,
    fontFamily: "Barlow-Regular",
    color: "#0E4889",
    textAlign: "left",
    marginBottom: 10,
    marginTop: 10,
  },
});

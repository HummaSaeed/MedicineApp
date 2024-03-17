// EditProfileScreen.js
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Layout from "./Layout";
import TopBar from "../components/TopBar";
import Input from "../components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import PrimaryButton from "../components/PrimaryButton";
import * as ImagePicker from "react-native-image-picker";

const EditProfileScreen = ({ navigation, route }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePick = () => {
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        setSelectedImage(response);
        // You can handle the selected image, e.g., upload it to a server
        // or save it in the local state for further use.
      }
    });
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    hideDatePicker();
    // Format the date as needed
    const formattedDate = selectedDate.toISOString().split("T")[0];
    setDob(formattedDate);
  };

  const handleSave = () => {
    // Implement your save logic here
    // You can save the user's profile information to your backend or perform any other action.
  };

  return (
    <Layout>
      <TopBar
        lefticon={"menu"}
        lefticonPress={()=>{navigation.openDrawer()}}
        heading={"Edit Profile"}
        navigation={navigation}
      />
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.circularImageUploader}
          onPress={handleImagePick}
        >
          {selectedImage ? (
            <Image
              source={{ uri: selectedImage.uri }}
              style={styles.imagePreview}
            />
          ) : (
            <MaterialIcons name="photo-camera" size={40} color="#0E4889" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Input
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Input label="Last Name" value={lastName} onChangeText={setLastName} />
        <Input label="Gender" value={gender} onChangeText={setGender} />

        {/* DOB Input with Date Picker */}
        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <View style={styles.input}>
            
            <Text>{dob}</Text>
          </View>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <Input
          label="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
        <Input label="Email" value={email} onChangeText={setEmail} />

        {/* Save button */}
        <View style={{ paddingHorizontal: 20 }}>
          <PrimaryButton
            title={"Save Changes"}
            backgroundColor={"#0E4889"}
            textColor={"white"}
            borderColor={"#0E4889"}
            onPress={handleSave}
          />
          <PrimaryButton
            title={"Cancel"}
            backgroundColor={"transparent"}
            textColor={"#D51D33"}
            borderColor={"white"}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: "100%",
    borderRadius: 200,
    backgroundColor: "#D4D4D4",
    paddingHorizontal: 20,
    marginBottom: 15,
    justifyContent: "center",
  },
  label: {
    fontFamily: "Barlow-Regular",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
    color: "#616161",
  },
  circularImageUploader: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#0E4889",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePreview: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  saveButton: {
    backgroundColor: "#0E4889",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default EditProfileScreen;

// EditProfileScreen.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet, View, Image, TouchableOpacity, ScrollView, Text, Alert
} from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Layout from './Layout';
import TopBar from '../components/TopBar';
import Input from '../components/Input';
import { MaterialIcons } from '@expo/vector-icons';
import PrimaryButton from '../components/PrimaryButton';
import * as ImagePicker from 'react-native-image-picker';
import { updateProfile, resetProfile } from '../auth/ProfileSlice'; 

const EditProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { profileData, status, error } = useSelector(state => state.profile);
  const user = useSelector(state => state.auth.user); // Assuming auth state contains user details
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    mobileNumber: '',
    email: '',
    // selectedImage: null
  });

  const handleInputChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };
  const openDrawer = () => {
    navigation.openDrawer();
  };

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
        dispatch(setSelectedImage(response.uri));
      }
    });
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    dispatch(setDob(formattedDate));
    hideDatePicker();
  };

  const handleSave = () => {
    dispatch(updateProfile({
      ...formData,
      role: user.role.name,
      userId: user.id,
      firstTime: "No", // Example, adapt based on your logic
      myDetails: "Details here",
      ageGroup: "Adult",
      primaryConcern: "General Health",
      sessionType: "Online"
    }));
  };


  return (
    <Layout>
       <TopBar
        lefticonPress={openDrawer}
        lefticon="menu"
        heading={"Edit Profile"}
        name={"notifications-sharp"}
        navigation={navigation}
      />
      <ScrollView style={styles.container}>
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
        <Input label="First Name" value={formData.firstName} onChangeText={text => handleInputChange('firstName', text)} />
        <Input label="Last Name" value={formData.lastName} onChangeText={text => handleInputChange('lastName', text)} />
        <Input label="Gender" value={formData.gender} onChangeText={text => handleInputChange('gender', text)} />
        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <View style={styles.input}>
            
            <Text></Text>
          </View>
        </TouchableOpacity>
        {/* <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        /> */}
        <Input label="Mobile Number" value={formData.mobileNumber} onChangeText={text => handleInputChange('mobileNumber', text)} />
        <Input label="Email" value={formData.email} onChangeText={text => handleInputChange('email', text)} />
        <View style={styles.buttonContainer}>
          <PrimaryButton title="Save Changes" onPress={handleSave} />
          <PrimaryButton title="Cancel" onPress={() => dispatch(resetProfile())} style={styles.cancelButton} />
        </View>
        {status === 'loading' && <Text>Saving...</Text>}
        {error && <Text>Error: {error}</Text>}
      </ScrollView>
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
    // justifyContent: "center",
  },
  input: {
    height: 50,
    width: "100%",
    borderRadius: 200,
    backgroundColor: "#D4D4D4",
    paddingHorizontal: 20,
    marginBottom: 15,
    // justifyContent: "center",
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

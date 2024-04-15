import TopBar from "./TopBar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import backgroundImage from "../assets/bg.png";

const Service = ({ navigation }) => {
  const doctorData = [
    { id: "1", name: "Doctor Consultation", profilePic: "../assets/profile1.png",path:"Book" },
    { id: "2", name: "My FamilyDr Team", profilePic: "../assets/profile2.png",path:'ServiceDetail' },
    { id: "3", name: "Pharmacy", profilePic: "../assets/profile2.png",path:'Pharmacy' },
    { id: "4", name: "Hospitals", profilePic: "../assets/profile2.png",path:"Hospitals" },
    { id: "5", name: "Diagnostic Service", profilePic: "../assets/profile2.png",path:'Service' },
    { id: "6", name: "Contact Us", profilePic: "../assets/profile2.png",path:'ContactUs' },
    // Add more doctor data as needed
  ];
  const onPress = (item) => {
    navigation.navigate(item);
  };

  const renderDoctorItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => {onPress(item.path)}} style={styles.button}>
        <Image
          style={styles.profilePic}
          source={require("../assets/profile1.png")}
        />
        <Text style={styles.doctorName}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <TopBar
     lefticon={"arrow-back-outline"}
     lefticonPress={() => {
       navigation.goBack();
     }}
      heading={"Services"}
      name={"ellipsis-horizontal"}
      navigation={navigation}
    />
    <FlatList
      data={doctorData}
      renderItem={renderDoctorItem}
      keyExtractor={(item) => item.id}
    />
  </ImageBackground>
  );
};

export default Service;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  button: {
    display: "flex",
    flexDirection: "row",
   alignItems:'center'
  },
  itemContainer: {
    marginLeft: 10,
    
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  doctorName: {
    fontFamily:'Barlow-SemiBold',
   color:'#333333',
    fontSize: 14,
  },
});

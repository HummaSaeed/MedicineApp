import React, {useState} from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import TopBar from '../../components/TopBar'
import backgroundImage from "../../assets/bg.png";
import { MaterialIcons } from "@expo/vector-icons";
import CentralTabBar from "../../components/CentralTabBar";
import PendingList from "../../components/PedingList";
import ConfirmedList from "../../components/ConfirmedList";
import CompletedList from "../../components/CompletedList";

const pharmacy = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Pending");
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <TopBar
        heading={"Diagnostics"}
        name={"ellipsis-horizontal"}
        navigation={navigation}
        lefticon={"arrow-back-outline"}
         lefticonPress={() => {
           navigation.goBack();
         }}
      />
      <Text style={{ color: "#616161", fontSize: 16, marginLeft: 20 }}>
        Upload Photo
      </Text>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.pictureUploader}>
          <MaterialIcons name="photo-camera" size={40} color="#010101" />
          <Text style={{ color: "#909090", fontSize: 14 }}>
            Add your prescription image
          </Text>
          <Text style={{ color: "#616161", fontSize: 16 }}>Select Photo</Text>
        </TouchableOpacity>
        <Text style={{ color: "#0E4889", fontSize: 18, marginTop: 20 }}>
          Add from record
        </Text>
       

      </View>
      <CentralTabBar
          tabs={{
            title: "",
            viewAllText: "",
            items: [
              { id: "Pending", label: "Completed" },
              {
                id: "Confirmed",
                label: "Active",
              },
              {
                id: "Completed",
                label: "Quotation",
              },
            ],
          }}
          renderContent={(selectedTab) => {
            switch (selectedTab) {
              case "Pending":
                return <PendingList navigation={navigation}/>;
              case "Confirmed":
                return <ConfirmedList navigation={navigation}/>;
              case "Completed":
                return <CompletedList navigation={navigation}/>;
              default:
                return null;
            }
          }}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
    </ImageBackground>
  );
};

export default pharmacy;

const styles = StyleSheet.create({
  pictureUploader: {
    backgroundColor: "#E7E7E7",
    opacity: 0.8,
    width: "75%",
    height: 190,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage:{
    flexGrow:1
  }
});

import { StyleSheet, Text, View } from "react-native";
import { windowWidth, windowHeight } from "../utils/Dimensions";
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import CardCarousal from "../components/CardCarousal";
import DoctorsProfile from "../components/DoctorsProfile";
import FilterModal from "../components/FilterModal";
import Layout from "./Layout";
export const doctorsList = [
  {
    title: 'Search by Specialist',
    data: [
      { id: 1, label: 'Skin Specialist' },
      { id: 2, label: 'Dentist' },
      { id: 3, label: 'Acupunctures' },
      { id: 4, label: 'Gynecologists' },
      { id: 5, label: 'Clinical Dieticians' },
      { id: 6, label: 'Ent Surgeons' },
      { id: 7, label: 'Cardiologist' },
      { id: 8, label: 'General Physicians' },
    ],
  },
  {
    title: 'Search by Disease',
    data: [
      { id: 1, label: 'Asthma' },
      { id: 2, label: 'Coronary Artery' },
      { id: 3, label: 'Malaria' },
      { id: 4, label: 'Bipolar' },
      { id: 5, label: 'Diabetes' },
      { id: 6, label: 'Depression' },
      { id: 7, label: 'BP' },
      { id: 8, label: 'Heart Attack' },
    ],
  },
  {
    title: 'Search by Hospitals',
    data: [
      { id: 1, label: 'Strudy Memorial' },
      { id: 2, label: 'Coronary Artery' },
      { id: 3, label: 'Malaria' },
      { id: 4, label: 'Bipolar' },
      { id: 5, label: 'Diabetes' },
      { id: 6, label: 'Depression' },
      { id: 7, label: 'BP' },
      { id: 8, label: 'Heart Attack' },
    ],
  },
];

const Appointments = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <Layout>
      <TopBar
        lefticon="menu"
        heading={"Look for Doctors"}
        name={"filter"}
        onPress={handleOpenModal}
        lefticonPress={() => {
          navigation.openDrawer();
        }}
      />
      <View style={{ paddingHorizontal: 20 }}>
        <SearchBar />
        <Text style={styles.title}>Modify by Filters</Text>
        <CardCarousal />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.subtitle}>Top </Text>
          <Text style={styles.title}>100+ </Text>
          <Text style={styles.subtitle}>Cardiologist</Text>
        </View>
        <DoctorsProfile navigation={navigation} />
      </View>
      <FilterModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        data={doctorsList}
      />
    </Layout>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Barlow-Bold",
    fontSize: windowWidth * 0.06, // 6% of window width
    lineHeight: 19.6,// 2.5% of window height
    color: "#0E4889",
    marginTop: windowHeight * 0.02, // 2% of window height
  },
  subtitleContainer: {
    flexDirection: "row",
    marginTop: windowHeight * 0.01, // 1% of window height
    marginBottom: windowHeight * 0.02, // 2% of window height
  },
  subtitle: {
    lineHeight: 19.6,
    fontFamily: "Barlow-Bold",
    fontSize: windowWidth * 0.06, // 6% of window width
    marginTop: windowHeight * 0.02,// 2.5% of window height
    color: "#616161",
  },
});

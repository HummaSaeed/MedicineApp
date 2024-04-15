import React from "react";
import { FlatList, StyleSheet } from "react-native";
import prescriptionrenderItem from "./Prescription";
const data = [
  {
    id: "1",
    date: "Thu 01 Jun, 12:00 PM",
    image: require("../assets/Prescription.png"),
  },
  {
    id: "2",
    date: "Thu 01 Jun, 12:00 PM",
    image: require("../assets/Prescription.png"),
  },
];

const Reports = ({navigation}) => {
  return (
    <FlatList
      data={data}
      renderItem={prescriptionrenderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.flatListContainer}
      navigation={navigation}
    />
  );
};

export default Reports;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 13,
  },
});

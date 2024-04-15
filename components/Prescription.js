import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

const Prescription = ({navigation}) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer} onPress={()=>{navigation.navigate("PrescriptionDetail",{item})}} >
      <View style={styles.card}>
        <View style={styles.leftSection}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.rightSection}>
          <View style={styles.upperPart}>
            <Text style={styles.upperPartText}>Appointment Date</Text>
            <Text style={styles.lowerPart}>{item.date}</Text>
          </View>

          <View style={styles.rightBottomSection}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="square-edit-outline"
                size={24}
                color="#D51D33"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

export default Prescription;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 13,
  },
  cardContainer: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: "rgba(14, 72, 137, 0.25)", // Opacity applied here
    borderLeftWidth: 2,
    borderLeftColor: "#0E4889",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  leftSection: {
    marginRight: 10,
  },
  image: {
    width: 130,
    height: 120,
    borderRadius: 25,
  },
  rightSection: {
    flex: 1,
    justifyContent: "space-between",
  },
  upperPart: {
    marginBottom: 10,
    marginTop: 10,
  },
  upperPartText: {
    fontFamily: "Barlow-Bold",
    color: "#616161",
    fontSize: 14,
    fontWeight: "bold",
  },
  lowerPart: {
    fontFamily: "Barlow-Regular",
    color: "#0E4889",
    fontSize: 16,
    fontWeight: "bold",
    // Add styles for the lower part of the right section
  },

  rightBottomSection: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});

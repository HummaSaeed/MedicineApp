import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const data = [
  {
    id: 1,
    profileImage: require("../assets/profile1.png"),
    doctorName: "Dr. John Doe",
    description: "Cardiologists, MBBS (Gold Medalists), FCPS (Cardiology)",
    specializations: [
      { name: "Wait Time", value: "Under 15 Mins" },
      { name: "Experience", value: "13 Years" },
      { name: "Satisfaction", value: "100% (2114)" },
    ],
    Inperson: "200",
    Online: "200",
    Both: "200",
  },
  {
    id: 2,
    profileImage: require("../assets/profile2.png"),
    doctorName: "Dr. Alice Smith",
    description: "Pediatrician",
    specializations: [
      { name: "Wait Time", value: "Under 15 Mins" },
      { name: "Experience", value: "13 Years" },
      { name: "Satisfaction", value: "100% (2114)" },
    ],
    Inperson: "200",
    Online: "200",
    Both: "200",
  },
  // Add more data as needed
];

const DoctorsProfile = ({ navigation }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleExpand = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const cardDetail = (item) => {
    navigation.navigate("DoctorsDetails", { doctor: item });
  };

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => cardDetail(item)}
    >
      <View style={styles.upperSection}>
        <View style={styles.profileContainer}>
          <View style={styles.profileCircle}>
            <Text style={styles.profiletext}>SR</Text>
          </View>
        </View>
        <View style={styles.largerSection}>
          <Text style={styles.doctorName}>{item.doctorName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.specializations}>
            {item.specializations.map((specialization, index) => (
              <View key={`${item.id}_${index}`} style={styles.specialization}>
                <Text style={styles.specializationText}>
                  {specialization.name}
                </Text>
                <Text style={styles.specializationValue}>
                  {specialization.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.lowerSection}>
        <TouchableOpacity
          style={[
            styles.expandButton,
            { height: expandedCard === item.id ? windowHeight * 0.15 : 40 },
            expandedCard === item.id ? styles.expandedButton : null,
          ]}
          onPress={() => handleExpand(item.id)}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>
              {expandedCard === item.id ? "View Price" : "View Price"}
            </Text>
            <AntDesign
              name={expandedCard === item.id ? "up" : "down"}
              size={16}
              color="white"
            />
          </View>
          {expandedCard === item.id && (
            <View style={styles.priceContainer}>
              <PriceItem label="In-Person" price={item.Inperson} />
              <PriceItem label="Online" price={item.Online} />
              <PriceItem label="Both" price={item.Both} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const PriceItem = ({ label, price }) => (
    <View style={styles.priceItem}>
      <View style={{display:'flex',flexDirection:'row'}}>
      <FontAwesome name="rupee" size={16} color="white" />
      <Text style={styles.priceText}>{price}</Text>
      </View>
      <Text style={styles.priceLabel}>{label}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderCard}
      keyExtractor={(item) => item.id.toString()}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#D4D4D4",
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    elevation: 2,
  },
  upperSection: {
    flexDirection: "row",
  },
  profileContainer: {
    marginRight: 10,
  },
  profileCircle: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: (windowWidth * 0.12) / 2,
    backgroundColor: "#0E4889",
    alignItems: "center",
    justifyContent: "center",
  },
  profiletext: {
    color: "white",
    fontSize: windowWidth * 0.06,
  },
  largerSection: {
    flex: 1,
  },
  doctorName: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.04,
    color: "#0E4889",
  },
  description: {
    fontSize: windowWidth * 0.03,
    color: "#616161",
    lineHeight: windowWidth * 0.05,
  },
  specializations: {
    marginTop: windowWidth * 0.02,
    flexDirection: "row",
  },
  specialization: {
    
    marginBottom: windowWidth * 0.01,
  },
  specializationText: {
    fontSize: windowWidth * 0.03,
    color: "#0E4889",
    fontFamily: "Barlow-Bold",
  },
  specializationValue: {
    fontSize: windowWidth * 0.03,
    color: "#616161",
    fontFamily: "Barlow-Bold",
    marginRight:windowWidth* 0.1
  },
  lowerSection: {
    marginTop: windowWidth * 0.02,
  },
  expandButton: {
    backgroundColor: "#D51D33",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 5,
    marginTop: windowWidth * 0.02,
    padding: 10,
  },
  expandedButton: {
    height: "auto",
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: windowWidth * 0.035,
    fontFamily: "Barlow-Bold",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: windowWidth * 0.02,
  },
  priceItem: {
    flexDirection: "column",
    alignItems: "center",
    marginRight:0.1*windowWidth
  },
  priceText: {
    color: "white",
    fontSize: windowWidth * 0.035,
    fontFamily: "Barlow-Bold",
    marginLeft: 5,
  },
  priceLabel: {
    color: "black",
    fontSize: windowWidth * 0.025,
    fontFamily: "Barlow-Bold",
    marginLeft: 5,
  },
  flatList: {
    marginTop: windowWidth * 0.02,
    backgroundColor: "transparent",
  },
});

export default DoctorsProfile;

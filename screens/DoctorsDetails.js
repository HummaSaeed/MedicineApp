import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import backgroundImage from "../assets/bg.png";
import TopBar from "../components/TopBar";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import CentralTabBar from "../components/CentralTabBar";
import OverView from "./OverView";
import Reviews from "./Reviews";
import PrimaryButton from "../components/PrimaryButton";
import Layout from "./Layout";
import {windowWidth} from '../utils/Dimensions'

const PriceItem = ({ label, price }) => (
  <View style={styles.priceItem}>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <FontAwesome name="rupee" size={16} color="white" />
      <Text style={styles.priceText}>{price}</Text>
    </View>
    <Text style={styles.priceLabel}>{label}</Text>
  </View>
);

const DoctorsDetails = ({ route, navigation }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedTab, setSelectedTab] = useState("Review");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleExpand = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const booking = () => {
    setModalVisible(false);
    navigation.navigate("Booking", { navigation: navigation });
  };

  const othersBooking = () => {
    setModalVisible(false);
    navigation.navigate("OthersBooking", { navigation: navigation });
  };

  const { doctor } = route.params;
  const lefticonPress = () => {
    navigation.goBack();
  };
  return (
    <>
      <Layout>
        <TopBar
          lefticon={"arrow-back-outline"}
          heading={doctor.doctorName}
          name={"ellipsis-horizontal"}
          navigation={navigation}
          lefticonPress={lefticonPress}
        />

        <View style={styles.cardContainer}>
          <View style={styles.upperSection}>
            <View style={styles.profileContainer}>
              <View style={styles.profileCircle}>
                <Text style={styles.profileText}>SR</Text>
              </View>
            </View>
            <View style={styles.largerSection}>
              <Text style={styles.doctorName}>{doctor.doctorName}</Text>
              <Text style={styles.description}>{doctor.description}</Text>
              <View style={styles.specializations}>
                {doctor.specializations.map((specialization, index) => (
                  <View
                    key={`${doctor.id}_${index}`}
                    style={styles.specializationWrapper}
                  >
                    <Text style={styles.specializationText}>
                      {specialization.name}
                    </Text>
                    <Text style={styles.specializationValueText}>
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
                { height: expandedCard === doctor.id ? 140 : 40 },
                expandedCard === doctor.id ? styles.expandedButton : null,
              ]}
              onPress={() => handleExpand(doctor.id)}
            >
              <View style={styles.expandButtonContent}>
                <Text style={styles.buttonText}>
                  {expandedCard === doctor.id ? "View Price" : "View Price"}
                </Text>
                {expandedCard === doctor.id ? (
                  <View style={{ marginLeft: 5, marginTop: 3 }}>
                    <AntDesign name="up" size={10} color="white" />
                  </View>
                ) : (
                  <View style={{ marginLeft: 5, marginTop: 3 }}>
                    <AntDesign name="down" size={10} color="white" />
                  </View>
                )}
              </View>
              {expandedCard === doctor.id && (
                <View style={styles.priceContainer}>
                  <PriceItem label="In-Person" price={doctor.Inperson} />
                  <PriceItem label="Online" price={doctor.Online} />
                  <PriceItem label="Both" price={doctor.Both} />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <CentralTabBar
          tabs={{
            title: "",
            viewAllText: "",
            items: [
              { id: "Overview", label: "Overview" },
              {
                id: "Review",
                label: "Review",
              },
            ],
          }}
          renderContent={(selectedTab) => {
            switch (selectedTab) {
              case "Overview":
                return <OverView />;
              case "Review":
                return <Reviews doctor={doctor} />;
              default:
                return null;
            }
          }}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </Layout>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.buttonSubText}>Book An Appointment</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <AntDesign name="close" size={24} color="#D51D33" />
            </TouchableOpacity>
            {/* Modal Content */}
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                Do you want to book for you or some other person?
              </Text>
              <View style={styles.modalButtons}>
                <PrimaryButton
                  title={"Book For Me"}
                  backgroundColor={"#0E4889"}
                  textColor={"white"}
                  borderColor={"#0E4889"}
                  onPress={booking}
                />
                <PrimaryButton
                  title={"Book For Others"}
                  backgroundColor={"#F2C94C"}
                  textColor={"#333333"}
                  borderColor={"#F2C94C"}
                  onPress={othersBooking}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
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
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#0E4889",
    alignItems: "center",
    justifyContent: "center",
  },
  profileText: {
    color: "white",
    fontSize: 30,
  },
  largerSection: {
    flex: 1,
  },
  doctorName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#0E4889",
  },
  description: {
    fontSize: 11,
    color: "#616161",
    lineHeight: 18,
  },
  specializations: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  specializationWrapper: {
    flexDirection: "column",
  },
  specializationText: {
    fontSize: 11,
    color: "#0E4889",
    fontFamily: "Barlow-Bold",
  },
  specializationValueText: {
    fontSize: 10,
    color: "#616161",
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
  lowerSection: {
    marginTop: 10,
  },
  expandButton: {
    backgroundColor: "#D51D33",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },
  expandButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  expandedButton: {
    height: "auto",
  },
  expandedText: {
    color: "white",
    fontSize: 16,
    lineHeight: 18,
    fontFamily: "Barlow-Bold",
    marginLeft: 3,
  },
  expandedValueText: {
    color: "black",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Barlow-Bold",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Barlow-Bold",
  },
  additionalText: {
    color: "#333333",
  },
  flatList: {
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 30,
    width: "80%",
    elevation: 5,
  },
  closeButton: {
    position: "relative",
    alignSelf:'flex-end',
    top:0.05*windowWidth,
    backgroundColor: "white",
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#BCBCBC",
    padding: 5,
    zIndex: 1,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 15,
    borderWidth: 0,
    alignItems: "center",
    borderRadius: 200,
    position: "absolute",
    bottom: 10,
    backgroundColor: "#0E4889",
  },
  buttonSubText: {
    textAlign: "center",
    color: "white",
  },
  modalTitle: {
    fontFamily: "Barlow-Bold",
    color: "#0E4889",
    fontSize: 20,
    lineHeight: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtons: {
    marginTop: 40,
  },
});

export default DoctorsDetails;

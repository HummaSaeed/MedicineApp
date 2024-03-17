import React, {useEffect,useRef,useState} from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import TopBar from "../components/TopBar";
import backgroundImage from "../assets/bg.png";
import image1 from "../assets/hospitals.png";
import image2 from "../assets/hospital2.jpg";
import DoctorsProfile from "../components/DoctorsProfile";
import Layout from "./Layout";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { windowHeight, windowWidth } from "../utils/Dimensions";

const renderItem = ({ item }) => (
  <Image source={item} style={styles.image} />
);
const HospitalDetails = ({ route, navigation }) => {
  const { hospital } = route.params;
  const itemWidth = windowWidth * 1;
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.snapToNext();
      }
    }, 500);
  
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const images = [image1, image2];
  return (
    <Layout>
      <TopBar
        heading={"Hospital Details"}
        lefticon={"arrow-back-outline"}
        lefticonPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.hospitalContainer}>
        <Carousel
          data={images}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={itemWidth}
          layout="stack"
          onSnapToItem={(index) => setActiveSlide(index)}
          autoplay
          autoplayInterval={10000}
          loop
        />
        {/* <Image
          source={require("../assets/hospitals.png")}
          style={styles.image}
        /> */}
        <View style={styles.overlayContainer}>
          <View style={styles.hospitalInfoContainer}>
            <Text style={styles.hospitalName}>{hospital.hospitalName}</Text>
            <Text style={styles.location}>{hospital.address}</Text>
          </View>
          <Text style={styles.ownerName}>{`Owner: ${hospital.ownerName}`}</Text>
        </View>
      </View>
      <View style={styles.doctorsContainer}>
        <View style={styles.titlecontainer}>
          <Text style={styles.greytext}>Doctors from </Text>

          <Text style={styles.bluetext}>Memorial Hospital</Text>
        </View>
        <DoctorsProfile navigation={navigation} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flexGrow: 1,
  },
  hospitalContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    height: 200,
    width:'100%',
    resizeMode: "cover",
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the overlay color as needed
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingBottom: 16,
    height: "100%",
  },
  hospitalInfoContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "flex-end",
  },
  hospitalName: {
    fontFamily: "Barlow-Regular",
    fontSize: 16,
    lineHeight: 19.2,
    color: "#ffffff",
  },
  location: {
    fontFamily: "Barlow-Regular",
    fontSize: 12,
    lineHeight: 14.4,
    color: "#ffffff",
    marginTop: 5,
  },
  ownerName: {
    fontFamily: "Barlow-Bold",
    fontSize: 16,
    textAlignVertical: "bottom",
    color: "#FFFFFF", // Text color on the overlay
  },
  doctorsContainer: {
    flex: 1,
    backgroundColor: "transparent",

    padding: 16,
  },
  doctorsHeading: {
    fontFamily: "Barlow-Bold",
    fontSize: 18,
    lineHeight: 21.6,
    color: "#333333",
    marginBottom: 10,
  },
  titlecontainer: {
    display: "flex",
    flexDirection: "row",
  },
  greytext: {
    color: "#616161",
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "Barlow-Bold",
  },
  bluetext: {
    color: "#0E4889",
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "Barlow-Bold",
  },
});

export default HospitalDetails;

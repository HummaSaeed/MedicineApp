import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { windowHeight, windowWidth } from "../utils/Dimensions";

const carouselData = [
  {
    title: "Your Health Is Our Top Priority",
    subtitle: "Lorem ipsum dolor sit amet",
    image: require("../assets/carousal.png"),
  },
  {
    title: "Your Health Is Our Top Priority",
    subtitle: "Lorem ipsum dolor sit amet",
    image: require("../assets/carousal.png"),
  },
  {
    title: "Your Health Is Our Top Priority",
    subtitle: "Lorem ipsum dolor sit amet",
    image: require("../assets/carousal.png"),
  },
  {
    title: "Your Health Is Your Top Priority",
    subtitle: "Lorem ipsum dolor sit amet",
    image: require("../assets/carousal.png"),
  },
  // Add more data objects for additional cards
];

const CarouselComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const itemWidth = windowWidth * 0.95;
  // const cardHeight = windowHeight * 0.1;
  const titleFontSize = windowWidth * 0.06;
  const subtitleFontSize = windowWidth * 0.04;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.snapToNext();
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const renderItem = ({ item }) => (
    <View style={[styles.card]}>
      <View style={styles.cardContent}>
        <Text style={[styles.title, { fontSize: titleFontSize }]}>{item.title}</Text>
        <Text style={[styles.subtitle, { fontSize: subtitleFontSize }]}>{item.subtitle}</Text>
      </View>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={itemWidth}
        layout="stack"
        onSnapToItem={(index) => setActiveSlide(index)}
        autoplay
        autoplayInterval={10000}
        loop
      />
      <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: windowHeight * 0.02,
  },
  card: {
    backgroundColor: "#0E4889",
    display: "flex",
    flexDirection: "row",
    borderRadius: windowWidth * 0.03,
    overflow: "hidden",
    alignSelf: "center",
    paddingBottom:0
  },
  cardContent: {
    justifyContent: "center",
    padding: windowWidth * 0.04,
    maxWidth: "65%",
  },
  title: {
    fontFamily: "Barlow-Bold",
    color: "white",
    fontWeight: "bold",
    marginBottom: windowWidth * 0.02,
  },
  subtitle: {
    fontFamily: "Barlow-Regular",
    color: "white",
  },
  image: {
    resizeMode: "cover",
    flex: 1,
  },
  paginationContainer: {
    marginTop: -windowHeight * 0.02,
  },
  paginationDot: {
    width: windowWidth * 0.025,
    height: windowWidth * 0.025,
    borderRadius: windowWidth * 0.0125,
    backgroundColor: "#0E4889",
  },
  paginationInactiveDot: {
    width: windowWidth * 0.025,
    height: windowWidth * 0.025,
    borderRadius: windowWidth * 0.0125,
    backgroundColor: "#D4D4D4",
  },
});

export default CarouselComponent;

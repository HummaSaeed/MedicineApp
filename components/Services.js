import { StyleSheet, Text, View,Image, TouchableOpacity } from "react-native";
import React from "react";

const Services = ({data,navigation}) => {
  const renderRow = ({rowItems,navigation}) => (
    <View style={styles.rowContainer}>
      {rowItems.map((item) => (
        <TouchableOpacity style={styles.circularImage} key={item.id} onPress={()=>{navigation.navigate(item.path)}}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.nameText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Line with "Services" and "View All" */}
      <View style={styles.topLine}>
        <Text style={styles.servicesText}>Services</Text>
        <Text style={styles.viewAllText} onPress={()=>{navigation.navigate("Service")}}>View All</Text>
      </View>

      {/* Circular Images with Names */}
      <View style={styles.imageContainer}>
        {data.map((rowItems, index) => (
          <View key={index}>{renderRow({rowItems,navigation})}</View>
        ))}
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
   
  },
  topLine: {
      
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  servicesText: {
    fontFamily:'Barlow-Bold',
    color: "#0E4889",
    
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19.2,
  },
  viewAllText: {
    color: "#D51D33",
    fontFamily:'Barlow-Bold',
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14.4,
  },
  imageContainer: {
    flexDirection: "column",
    marginTop: 15,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  circularImage: {
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  nameText: {
    color: "#333333",
    fontSize:10
  },
});

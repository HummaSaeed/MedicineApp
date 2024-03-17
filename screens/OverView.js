import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OverView = () => {
  return (
    <View style={{ marginTop: 10,marginBottom:70}}>
      <Text style={styles.heading}>About</Text>
      <Text style={styles.content}>
        Quisque ac urna id nulla tempor gravida. Morbi aliquam non arcu
        scelerisque elementum. Sed gravida sit amet augue non eleifend.
        Suspendisse potenti. Mauris gravida magna quis sem viverra, non dapibus
        turpis luctus. Ut nec lectus sit amet sapien ultricies vehicula.
      </Text>
      <Text style={styles.heading}>Experience</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.subheading}>House Officer</Text>
        <Text style={styles.content}> 7/12/2000 To 7/12/2015</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.subheading}>House Officer</Text>
        <Text style={styles.content}> 7/12/2000 To 7/12/2015</Text>
      </View>
      <Text style={styles.heading}>Education</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.subheading}>House Officer</Text>
        <Text style={styles.content}> 7/12/2000 To 7/12/2015</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.subheading}>House Officer</Text>
        <Text style={styles.content}> 7/12/2000 To 7/12/2015</Text>
      </View>
      <Text style={styles.heading}>Location</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.subheading}>House Officer</Text>
        <Text style={styles.content}> 7/12/2000 To 7/12/2015</Text>
      </View>
      <Text style={styles.heading}>Award</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.subheading}>House Officer</Text>
        <Text style={styles.content}> 7/12/2000 To 7/12/2015</Text>
      </View>
     
    </View>
  );
};

export default OverView;

const styles = StyleSheet.create({
  heading: {
    marginTop: 5,
    marginBottom: 10,
    fontFamily: "Barlow-Bold",
    fontSize: 18,
    lineHeight: 20,
    color: "#616161",
  },
  subheading: {
    marginBottom: 10,
    fontFamily: "Barlow-Bold",
    fontSize: 12,

    color: "#616161",
  },
  content: {
    fontFamily: "Barlow-Regular",
    fontSize: 12,
   
    color: "#616161",
  },
});

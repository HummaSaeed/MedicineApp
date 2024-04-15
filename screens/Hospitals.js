import React from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import TopBar from "../components/TopBar";
import Layout from '../screens/Layout'
import image1 from '../assets/hospitals.png';
import image2 from '../assets/card-img.png';

const data = [
  {
    id: "1",
    hospitalName: "Memorial Hospital",
    address: "STREET 6 BLUE AREA, NEW DELHI",
    ownerName: "John Amelia",
    images:[image1,image2]
  },
  {
    id: "2",
    hospitalName: "Memorial Hospital",
    address: "STREET 6 BLUE AREA, NEW DELHI",
    ownerName: "John Amelia",
    images:[image1,image2]
  },
  {
    id: "3",
    hospitalName: "Memorial Hospital",
    address: "STREET 6 BLUE AREA, NEW DELHI",
    ownerName: "John Amelia",
    images:[image1,image2]
  },
  // Add more data as needed
];
const HospitalCard = ({ hospitalName, address, ownerName, navigation,hospital }) => {
  const firstImage = hospital.images[0];
  
return(
  <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('HospitalDetails',{hospital,navigation,images: hospital.images })}}>
    <Image source={firstImage} style={styles.image} />
    <View style={{ display: "flex", marginLeft: 10, alignItems: "flex-start" }}>
      <Text style={styles.hospitalName}>{hospitalName}</Text>
      <Text style={styles.address}>{address}</Text>
      <Text style={styles.ownerName}>{`Owner: ${ownerName}`}</Text>
    </View>
  </TouchableOpacity>
);
}
const Hospitals = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <HospitalCard
      hospitalName={item.hospitalName}
      address={item.address}
      ownerName={item.ownerName}
      navigation={navigation}
      hospital={item}
    />
  );
  return (
    <Layout>
      <TopBar
      lefticon={"menu"}
      
        heading={"Services"}
        name={"ellipsis-horizontal"}
        navigation={navigation}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        navigation={navigation}
      />
   </Layout>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  backgroundImage: {
    flexGrow: 1,
  },
  listContainer: {
    padding: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 113,
    height: 75,
    borderRadius: 5,
  },
  hospitalName: {
    fontFamily: "Barlow-Bold",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19.2,
    textAlign: "center",
    color: "#333333",
    marginTop: 8,
  },
  address: {
    fontFamily: "Barlow-Regular",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14.4,
    textAlign: "center",
    color: "#333333",
  },
  ownerName: {
    fontFamily: "Barlow",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14.4,
    textAlign: "center",
    color: "#333333",
    marginTop: 8,
  },
});

import { StyleSheet, Text, View,ImageBackground} from 'react-native'
import React from 'react';
import backgroundImage from "../assets/bg.png";
import TopBar from '../components/TopBar'
import DoctorsProfile from './DoctorsProfile';

const ServiceDetail = ({ route, navigation }) => {
    const { item } = route.params;
  
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <TopBar
     lefticon={"arrow-back-outline"}
     lefticonPress={() => {
       navigation.goBack();
     }}
      heading={item.name}
      name={"ellipsis-horizontal"}
      navigation={navigation}
    />
    <View style={{padding:20}}>
    <DoctorsProfile navigation={navigation}/>
    </View>
  </ImageBackground>
  
  )
}

export default ServiceDetail

const styles = StyleSheet.create({})
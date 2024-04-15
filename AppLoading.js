import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import splash from './assets/splashscreen.png'

const AppLoading = ({ loading }) => {
  return (
    <Image source={splash} style={{height:'100%',width:'100%'}}/>
  );
}

export default AppLoading

const styles = StyleSheet.create({
  spinnerText: {
    color: "#0E4889",
  },
})
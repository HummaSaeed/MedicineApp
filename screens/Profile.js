import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EditProfileScreen from './EditProfile'

const Profile = ({navigation}) => {
  return (
    <EditProfileScreen navigation={navigation}/>
  )
}

export default Profile

const styles = StyleSheet.create({})
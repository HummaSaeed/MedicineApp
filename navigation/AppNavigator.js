import { StyleSheet, Text, View } from "react-native";
// import React from "react";
import LoginScreen from "../screens/LoginScreen";
import Register from "../screens/Register";
import Dashboard from '../screens/Dashboard';
import DoctorsProfile from '../components/DoctorsProfile'
import { createStackNavigator } from "@react-navigation/stack";
import DoctorsDetails from "../screens/DoctorsDetails";
import Booking from "../screens/Booking";
import OthersBooking from "../screens/OthersBooking";
import BookingReview from "../screens/BookingReview";
import EditProfile from "../screens/EditProfile";
import Service from '../components/Service'
import ServiceDetail from "../components/ServiceDetail";
import Hospitals from "../screens/Hospitals";
import HospitalDetails from "../screens/HospitalDetails";
import ContactUs from "../screens/ContactUs";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import Notification from "../screens/Notification";
import Pharmacy from '../screens/pharmacy';
import PrescriptionDetail from '../screens/PrescriptionDetail';
import Diagnostics from '../screens/Diagnostics/Diagnotics'
import PatientReview from "../components/PatientReview";
import Chat from "../screens/Chat";
import PrescriptionUpload from "../screens/PrescriptionUpload";
import ManagePatient from "../screens/ManagePatient";
import ManageAddress from "../screens/ManageAddress";
import AddressDetail from "../screens/AddressDetail";
import Toast from 'react-native-toast-message';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen"   screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen}  
      
      />
      <Stack.Screen name="Register" component={Register}  screenOptions={{
        headerShown: false, 
      }}/>
      <Stack.Screen name="Dashboard" component={Dashboard}  screenOptions={{
        headerShown: false, 
      }}/>
      <Stack.Screen name="DoctorsProfile" component={DoctorsProfile}  screenOptions={{
        headerShown: false, 
      }}/>
       <Stack.Screen name="DoctorsDetails" component={DoctorsDetails}  screenOptions={{
        headerShown: false, 
      }}/>
       <Stack.Screen name="Booking" component={Booking}  screenOptions={{
        headerShown: false, 
      }}/>
        <Stack.Screen name="OthersBooking" component={OthersBooking}  screenOptions={{
        headerShown: false, 
      }}/>
      
      <Stack.Screen name="BookingReview" component={BookingReview}  screenOptions={{
        headerShown: false, 
      }}/>
        <Stack.Screen name="EditProfile" component={EditProfile}  screenOptions={{
        headerShown: false, 
      }}/>
        <Stack.Screen name="Service" component={Service}  screenOptions={{
        headerShown: false, 
      }}/>
       <Stack.Screen name="ServiceDetail" component={ServiceDetail}  screenOptions={{
        headerShown: false, 
      }}/>
       <Stack.Screen name="Chat" component={Chat}  screenOptions={{
        headerShown: false, 
      }}/>
         <Stack.Screen name="Hospitals" component={Hospitals}  screenOptions={{
        headerShown: false, 
      }}/>
       <Stack.Screen name="HospitalDetails" component={HospitalDetails}  screenOptions={{
        headerShown: false, 
      }}/>
        <Stack.Screen name="ManagePatient" component={ManagePatient}  screenOptions={{
        headerShown: false, 
      }}/>
      <Stack.Screen name="ManageAddress" component={ManageAddress}  screenOptions={{
        headerShown: false, 
      }}/>
       <Stack.Screen name="AddressDetail" component={AddressDetail}  screenOptions={{
        headerShown: false, 
      }}/>
       <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}  screenOptions={{
        headerShown: false, 
      }}/>
          <Stack.Screen name="Notification" component={Notification}  screenOptions={{
        headerShown: false, 
      }}/>
       <Stack.Screen name="Pharmacy" component={Pharmacy}  screenOptions={{
        headerShown: false, 
      }}/>
       <Stack.Screen name="PrescriptionUpload" component={PrescriptionUpload}  screenOptions={{
        headerShown: false, 
      }}/>
        <Stack.Screen name="Diagnostics" component={Diagnostics}  screenOptions={{
        headerShown: false, 
      }}/>
        
       <Stack.Screen name="PrescriptionDetail" component={PrescriptionDetail}  screenOptions={{
        headerShown: false, 
      }}/>
        <Stack.Screen name="ContactUs" component={ContactUs}  screenOptions={{
        headerShown: false, 
      }}/>
       <Stack.Screen name="PatientReview" component={PatientReview}  screenOptions={{
        headerShown: false, 
      }}/>
 
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});

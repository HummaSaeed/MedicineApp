import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { renderItem } from "./PedingList";


const ConfirmedList = ({appointments}) => {
  const cancelledAppointments = appointments.data.appointments.filter(appointment => (appointment.status === "Cancelled"||appointment.status==="Rejected"));
  return (
    <FlatList
    data={cancelledAppointments}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    style={styles.container}
  />
  )
}

export default ConfirmedList

const styles = StyleSheet.create({
container:{}
})
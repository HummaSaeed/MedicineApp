import React from "react";
import {
  FlatList,
  StyleSheet,
} from "react-native";
import { renderItem } from "./PedingList";

const CompletedList = ({ navigation,appointments }) => {
  const completedAppointments = appointments.data.appointments.filter(appointment => appointment.status === "Completed");
  return (
    <FlatList
      data={completedAppointments}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};

export default CompletedList;

const styles = StyleSheet.create({
  container: {},
  card: {
    backgroundColor: "#D4D4D4",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: "#0E4889",
    borderLeftWidth: 3,
    elevation: 3,
    marginVertical: 10,
    padding: 16,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  appointmentDateText: {
    color: "#616161",
    fontSize: 14,
  },
  leftTopSection: {},
  rightTopSection: {},
  appointmentDate: {
    fontWeight: "bold",
    fontSize: 18,
  },
  statusLabel: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 40,
    alignItems: "center",
  },
  bottomSection: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  leftBottomSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleProfile: {
    width: 60,
    height: 60,
    borderRadius: 200,
    backgroundColor: "#0E4889",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  profiletext: {
    color: "white",
    fontSize: 30,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#0E4889",
  },
  doctorDescription: {
    color: "#888",
  },
  rightBottomSection: {
    justifyContent: "flex-end",
  },
});

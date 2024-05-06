import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'
import { primaryColor } from "../utils/colors";


export const renderItem = ({ item, navigation }) => {
 
return(
  <View style={styles.card}>
    {/* Top Section */}
    <View style={styles.topSection}>
      <View style={styles.leftTopSection}>
        <Text style={styles.appointmentDateText}>Appointment Date</Text>
        <Text style={styles.appointmentDate}>{item.date}</Text>
      </View>
      <View style={styles.rightTopSection}>
        <View
          style={[
            styles.statusLabel,
            {
              backgroundColor: "#FFD495",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 40,
              alignItems: "center",
            },
          ]}
        >
          <Text style={{ color: "#F08619" }}>{item.status}</Text>
        </View>
      </View>
    </View>

    {/* Bottom Section */}
    <View style={styles.bottomSection}>
      <View style={styles.leftBottomSection}>
        {/* Circle Profile */}
        <View
          style={[
            styles.circleProfile,
            {
              width: 0.2 * windowWidth,
              height: 0.2 * windowWidth,
              marginRight: 0.02 * windowWidth,
            },
          ]}
        >
          <Text style={styles.profiletext}>SR</Text>
        </View>

        {/* Doctor Name and Description */}
      </View>
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{item.doctor.name}</Text>
        <Text style={styles.doctorDescription}>Type: {item.appointmentType}</Text>
        <Text style={styles.doctorDescription}>Location: {item.location}</Text>
      {item.status ==="Approved" &&(
        <>
        <Text style={styles.doctorDescription}>Running Token: {item.run_token}</Text>
        <Text style={styles.doctorDescription}>Your Token: {item.your_token}</Text>
      </>
      )}
      </View>
      {/* Edit Icon */}
      <View style={styles.rightBottomSection}>
      {item.status ==="Confirmed" && (
             <TouchableOpacity onPress={()=>{navigation.navigate("Chat")}}>
             <AntDesign
               name="phone"
               size={0.05 * windowWidth}
               color="#12375C"
               
             />
             </TouchableOpacity> 
          )
        }
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
      
          {(item.status === "Pending" || item.status === "Confirmed") ? (
            <View>
             
            <MaterialCommunityIcons
            name="square-edit-outline"
            size={0.07 * windowWidth}
            color="#D51D33"
          />
          </View>
          ):<></>}
        </TouchableOpacity>
      </View>
    </View>
  </View>
)
  
}
const PedingList = ({ navigation,appointments }) => {
  const pendingAppointments = appointments.data.appointments.filter(appointment => appointment.status === "Pending");
  return (
    
    <FlatList
      data={pendingAppointments}
      renderItem={({ item }) => renderItem({ item, navigation })}
      keyExtractor={(item) => item.id}
      style={styles.container}
      navigation={navigation}
    />
  );
};

export default PedingList;

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {},
  card: {
    backgroundColor: "#D4D4D4",
    borderColor: "#0E4889",
    borderLeftWidth: 3,
    elevation: 3,
    marginVertical: 10,
    padding: 0.04 * windowWidth,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0.02 * windowWidth,
  },
  appointmentDateText: {
    color: "#616161",
    fontSize: 0.03 * windowWidth,
  },
  leftTopSection: {},
  rightTopSection: {},
  appointmentDate: {
    color: primaryColor,
    fontFamily: "Barlow-SemiBold",
    fontSize: 0.04 * windowWidth,
  },
  statusLabel: {},
  bottomSection: {
    flexDirection: "row",
    paddingVertical: 0.02 * windowWidth,
  },
  leftBottomSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleProfile: {
    backgroundColor: "#0E4889",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0.1 * windowWidth,
  },
  profiletext: {
    color: "white",
    fontSize: 0.07 * windowWidth,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontWeight: "bold",
    fontSize: 0.05 * windowWidth,
    color: "#0E4889",
  },
  doctorDescription: {
    color: "#888",
  },
  rightBottomSection: {
    justifyContent: "flex-end",
  },
});

import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Layout from "./Layout";
import TopBar from "../components/TopBar";
import HorizontalCalendar from "../components/HorizontalCalendar";
import Title from "../components/Title";
import { format } from "date-fns";
import { Ionicons } from "@expo/vector-icons";
import CentralTabBar from "../components/CentralTabBar";
import { FontAwesome6 } from "@expo/vector-icons";
import PrimaryButton from "../components/PrimaryButton";
import Vitals from "../components/Vitals";

const timeSlotsData = [
  ["7:00", "8:00", "9:00", "10:00"],
  ["11:00", "12:00", "13:00", "14:00"],
  // Add more rows as needed
];

const TimeSlotsContainer = ({ data, onSelectTimeSlot, TimeFormat }) => {
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleSelectTimeSlot = (rowIndex, index) => {
    const newSelectedSlots = [...selectedSlots];
    const isSelected = newSelectedSlots.some(
      (slot) => slot.rowIndex === rowIndex && slot.index === index
    );

    if (isSelected) {
      // Deselect the time slot
      const selectedIndex = newSelectedSlots.findIndex(
        (slot) => slot.rowIndex === rowIndex && slot.index === index
      );
      newSelectedSlots.splice(selectedIndex, 1);
    } else {
      // Select the time slot
      newSelectedSlots.push({ rowIndex, index });
    }

    setSelectedSlots(newSelectedSlots);
    onSelectTimeSlot(newSelectedSlots);
  };

  return (
    <View style={styles.timecontainer}>
      <Text
        style={{
          fontFamily: "Barlow-SemiBold",
          fontSize: 15,
          color: "#0E4889",
        }}
      >
        Australia
      </Text>
      {data.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.rowContainer}>
          {row.map((timeSlot, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeSlot,
                selectedSlots.some(
                  (slot) => slot.rowIndex === rowIndex && slot.index === index
                ) && styles.selectedTimeSlot,
              ]}
              onPress={() => handleSelectTimeSlot(rowIndex, index)}
            >
              <Text
                style={[
                  styles.timeSlotText,
                  selectedSlots.some(
                    (slot) => slot.rowIndex === rowIndex && slot.index === index
                  ) && { color: "white" },
                ]}
              >
                {timeSlot}
                {TimeFormat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const Morning = ({ handleSelectTimeSlot }) => {
  return (
    <>
      <TimeSlotsContainer
        data={timeSlotsData}
        TimeFormat={"AM"}
        onSelectTimeSlot={handleSelectTimeSlot}
      />
    </>
  );
};
const Afternoon = ({ handleSelectTimeSlot }) => {
  return (
    <>
      <TimeSlotsContainer
        data={timeSlotsData}
        TimeFormat={"PM"}
        onSelectTimeSlot={handleSelectTimeSlot}
      />
    </>
  );
};
const Evening = ({ handleSelectTimeSlot }) => {
  return (
    <>
      <TimeSlotsContainer
        data={timeSlotsData}
        TimeFormat={"PM"}
        onSelectTimeSlot={handleSelectTimeSlot}
      />
    </>
  );
};

const Booking = ({ navigation }) => {
  const today = new Date();
  const formattodaydate = format(today, "EEEE, d MMMM yyyy");
  const [selectedDate, setSelectedDate] = useState(formattodaydate.toString());
  const [selectedTab, setSelectedTab] = useState("Morning");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const confirmAppointment = () => {
    navigation.navigate("BookingReview");
  };

  const handleSelectTimeSlot = (selectedSlots) => {
    // Handle the selected time slots as needed
    console.log("Selected Time Slots:", selectedSlots);
  };
  const handleSelectBox = (boxId) => {
    setSelectedBox(boxId);
  };

  const handleSelectDate = (date) => {
    // Handle the selected date as needed
    const formatdate = format(date, "EEEE, d MMMM yyyy");
    setSelectedDate(formatdate.toString());
  };

  return (
    <Layout>
      <TopBar
        lefticon={"arrow-back-outline"}
        lefticonPress={() => {
          navigation.goBack();
        }}
        heading={"Book Appointment"}
        navigation={navigation}
      />
      <View style={{ padding: 20 }}>
        <Text style={{ FontFamily: "Barlow-Regular", color: "#0E4889" }}>
          Date
        </Text>
        <Text style={styles.date}>{selectedDate}</Text>
      </View>
      <HorizontalCalendar onSelectDate={handleSelectDate} />
      <View style={styles.line} />
      <View style={styles.container}>
        {/* Box 1 */}
        <TouchableOpacity
          style={[
            styles.box,
            selectedBox === 1 && { backgroundColor: "#0E4889" },
          ]}
          onPress={() => handleSelectBox(1)}
        >
          <FontAwesome6
            name="user-doctor"
            size={24}
            color={selectedBox === 1 ? "#fff" : "#0E4889"}
          />

          <Text style={[styles.title, selectedBox === 1 && { color: "#fff" }]}>
            In-person
          </Text>
        </TouchableOpacity>

        {/* Box 2 */}
        <TouchableOpacity
          style={[
            styles.box,
            selectedBox === 2 && { backgroundColor: "#0E4889" },
          ]}
          onPress={() => handleSelectBox(2)}
        >
          <Ionicons
            name="videocam"
            size={24}
            color={selectedBox === 2 ? "#fff" : "#0E4889"}
          />
          <Text style={[styles.title, selectedBox === 2 && { color: "#fff" }]}>
            On-video
          </Text>
        </TouchableOpacity>

        {/* Box 3 */}
        <TouchableOpacity
          style={[
            styles.box,
            selectedBox === 3 && { backgroundColor: "#0E4889" },
          ]}
          onPress={() => handleSelectBox(3)}
        >
          <View style={styles.iconContainer}>
            <FontAwesome6
              name="user-doctor"
              size={24}
              color={selectedBox === 3 ? "#fff" : "#0E4889"}
            />

            <Ionicons
              name="videocam"
              size={24}
              color={selectedBox === 3 ? "#fff" : "#0E4889"}
            />
          </View>
          <Text style={[styles.title, selectedBox === 3 && { color: "#fff" }]}>
            Both
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{ paddingHorizontal: 20 }}>
          <Title name={"Available Slots"} />
        </View>
        <CentralTabBar
          tabs={{
            title: "",
            viewAllText: "",
            items: [
              { id: "Morning", label: "Morning" },
              {
                id: "Afternoon",
                label: "Afternoon",
              },
              {
                id: "Evening",
                label: "Evening",
              },
            ],
          }}
          renderContent={(selectedTab) => {
            switch (selectedTab) {
              case "Morning":
                return <Morning handleSelectTimeSlot={handleSelectTimeSlot} />;
              case "Afternoon":
                return (
                  <Afternoon handleSelectTimeSlot={handleSelectTimeSlot} />
                );
              case "Evening":
                return <Evening handleSelectTimeSlot={handleSelectTimeSlot} />;
              default:
                return <Morning handleSelectTimeSlot={handleSelectTimeSlot} />;
            }
          }}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </View>
      <View style={{ padding: 20 }}>
        <Title name={"Reason"} />
        <View style={styles.inputcontainer}>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              {/* Place your image component here */}
              <Image
                source={require("../assets/reason.png")} // Replace with the path to your image
                style={styles.image}
              />
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Click to Add"
            placeholderTextColor="#A4B1AE" // You can customize the placeholder text color
          />
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <Title name={"Professional"} />
        <View style={styles.inputcontainer}>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              {/* Place your image component here */}
              <Image
                source={require("../assets/professional.png")} // Replace with the path to your image
                style={styles.image}
              />
            </View>
          </View>

          <Text style={styles.text}>
            All our professionals are qualified trained and registered
            professionals with a Masters Degree and above and will be assigned
            to your specific needs
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
          }}
        >
          <Title name={"Vitals"} />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.bluetext}>Add Row</Text>
            <View style={styles.circle}>
              <Text style={{ color: "white" }}>+</Text>
            </View>
           
          </View>
          
        </View>
        <Vitals/>
      </View>
      <View style={{ padding: 20 }}>
        <TouchableOpacity style={styles.radioButton} onPress={handleToggle}>
          <View
            style={[styles.radiocircle, isChecked && styles.radiocheckedCircle]}
          >
            {isChecked && <View style={styles.radioinnerCircle} />}
          </View>
          <Text style={styles.label}>
            {isChecked ? "I Accept the Conditions" : "I Accept the Conditions"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <PrimaryButton
          title={"Confirm Appointment"}
          backgroundColor={"#0E4889"}
          textColor={"white"}
          borderColor={"#0E4889"}
          onPress={confirmAppointment}
        />
        <PrimaryButton
          title={"Cancel"}
          backgroundColor={"white"}
          textColor={"#D51D33"}
          borderColor={"white"}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover", // or 'stretch' for a different effect
    justifyContent: "space-between",
  },
  date: {
    fontFamily: "Barlow-Bold",
    color: "#0E4889",
    fontSize: 20,
  },
  line: {
    width: "100%",
    height: 1, // Adjust the height of the line as needed
    backgroundColor: "#A4B1AE33",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  box: {
    minWidth: 90,
    backgroundColor: "#D4D4D4",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  title: {
    marginTop: 5,
    color: "#0E4889",
  },
  bluetext: {
    color: "#0E4889",
    fontSize: 10,
    lineHeight: 20,
    fontFamily: "Barlow-Bold",
  },
  iconContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  selectedTimeSlot: {
    backgroundColor: "#0E4889",
  },
  timecontainer: {
    backgroundColor: "#D4D4D4",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  timeSlot: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    flex: 1,
    alignItems: "center",
  },
  timeSlotText: {
    color: "#616161",
    fontSize: 13,
  },
  inputcontainer: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    fontSize: 12,
    width: "90%",
    paddingVertical: 10, // Adjust as needed
    paddingHorizontal: 15, // Adjust as needed
    backgroundColor: "transparent",
    color: "#000", // You can customize the text color
  },
  text: {
    fontSize: 14,
    fontFamily: "Barlow-Regular",
    color: "#616161",
    marginLeft: 15,
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  circle: {
    paddingLeft: 6,
    paddingRight:6,
    paddingTop:2,
    paddingBottom:2, // Adjust as needed
    borderRadius: 150, // Make it half of the width and height to create a circle
    backgroundColor: "#0E4889",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radiocircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#D51D33",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  radiocheckedCircle: {
    backgroundColor: "#D51D33",
  },
  radioinnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  label: {
    fontSize: 16,
    color: "#D51D33",
  },
});

export default Booking;

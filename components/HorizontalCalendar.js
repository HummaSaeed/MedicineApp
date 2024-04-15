import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  addMonths,
  startOfMonth,
  format,
  getDaysInMonth,
  addDays,
} from "date-fns";

const HorizontalCalendar = ({ onSelectDate }) => {
  const today = new Date();
  const startOfMonthThisYear = startOfMonth(today);
  const monthsToShow = 12;
  const [selectedMonth, setSelectedMonth] = useState(startOfMonthThisYear);
  const [selectedDate, setSelectedDate] = useState(today);

  const handleMonthPress = (month) => {
    setSelectedMonth(month);
    setSelectedDate(month);
  };

  const handleDatePress = (date) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  const months = Array.from({ length: monthsToShow }, (_, index) =>
    startOfMonth(addMonths(startOfMonthThisYear, index))
  );

  return (
    <>
      <View style={styles.monthsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {months.map((month, index) => (
            <TouchableOpacity
              key={month}
              style={[
                styles.monthContainer,
                selectedMonth.getTime() === month.getTime()
                  ? styles.selectedMonth
                  : null,
              ]}
              onPress={() => handleMonthPress(month)}
            >
              <Text
                style={[
                  styles.monthText,
                  selectedMonth.getTime() === month.getTime()
                    ? styles.selectedMonthText
                    : null,
                ]}
              >
                {format(month, "MMM")}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {selectedMonth && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.datesContainer}>
            {[...Array(getDaysInMonth(selectedMonth))].map((_, dayIndex) => (
              <TouchableOpacity
                key={dayIndex}
                style={[
                  styles.dateContainer,
                  selectedDate.getDate() === dayIndex + 1
                    ? styles.selectedDate
                    : null,
                ]}
                onPress={() =>
                  handleDatePress(addDays(selectedMonth, dayIndex))
                }
              >
                <Text
                  style={[
                    styles.dayText,
                    selectedDate.getDate() === dayIndex + 1
                      ? styles.selectedDayText
                      : null,
                  ]}
                >
                  {format(addDays(selectedMonth, dayIndex), "EEE")}
                </Text>
                <Text
                  style={[
                    styles.dateText,
                    selectedDate.getDate() === dayIndex + 1
                      ? styles.selectedDateText
                      : null,
                  ]}
                >
                  {dayIndex + 1}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  monthsContainer: {
    flexDirection: "row",
    
  },
  monthContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    width: 35,
    height: 30,
  },
  selectedMonth: {
    backgroundColor: "#0E4889",
    
  },
  selectedMonthText: {
    color: "white",
  },
  selectedDate: {
    backgroundColor: "#0E4889",
  },
  monthText: {
    fontSize: 15,
    fontFamily: "Barlow-Regular",
    color: "#616161",
  },
  datesContainer: {
    flexDirection: "row",
  },
  dateContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    width: 40,
    height: 60,
    borderRadius: 5,
  },
  dayText: {
    fontSize: 14,
    color: "#35544D",
  },
  selectedDayText: {
    color: "white",
  },
  dateText: {
    marginTop: 5,
    fontSize: 18,
    color: "#A4B1AE",
  },
  selectedDateText: {
    color: "white",
  },
});

export default HorizontalCalendar;

import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import TopBar from "../components/TopBar";
import Layout from "./Layout";
import { AntDesign } from "@expo/vector-icons";

const Notification = ({ navigation, route }) => {
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const token = useSelector((state) => state.auth.user.accessToken);
  const userId = useSelector((state) => state.auth.user.id);
  console.log(token)
console.log(userId)
  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      // User ID for whom notifications are fetched
      const response = await fetch(`https://family-dr.vercel.app/api/notifications?pageSize=50&page=1&userId=${userId}`, {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setNotifications(data.data.notifications);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const deleteNotification = (id) => {
    // Implement delete logic here
    console.log(`Deleted notification with id: ${id}`);
  };

  const renderNotification = (item) => {
    const swipeRightActions = (_, dragX) => {
      const scale = dragX.interpolate({
        inputRange: [-40, 0],
        outputRange: [1, 0],
        extrapolate: "clamp",
      });

      return (
        <View style={styles.deleteButtonContainer}>
          <View style={styles.deleteButton}>
            <AntDesign name="delete" size={24} color={"white"} />
          </View>
        </View>
      );
    };

    return (
      <Swipeable
        renderRightActions={swipeRightActions}
        onSwipeableRightOpen={() => deleteNotification(item.id)}
      >
        <View style={styles.cardContainer}>
          <View style={styles.leftContent}>
            <View
              style={{
                width: "70%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={styles.dot}></View>
              <Text style={styles.notificationTitle}>{item.title}</Text>
            </View>
            <Text style={styles.notificationTime}>{item.time}</Text>
          </View>
          <View style={styles.rightContent}>
            <Text style={styles.notificationText}>{item.message}</Text>
          </View>
        </View>
      </Swipeable>
    );
  };

  const handleDeleteAll = () => {
    setShowModal(true);
  };

  const handleDeleteAllConfirm = () => {
    // Implement delete all logic here
    console.log("Deleting all notifications...");
    setShowModal(false);
  };

  const handleCancelDeleteAll = () => {
    setShowModal(false);
  };

  return (
    <Layout>
      <TopBar
        lefticonPress={() => {
          navigation.goBack();
        }}
        lefticon={"arrow-back-outline"}
        heading={"Notification"}
        navigation={navigation}
      />
      <View style={styles.container}>
        <TouchableOpacity onPress={handleDeleteAll}>
          <Text style={styles.deleteAllButton}>Clear All</Text>
        </TouchableOpacity>
        {notifications.map((item) => (
          <View key={item.id}>{renderNotification(item)}</View>
        ))}
      </View>
      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to delete all notifications?
            </Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.deleteButton]}
                onPress={handleDeleteAllConfirm}
              >
                <Text style={styles.modalButtonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={handleCancelDeleteAll}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Layout>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    paddingVertical: 16,
    width: "100%",
    height:'100%'
  },
  cardContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#D4D4D4",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#010101",
    marginRight: 8,
  },
  notificationTitle: {
    fontFamily: "Barlow-Bold",
    fontSize: 16,
    color: "#010101",
  },
  rightContent: {
    flex: 1,
    marginLeft: 8,
  },
  notificationTime: {
    fontFamily: "Barlow-Bold",
    fontSize: 14,
    color: "#010101",
    opacity: 0.59,
    marginBottom: 4,
  },
  notificationText: {
    fontSize: 16,
    color: "#010101",
    opacity: 0.59,
  },
  deleteButtonContainer: {
    width: 100,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 16,
  },
  deleteButton: {
    backgroundColor: "#0E4889",
    borderRadius: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    color: "white",
  },
  deleteAllButton: {
    textAlign: "right",
    paddingRight: 16,
    paddingBottom: 8,
    fontFamily: "Barlow-Regular",
    fontSize: 16,
    color: "#0E4889",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: "80%",
  },
  modalText: {
    fontFamily: "Barlow-Regular",
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  modalButtonText: {
    fontFamily: "Barlow-Regular",
    fontSize: 16,
    color: "white",
  },
  deleteButton: {
    backgroundColor: "#0E4889",
  },
  cancelButton: {
    backgroundColor: "#A4B1AE",
  },
});

export default Notification;

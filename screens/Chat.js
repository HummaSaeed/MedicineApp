import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Layout from "./Layout";
import profile from "../assets/profileicon.png";
import { windowWidth } from "../utils/Dimensions";
import prescription from '../assets/Prescription.png';
import backgroundImage from "../assets/bg.png";

const Chat = () => {
  const messages = [
    {
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      isSender: false,
      time: "10:00 AM",
      isImage: false,
    },
    {
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        isSender: true,
        time: "10:00 AM",
        isImage: false,
      },
    { 
      content: "../assets/Prescription.png", 
      isSender: false, 
      time: "10:01 AM",
      isImage: true,
    },
    // Add more messages as needed
  ];

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.rowContainer}>
        {/* Sidebar Icon */}
        <TouchableOpacity style={styles.lefticonContainer}>
          <Image source={profile} />
        </TouchableOpacity>

        {/* Heading */}
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Chat</Text>
        </View>

        {/* Edit Icon */}
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={22} color="#0E4889" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat Messages */}
      <View style={styles.chatMessagesContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              { alignSelf: message.isSender ? "flex-end" : "flex-start" },
            ]}
          >
            <View
              style={[
                styles.messageContent,
                { backgroundColor: message.isSender ? "#E0F0FF" : "#F4F6F8" },
              ]}
            >
              {message.isImage ? (
                <Image source={prescription} style={styles.messageImage} />
              ) : (
                <Text
                  style={[
                    styles.messageText,
                    { color: message.isSender ? "#12375C" : "#84919C" },
                  ]}
                >
                  {message.content}
                </Text>
              )}
            </View>
            <View
              style={[
                styles.row,
                { alignSelf: message.isSender ? "flex-end" : "flex-start",display:'flex',flexDirection:"row" },
              ]}
            >
              <Image source={profile} style={styles.senderImage} />
              <Text style={styles.messageTime}>{message.time}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Input Field and Send Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Send a message..."
          placeholderTextColor="#A0A0A0"
          multiline={true}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="attach-outline"  size={24} color="#0E4889" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <MaterialIcons name="send" size={24} color="#0E4889" />
        </TouchableOpacity>
      </View>
    </View>
  </ImageBackground>
  );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
      },
      backgroundImage: {
        flex: 1,
        width: "100%",
        resizeMode: "cover", // or 'stretch' for a different effect
        justifyContent: "space-between",
      },
      row: {
        display: "flex",
        flexDirection: "row",
        flexDirection: "flex-start",
      },
      rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginTop: 30,
      },
      lefticonContainer:{
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#0E4889",
        padding: 2,
      },
      iconContainer: {
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#BCBCBC",
        padding: 10,
      },
      headingContainer: {
        flex: 1,
        alignItems: "center",
      },
      headingText: {
        color: "#0E4889",
        fontSize: 0.06 * windowWidth,
        fontWeight: "bold",
      },
      chatMessagesContainer: {
        flex: 1,
    
        paddingHorizontal: 16,
        paddingBottom: 12,
      },
      messageContainer: {
        flexDirection: "column",
        alignItems: "flex-end",
        marginBottom: 10,
      },
      messageContent: {
        maxWidth: "80%",
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
      },
      messageText: {
        fontSize: 16,
      },
      messageTime: {
        fontSize: 12,
        color: "#84919C",
        marginTop: 5,
        textAlign: "left",
      },
      senderImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10,
      },
      inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#CCCCCC",
        backgroundColor: "#CCCCCC", // Input field background color
      },
      input: {
        flex: 1,
        backgroundColor: "#CCCCCC",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
      },
      sendButton: {
        padding: 10,
        backgroundColor: "#CCCCCC",
        borderRadius: 20,
      },
});

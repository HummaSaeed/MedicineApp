import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ProfileCard = ({ profileImage, name, rating, description }) => {
  return (
    <View style={styles.card}>
      {/* Profile Photo and Name */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image source={profileImage} style={styles.profileImage} />
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>

          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star, index) => (
              <View style={{ marginRight: 5 }}>
                <FontAwesome
                  key={index}
                  name={rating >= star ? "star" : "star-o"}
                  size={10}
                  color="#E67136"
                />
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Rating Stars */}

      {/* Description */}
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#0E4889",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    color: "#0E4889",
    fontSize: 18,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  starsContainer: {
    flexDirection: "row",
    marginRight: 3,
  },
  description: {
    fontFamily: "Barlow-Regular",
    color: "#3E3E3E",
    fontSize: 12,
    lineHeight: 14,
    marginTop: 6,
  },
});

export default ProfileCard;

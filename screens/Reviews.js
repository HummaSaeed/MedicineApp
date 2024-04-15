import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import StarRating from "react-native-star-rating";
import Title from "../components/Title";
import ProgressBar from "../components/ProgressBar";
import ProfileCard from "../components/ProfileCard";
import PrimaryButton from "../components/PrimaryButton";

const Reviews = ({ doctor }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleRatingChange = (rating) => {
    setRating(rating);
  };

  const handleCommentChange = (text) => {
    setComment(text);
  };
  const data = [
    {
      profileImage: require("../assets/profile1.png"),
      name: "Joana Willams",
      rating: 5,
      description:
        "Quisque ac urna id nulla tempor gravida. Morbi aliquam non arcu scelerisque elementum. Sed gravida sit amet augue non eleifend. Suspendisse potenti. Mauris gravida magna quis sem viverra, non dapibus turpis luctus. Ut nec lectus sit amet sapien ultricies vehicula.",
    },
    {
      profileImage: require("../assets/profile1.png"),
      name: "Joana Willams",
      rating: 5,
      description:
        "Quisque ac urna id nulla tempor gravida. Morbi aliquam non arcu scelerisque elementum. Sed gravida sit amet augue non eleifend. Suspendisse potenti. Mauris gravida magna quis sem viverra, non dapibus turpis luctus. Ut nec lectus sit amet sapien ultricies vehicula.",
    },
  ];
  const parentContainerStyle = {
    flex: 1,
  };
  return (
    <View style={parentContainerStyle}>
      <View style={{ marginTop: 10 }}>
        <Title name={doctor.doctorName} />
        <View style={styles.container}>
          {/* Left Part */}
          <View style={styles.leftPart}>
            <View style={styles.circleContainer}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>35%</Text>
              </View>
            </View>
            <Text style={styles.satisfiedText}>
              Satisfied out of 1435 Patients
            </Text>
          </View>

          {/* Right Part */}
          <View style={styles.rightPart}>
            {/* Progress Bars */}
            <View style={styles.progressBarContainer}>
              <Text style={styles.progressBarTitle}>Doctor Checkup</Text>
              <ProgressBar percentage={93} color="#0E4889" />
            </View>

            <View style={styles.progressBarContainer}>
              <Text style={styles.progressBarTitle}>Clinic Environment</Text>
              <ProgressBar percentage={97} color="#0E4889" />
            </View>

            <View style={styles.progressBarContainer}>
              <Text style={styles.progressBarTitle}>Staff Behavior</Text>
              <ProgressBar percentage={99} color="#0E4889" />
            </View>
          </View>
        </View>
        {data.map((data) => (
          <ProfileCard
            profileImage={data.profileImage}
            name={data.name}
            rating={data.rating}
            description={data.description}
          />
        ))}
        <View style={styles.addCommentContainer}>
          <Text style={styles.commentLabel}>Add Reviews:</Text>

          <TextInput
            style={styles.commentInput}
            multiline
            placeholder="Type your comment here..."
            value={comment}
            onChangeText={handleCommentChange}
          />

          <StarRating
            disabled={false}
            maxStars={5}
            rating={rating}
            selectedStar={(rating) => handleRatingChange(rating)}
            fullStarColor="#E67136"
            starSize={20}
            containerStyle={{ width: 120, alignSelf: "flex-end" }}
          />
          <PrimaryButton
            title="Submit"
            textColor={"#0E4889"}
            borderColor={"#0E4889"}
          />
        </View>
      </View>
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  leftPart: {
    alignItems: "center",
    maxWidth: "35%",
  },
  circleContainer: {
    backgroundColor: "#219653",
    borderRadius: 50,
    padding: 10,
  },
  circle: {
    backgroundColor: "#219653",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  satisfiedText: {
    color: "#616161",
    fontFamily: "Barlow",
    fontSize: 11,
    lineHeight: 18,
    textAlign: "center",
  },
  rightPart: {
    flex: 1,
    marginLeft: 15,
  },
  progressBarContainer: {
    marginBottom: 2,
  },
  progressBarTitle: {
    color: "#616161",
    fontSize: 10,
    marginBottom: -2,
  },
  addCommentContainer: {
    marginBottom: 60,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#0E4889",
    borderRadius: 10,
  },
  commentLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0E4889",
    fontFamily: "Barlow-Bold",
  },
  commentInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  ratingLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

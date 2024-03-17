import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const data = [
  { id: 1, logo: <Ionicons name="location-sharp" size={0.08 * windowWidth} color="white" />, text: 'Doctors Near Me' },
  { id: 2, logo: <Octicons name="broadcast" size={0.08 * windowWidth} color="white" />, text: 'Lowest Fees' },
  { id: 3, logo: <Foundation name="dollar" size={0.08 * windowWidth} color="white" />, text: 'Online Now' },
  { id: 4, logo: <MaterialCommunityIcons name="bag-personal-outline" size={0.08 * windowWidth} color="white" />, text: 'Video Consultation' },
  { id: 5, logo: <Ionicons name="location-sharp" size={0.08 * windowWidth} color="white" />, text: 'Doctors Near Me' },
  { id: 6, logo: <Octicons name="broadcast" size={0.08 * windowWidth} color="white" />, text: 'Lowest Fees' },
  { id: 7, logo: <Foundation name="dollar" size={0.08 * windowWidth} color="white" />, text: 'Online Now' },
  { id: 8, logo: <MaterialCommunityIcons name="bag-personal-outline" size={0.08 * windowWidth} color="white" />, text: 'Video Consultation' },
];

const CardCarousal = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleBackward = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 4);
    }
  };

  const handleForward = () => {
    if (startIndex + 4 < data.length) {
      setStartIndex(startIndex + 4);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>{item.logo}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.innerText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.slice(startIndex, startIndex + 4)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />

      <TouchableOpacity
        style={[styles.navigationButton, { left: 0.02 * windowWidth }]}
        onPress={handleBackward}
        disabled={startIndex === 0}
      >
        <Ionicons name="arrow-back-circle-sharp" size={0.08 * windowWidth} color={startIndex === 0 ? '#D4D4D4' : '#0E4889'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navigationButton, { right: 0.02 * windowWidth }]}
        onPress={handleForward}
        disabled={startIndex + 4 >= data.length}
      >
        <Ionicons
          name="arrow-forward-circle"
          size={0.08 * windowWidth}
          color={startIndex + 4 >= data.length ? '#D4D4D4' : '#D51D33'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    position: 'relative',
  },
  card: {
    flexDirection: 'row',
    width: '48%', // Adjust the width as needed
    height: 0.15 * windowWidth,
    margin: 0.02 * windowWidth,
    backgroundColor: '#D4D4D4',
    borderRadius: 10,
  },
  logoContainer: {
    backgroundColor: '#616161',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    justifyContent: 'center',
    paddingLeft: 0.02 * windowWidth,
    width: '65%',
  },
  logoText: {
    color: '#D4D4D4',
    fontWeight: 'bold',
  },
  innerText: {
    color: '#333333',
    fontSize: 0.025 * windowWidth,
  },
  navigationButton: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -0.04 * windowWidth }],
    zIndex: 1,
  },
});

export default CardCarousal;

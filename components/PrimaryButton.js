import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const PrimaryButton = ({ onPress, title, backgroundColor, textColor, borderColor, borderRadius }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          borderColor,
          borderRadius: borderRadius || styles.button.borderRadius,
          paddingVertical: 0.03 * windowWidth, // Adjust padding based on the screen width
          marginBottom: 0.02 * windowWidth, // Adjust margin based on the screen width
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor, fontSize: 0.05 * windowWidth }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 0.1 * windowWidth, // Default border radius as a percentage of the screen width
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Barlow-Bold',
  },
});

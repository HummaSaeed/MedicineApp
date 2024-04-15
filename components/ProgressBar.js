import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ percentage, color }) => {
    const progressBarStyle = {
        backgroundColor: color || '#D4D4D4', // Default color is #0E4889
        width: `${percentage}%`,
        height: 5,
        borderRadius: 2.5,
      };
    
  return (
      <View>
          <Text style={styles.percentageText}>{percentage}%</Text>
    <View style={styles.progressBarContainer}>
        <View style={{width:'100%',backgroundColor:'#D4D4D4'}}>
    <View style={[styles.progressBar, progressBarStyle]} />
    </View>
    
  </View>
  </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
    progressBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
      },
      progressBar: {
        
       
      },
      percentageText: {
        color: '#0E4889',
        fontSize: 12,
        textAlign:'right'
      },
})
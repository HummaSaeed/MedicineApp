import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({review,name}) => {
  return (
    <View style={styles.titlecontainer}>
      {review && <Text style={styles.greytext}>Top Reviews for </Text>}
      
      <Text style={styles.bluetext}>{name}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    titlecontainer:{
        display:'flex',
        flexDirection:'row'
    },
    greytext:{
        color:'#616161',
        fontSize:18,
        lineHeight:20,
        fontFamily:'Barlow-Bold'
    },
    bluetext:{
        color:'#0E4889',
        fontSize:18,
        lineHeight:20,
        fontFamily:'Barlow-Bold'
    }
})
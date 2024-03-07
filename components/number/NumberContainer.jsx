import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
     container:{
        marginTop:10,
        borderWidth:5,
        padding:24,
        borderRadius:10,
        borderColor:'#FFD700',
        alignItems:'center',
        margin:24
     },
     textStyle:{
          fontSize:20,
          color:'#FFD700',
          fontWeight:'bold'
     }
})
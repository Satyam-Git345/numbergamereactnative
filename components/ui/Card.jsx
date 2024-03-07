import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children}) => {
  return (
    <View style={styles.card}>
     {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginTop: 36,
        backgroundColor:'#3d0c02',
        marginHorizontal: 24,
        borderRadius: 10,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 1,
      },
})
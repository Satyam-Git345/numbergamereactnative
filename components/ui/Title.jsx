import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";


const Title = ({ children }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  root:{
    padding: 10,
  },

  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 10,
  },
});

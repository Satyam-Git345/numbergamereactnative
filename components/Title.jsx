import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.primay500,
    textAlign: "center",
    borderWidth: 3,
    padding: 10,
    borderColor: "yellow",
    borderRadius: 10,
  },
});

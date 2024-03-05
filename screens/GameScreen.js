import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const GameScreen = () => {
  const abc = () => {
    console.log("In abc");
  };

  return (
    <View style={styles.container}>
      <View>
        <Title>Opponent's Guess</Title>
        <Text>Higher or Lower</Text>
        <PrimaryButton onPress={abc}>+</PrimaryButton>
        <PrimaryButton>-</PrimaryButton>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
});

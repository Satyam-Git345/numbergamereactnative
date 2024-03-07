import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/number/NumberContainer";
import Card from "../components/ui/Card";
import { FontAwesome } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoun = 1;
let maxBoun = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialguess = generateRandomBetween(1, 100, userNumber);
  const [currentguess, setCurrentguess] = useState(initialguess);

  useEffect(() => {
    if (currentguess === userNumber) {
      onGameOver();
    }
  }, [currentguess, onGameOver, userNumber]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentguess < userNumber) ||
      (direction === "greater" && currentguess > userNumber)
    ) {
      console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
      return;
    }
    if (direction === "lower") {
      maxBoun = currentguess;
    } else {
      minBoun = currentguess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoun,
      maxBoun,
      currentguess
    );
    setCurrentguess(newRandomNumber);
  };

  return (
    <View style={styles.container}>
      <View>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentguess}</NumberContainer>
        <Card>
          <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
            Higher or Lower
          </Text>
          <View>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <FontAwesome name="minus" size={20} color="white" />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <FontAwesome name="plus" size={20} color="white" />
            </PrimaryButton>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});

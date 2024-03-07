import { StyleSheet, Text, View ,Alert} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/number/NumberContainer";

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

const GameScreen = ({ userNumber }) => {
  const initialguess = generateRandomBetween(minBoun, maxBoun, userNumber);
  const [currentguess, setCurrentguess] = useState(initialguess);

  const nextGuessHandler = (direction) => {
    if((direction==='lower' && currentguess <userNumber)  || (direction==='greater' && currentguess > userNumber)){
      Alert.alert("Dont Lie!!", "Enter Nmber between 1 to 99", [
        { text: "sorry",},
      ])
      return;
    }

    if (direction === "lower") {
      maxBoun = currentguess;
    } else {
      minBoun = currentguess+1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoun,
      maxBoun,
      currentguess
    );
    setCurrentguess(newRandomNumber)
  };
  return (
    <View style={styles.container}>
      <View>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentguess}</NumberContainer>
        <Text>Higher or Lower</Text>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
          +
        </PrimaryButton>
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

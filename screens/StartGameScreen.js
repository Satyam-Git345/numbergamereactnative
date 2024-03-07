import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";

const StartGameScreen = ({ onPicknumber }) => {
  const [enteredText, setEnteredText] = useState("");
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredText);
    if (chosenNumber > 99 || isNaN(chosenNumber) || chosenNumber <= 0) {
      {
        Alert.alert("Invalid Number!!", "Enter Nmber between 1 to 99", [
          { text: "okey", style: "destructive" },
        ])
      }
      return;
    }
    onPicknumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputStyle}
        maxLength={2}
        keyboardType="phone-pad"
        // autoCapitalize="none"
        // autoCorrect={true}
        value={enteredText}
        onChangeText={(e) => {
          setEnteredText(e);
        }}
      />
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={{ flex: 1 }}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "grey",
    marginHorizontal: 24,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  inputStyle: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    borderRadius: 10,
    height: 50,
    width: 50,
    fontSize: 32,
    color: "#ddb52f",
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 110,
  },
});

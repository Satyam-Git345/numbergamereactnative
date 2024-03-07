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
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";


const StartGameScreen = ({ onPicknumber }) => {
  const [enteredText, setEnteredText] = useState("");
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredText);
    if (chosenNumber > 99 || isNaN(chosenNumber) || chosenNumber <= 0) {
      {
        Alert.alert("Invalid Number!!", "Enter Nmber between 1 to 99", [
          { text: "okey", style: "destructive" },
        ]);
      }
      return;
    }
    onPicknumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredText("");
  };

  return (
    <View style={styles.rootcontainer}>
     
      <Title>Guess my number</Title>
     
      <Card style={styles.inputContainer}>
        <Text style={{textAlign:'center',color:'green',fontSize:20,}}>Enter a number</Text>
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
          <View></View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    marginTop: 100,
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

import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorgaeScreen = () => {
  const [text, setText] = useState("");
  const [saveText, setSaveText] = useState("");
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("TEXT", text);
    } catch (error) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("TEXT");
      if (value !== null) {
        setSaveText(value);
      }
    } catch (error) {
      // save error
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        rowGap: 15,
        alignItems: "center",
        flex: 1,
      }}
    >
      <TextInput
        placeholder="type here"
        onChangeText={(event) => setText(event)}
        style={{
          borderWidth: 1,
          width: "95%",
          paddingLeft: 15,
          color: "black",
        }}
        placeholderTextColor={"black"}
      />
      <TouchableOpacity
        onPress={storeData}
        style={{
          width: 130,
          backgroundColor: "black",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
        }}
      >
        <Text style={{ color: "white" }}>Save Value</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={getData}
        style={{
          width: 130,
          backgroundColor: "black",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
        }}
      >
        <Text style={{ color: "white" }}>Display Value</Text>
      </TouchableOpacity>
      <Text style={{ color: "black" }}>Saved text is {saveText}</Text>
    </KeyboardAvoidingView>
  );
};

export default AsyncStorgaeScreen;

const styles = StyleSheet.create({});

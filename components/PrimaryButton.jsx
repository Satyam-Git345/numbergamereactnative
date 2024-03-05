import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Pressable,
} from "react-native";

import Colors from "../constants/colors";


const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outerButtonStyle}>
      <Pressable
        style={styles.touchableStyle}
        onPress={onPress}
        android_ripple={{ color: "#87063c" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerButtonStyle: {
    overflow: "hidden",
  },
  touchableStyle: {
    borderRadius: 15,
    backgroundColor: Colors.primary600,
    padding: 10,
    paddingVertical: 10,
    elevation: 10,
    paddingHorizontal: 10,
    margin: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 17,
    textAlign: "center",
  },
});

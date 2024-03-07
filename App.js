import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
  import GameoverScreen from './screens/GameoverScreen';
import AsyncStorgaeScreen from "./components/AsyncStorgaeScreen";
// import Button from "./shared/Button";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver,setGameIsOver]=useState(false);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const handlegameOver=()=>{
      setGameIsOver(true);
  }

  let screen = <StartGameScreen onPicknumber={pickedNumberHandler} />;


  if(gameIsOver && userNumber)
      screen =<GameoverScreen/>
  

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handlegameOver} />;
  }

  return (
    <LinearGradient colors={["#16BFFD", "#CB3066"]} style={styles.root}>
      <ImageBackground
        imageStyle={styles.imageStyle}
        resizeMode="cover"
        style={styles.root}
        source={require("./assets/background.png")}
      >
        <SafeAreaView style={styles.root}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.2,
  },
});

import { StyleSheet, Text, View } from 'react-native';

import GameScreen from './sceens/GameScreen';
import Header from './components/Header';
import StarGameScreen from './sceens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const handleStarGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StarGameScreen onStarGame={handleStarGame} />
  
  if (userNumber){
    content = <GameScreen />
  }
  
  return (
    <View style={styles.container}>
      <Header title={"Adivina el número"}/>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { StyleSheet, Text, View } from 'react-native';

import GameScreen from './sceens/GameScreen';
import Header from './components/Header';
import StarGameScreen from './sceens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  const [loaded] = useFonts({
    Dancing: require('./assets/fonts/DancingScript-VariableFont_wght.ttf')
  });
  const [userNumber, setUserNumber] = useState()

  const handleStarGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StarGameScreen onStarGame={handleStarGame} />
  
  if (userNumber){
    content = <GameScreen />
  }
  
  if(!loaded){
    return null
  }
  
  return (
    <View style={styles.container}>
      <Header title={"Adivina el número"} newStyles={{fontFamily: 'Dancing'}}/>
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

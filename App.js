import { StyleSheet, Text, View } from 'react-native';

import GameScreen from './sceens/GameScreen';
import Header from './components/Header';
import ResultScreen from './sceens/ResultScreen';
import StarGameScreen from './sceens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';
import colors from './constants/colors';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  const [loaded] = useFonts({
    Dancing: require('./assets/fonts/DancingScript-VariableFont_wght.ttf')
  });
  const [userNumber, setUserNumber] = useState();
  const [winOrLose, setWinOrLose] = useState(false);
  const [result, setResult] = useState('');
  

  const handleStarGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }
  const handleFinishGame = (selection, number) => {
    if(((selection === 'lower' && userNumber < number) || selection === 'greater' && userNumber > number)
    ){
      setResult("ganado");
    }else{
      setResult("perdido");
    }
    setWinOrLose(true);
  }
  let content = <StarGameScreen onStarGame={handleStarGame} />;
  
  if (userNumber && winOrLose === true){
    content = <ResultScreen result={result} />
  } else if (userNumber){
    content = <GameScreen handleResult={handleFinishGame}/>
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
    backgroundColor: colors.verde,
  },
});

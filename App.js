import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StarGameScreen from './sceens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={"Adivina el número"}/>
      <StarGameScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

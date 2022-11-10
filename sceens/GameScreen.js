import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import Card from '../components/Card';

const GameScreen = () => {
    const [currentGuess, setCurrentGuess] = useState(Math.floor(Math.random() * 10 + 1)); 
    
/*     const generateRandom = () =>{
        return Math.random();
    }; */
    
    return (
        <View style={styles.container}>
        <Text>La suposición del oponente</Text>
        <Text>{currentGuess}</Text>
        <Card newStyles={styles.buttonContainer}>
            <Button title='Menor'/>
            <Button title='Mayor'/>
        </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 300,
    },
    
})
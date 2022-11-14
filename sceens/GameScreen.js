import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Card from '../components/Card';
import colors from '../constants/colors';
import fontSize from '../constants/fontSize';

const GameScreen = () => {
    const [currentGuess, setCurrentGuess] = useState(); 
    
    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
    }, []);
    
    return (
        <View style={styles.container}>
        <Text style={styles.title02}>La suposición del oponente</Text>
        <Text style={styles.title01}>{currentGuess}</Text>
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
    title01:{
        fontFamily: 'Dancing',
        fontSize: fontSize.h1,
        color: colors.primary,
    },
    title02:{
        fontFamily: 'Roboto',
        fontSize: fontSize.h2,
        color: colors.secondary,
    },
    
})
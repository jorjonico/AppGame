import { Button, Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

import Card from '../components/Card'
import Input from '../components/input'
import colors from '../constants/colors'
import fontSize from '../constants/fontSize'
import { useFonts } from 'expo-font';

const StarGameScreen = ({onStarGame}) => {
    const [loaded] = useFonts({
        Dancing: require('.././assets/fonts/DancingScript-VariableFont_wght.ttf'),
        Roboto: require('.././assets/fonts/Roboto-Bold.ttf'),
    });
    const [value, setValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const handleConfirmation = () => {
        const choseNumber = parseInt(value)
        if( choseNumber === NaN || choseNumber <= 0 || choseNumber > 99 ) return
        
        setConfirmed(true);
        setSelectedNumber(choseNumber);
        setValue('');
    }

    const handleResetInput = () =>{
        setValue('');
        setConfirmed(false);
    }

    const handleInput = (text) => {
        console.log(text);
        setValue(text.replace(/[^0-9]/g, ''))
    }
    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Card>
                    <Text style={styles.title01}>Elije un número</Text>
                    <Input value={value} onChangeText={handleInput}/>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.cleanButton} onPress={handleResetInput}>
                            <Text style={{color: 'white', fontSize: fontSize.h2}}>Limpiar</Text>
                        </Pressable>
                        <Pressable style={{...styles.cleanButton, ...styles.confirmButton}} onPress={handleConfirmation}>
                            <Text style={{color: 'white', fontSize: fontSize.h2}}>Confirmar</Text>
                        </Pressable>
                    </View>
                </Card>
                {confirmed && (
                    <Card newStyles={{marginTop: 20}}>
                        <Text style={styles.title01}>Tu número</Text>
                        <Text style={styles.title01}>{selectedNumber}</Text>
                        <Pressable style={styles.confirmGame} onPress={() => onStarGame(selectedNumber)}>
                            <Text style={{color: 'white'}}>Empezar juego</Text>
                        </Pressable>
                    </Card>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StarGameScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 50,
    },
    title01:{
        fontFamily: 'Dancing',
        fontSize: fontSize.h1,
        color: colors.primary,
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    cleanButton:{
        backgroundColor: colors.secondary,
        height: 40,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,   
    },
    confirmButton:{
        backgroundColor: colors.primary, 
        width: 110,
    },
    confirmGame:{
        marginTop: 20,
        backgroundColor: colors.acento,
        height: 40,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,   
    },
})
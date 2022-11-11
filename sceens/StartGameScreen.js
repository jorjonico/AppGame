import { Button, Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

import Card from '../components/Card'
import Input from '../components/input'
import colors from '../constants/colors'
import { useFonts } from 'expo-font';

const StarGameScreen = ({onStarGame}) => {
    const [loaded] = useFonts({
        Dancing: require('.././assets/fonts/DancingScript-VariableFont_wght.ttf')
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
                            <Text style={{color: 'white'}}>Limpiar</Text>
                        </Pressable>
                        <Pressable style={{...styles.cleanButton, ...styles.confirmButton}} onPress={handleConfirmation}>
                            <Text style={{color: 'white'}}>Confirmar</Text>
                        </Pressable>
                    </View>
                </Card>
                {confirmed && (
                    <Card newStyles={{marginTop: 20}}>
                        <Text>Tu número</Text>
                        <Text>{selectedNumber}</Text>
                        <Button title='Empezar juego' onPress={() => onStarGame(selectedNumber)}/>
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
        fontSize: 40,
        color: colors.primary,
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    cleanButton:{
        backgroundColor: colors.secondary,
        height: 35,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,   
    },
    confirmButton:{
        backgroundColor: colors.primary, 
        width: 80,
    }
})
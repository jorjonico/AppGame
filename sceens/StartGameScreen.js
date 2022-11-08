import { Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

import Card from '../components/Card'
import Input from '../components/input'
import colors from '../constants/colors'

const StarGameScreen = () => {
    const [value, setValue] = useState('')

    const handleInput = (text) => {
        setValue(text.replace(/[^0-9]/g), '')
    }
    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Card>
                    <Text>Elije un número</Text>
                    <Input value={value} onChangeText={handleInput}/>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.cleanButton}>
                            <Text style={{color: 'white'}}>Limpiar</Text>
                        </Pressable>
                        <Pressable style={{...styles.cleanButton, ...styles.confirmButton}}>
                            <Text style={{color: 'white'}}>Confirmar</Text>
                        </Pressable>
                    </View>
                </Card>
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
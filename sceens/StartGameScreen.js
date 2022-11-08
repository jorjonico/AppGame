import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import Card from '../components/Card'
import React from 'react'
import colors from '../constants/colors'

const StarGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Card>
                <Text>Elije un número</Text>
                <TextInput />
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
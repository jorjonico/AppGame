import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import Card from '../components/Card'
import React from 'react'

const StarGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Card>
                <Text>Elije un número</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title='Limpiar'/>
                    <Button title='Confirmar'/>
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

})
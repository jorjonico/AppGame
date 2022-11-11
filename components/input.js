import { StyleSheet, TextInput } from 'react-native'

import React from 'react'
import colors from '../constants/colors'
import { useFonts } from 'expo-font';

const Input = ({style, ...restProps}) => {
    const [loaded] = useFonts({
        Dancing: require('.././assets/fonts/DancingScript-VariableFont_wght.ttf')
    });
    
    return (
    <TextInput 
    blurOnSubmit
    autoCapitalization='none'
    autoCorrect={false}
    keyboardType='numeric'
    maxLength={2}
    style={{...styles.input, ...style}}
    {...restProps}
    />
    );
}

export default Input

const styles = StyleSheet.create({
    input:{
        
        height: 50,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginVertical: 20,
        width: 60,
        marginTop: 30,
        fontFamily: 'Dancing',
        fontSize: 50,
        color: colors.acento,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
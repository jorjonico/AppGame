import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import colors from '../constants/colors'

const Header = ({title}) => {
    return (
        <View style={styles.header}>
        <Text style={styles.headerTittle}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#006d77",
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTittle:{
        color: "#edf6f9",
        fontSize: 22,
    }
})
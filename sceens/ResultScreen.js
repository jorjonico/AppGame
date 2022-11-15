import { Image, StyleSheet, Text, View } from 'react-native'

import Card from '../components/Card'
import React from 'react'
import colors from '../constants/colors'
import fontSize from '../constants/fontSize'

const ResultScreen = ({result}) => {
    return (
        <View style={styles.conteiner}>
            <Card>
                <Text style={styles.title02}>{`Tu has ${result} el juego`}</Text>
                <Image
                style={styles.imgContainer}
                source={{uri: "https://img.freepik.com/vector-gratis/facebook-icono-me-gusta_1017-8081.jpg?w=740&t=st=1668521745~exp=1668522345~hmac=e18d81fc9f6c8bbd67cbefa97eb9e0bf3a9c722d99005665a8b5bcad099eeee1"}}
                />
            </Card>
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title02:{
        fontFamily: 'Roboto',
        fontSize: fontSize.h2,
        color: colors.secondary,
    },
    imgContainer:{
        width: 200,
        height: 200,
    },
})
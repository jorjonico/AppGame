import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Card from '../components/Card'
import colors from '../constants/colors'
import fontSize from '../constants/fontSize'
import lose from "../assets/img/lose.jpg"
import win from "../assets/img/win.jpg"

const ResultScreen = ({result}) => {
    const [image, setImage] = useState('');
    useEffect(() =>{
        handleImage();
    }, []);

    const handleImage = () =>{
        if (result === 'ganado') {
            setImage(win);
            return;
        }
        setImage(lose);
    };
    
    return (
        <View style={styles.conteiner}>
            <Card>
                <Text style={styles.title02}>{`Tu has ${result} el juego`}</Text>
                <Image
                style={styles.imgContainer}
                source={image}
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
        marginTop: 30,
    },
})
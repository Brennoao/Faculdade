import { Image, View } from 'react-native'
import React, { useEffect } from 'react'
import StartScreenStyle from '../styles/StartScreenStyle'
import * as animatable from 'react-native-animatable'

export default function StartScreen({ navigation }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home');
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={StartScreenStyle.Container}>
            <animatable.Image source={require('../assets/OnlineShopping-removebg-preview.png')} style={StartScreenStyle.Image} animation='zoomInUp'/>
        </View>
    )
}
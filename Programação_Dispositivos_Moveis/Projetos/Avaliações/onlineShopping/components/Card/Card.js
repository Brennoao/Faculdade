import { Image, Pressable, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import Style from './Style'
import GlobalValues from '../../styles/Global'
import { formatarComoDinheiro } from '../Simbolo'

export default function Card(props) {

  return (
    <View style={Style.outsideImage}>
      <Pressable onPress={props.changePage}>
        <Image source={{ uri: props.Image }} style={Style.Image} />
      </Pressable>

      <View style={Style.outsideInsideImage}>
        <Text variant='titleMedium' style={{ color: GlobalValues.mainColor, marginLeft: GlobalValues.mainSpacing, marginTop: GlobalValues.mainSpacing }}>{props.Name}</Text>
        <View style={Style.Price}>
          <Text variant='titleLarge' style={{ color: GlobalValues.secondaryColor, marginLeft: GlobalValues.mainSpacing, fontWeight: 'bold' }}>{formatarComoDinheiro(props.Valor)}</Text>
        </View>
      </View>
    </View>
  )
}
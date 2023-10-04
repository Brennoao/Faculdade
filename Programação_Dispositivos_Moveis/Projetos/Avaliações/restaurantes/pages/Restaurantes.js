import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Api from '../services/Api'
import { Avatar, Button, Card, IconButton } from 'react-native-paper'

export default function Restaurantes(props) {
    const [restaurantes, setRestaurantes] = useState([])

    Api.get('/food/restaurantes').then(response => {
        setRestaurantes(response.data)
    })

    const image = () => {
        return <Avatar.Image size={48} source={{ uri: item.image }} />
    }

    function trocarPagina() {
        props.navigation.navigate('id')
    }

    // console.log(restaurantes)

    return (
        <View style={styles.First}>
            <FlatList
                data={restaurantes}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('id', item.id) }}>
                        <Card mode='contained' style={styles.peopleList}>
                            <Card.Title title={item.nome} subtitle={item.tipo_cozinha} left={(props) => <Avatar.Image size={40} source={{ uri: item.imagem }} />} right={(props) => <IconButton {...props} icon="arrow-right-circle-outline" />} />
                        </Card>
                    </TouchableOpacity>}
            showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    First: {
        paddingHorizontal: 10
    },

    peopleList: {
        marginTop: 10,  borderWidth: 2
    }
})

// left={LeftContent}
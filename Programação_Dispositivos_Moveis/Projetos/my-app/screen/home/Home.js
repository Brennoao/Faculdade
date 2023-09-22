import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import usuarios from '../../mocks/users.json'
import Pessoa from './Components/Pessoa'
import { Button } from 'react-native-paper'
import Api from '../../services/api'


export default function Home(props) {
     

    Api.get('/users').then(response => {
        setUsuarios(response.data.users)
    })

    function irParaASCreenFeed() {
        props.navigation.navigate('Feed')
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Home</Text>

            <Button mode={'outlined'} onPress={irParaASCreenFeed}>TEST</Button>

            <FlatList style={styles.listPessoas}
                data={usuarios}
                renderItem={({ item }) => <Pessoa pessoa={item} />}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listPessoas: {
        width: '90%'
    }
})
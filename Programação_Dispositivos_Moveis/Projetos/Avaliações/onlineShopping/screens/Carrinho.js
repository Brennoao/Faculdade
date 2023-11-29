import { Alert, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import DummyApi from '../services/DummyApi'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import Toast from 'react-native-toast-message'
import { formatarComoDinheiro } from '../components/Simbolo'
import CarrinhoStyle from '../styles/CarrinhoStyle'

export default function Carrinho(props) {
    // const { navigation } = props;

    try {
        console.log(props.navigation.navigate('Shopping'))
    } catch (error) {
        console.log(error)
    }

    const [cash, setCash] = useState([])
    const [atualizar, setAtualizar] = useState([])

    async function getData() {
        try {
            const jsonValue = await AsyncStorage.getItem('addProdutos')
            if (jsonValue != null) {
                let data = JSON.parse(jsonValue)
                let productData = []

                let filteredData = data.filter(item => item.hasOwnProperty('produtor'));

                for (let item of filteredData) {
                    try {
                        const response = await DummyApi.get('/products/' + item.produtor)
                        productData.push(response.data)
                    } catch (error) {
                        console.log(error)
                    }
                }

                setCash(productData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useLayoutEffect(() => {
        getData()
    }, [atualizar])

    async function deleteProducts(productExcluir) {
        const jsonValue = await AsyncStorage.getItem('addProdutos')
        let produtos = jsonValue != null ? JSON.parse(jsonValue) : []

        const novaListaProdutos = produtos.filter(item => item.produtor !== productExcluir)

        await AsyncStorage.setItem('addProdutos', JSON.stringify(novaListaProdutos))

        Toast.show({
            type: 'success',
            text1: 'Produto excluído com sucesso!'
        })

        setAtualizar(novaListaProdutos)
    }

    function handleDeleteProducts(productExcluir) {
        Alert.alert("Confirmação?", "Você realmente deseja excluir este produto?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => deleteProducts(productExcluir) }
            ]
        );
    }

    function calculateTotalPrice() {
        let total = 0;
        cash.forEach(item => {
            total += item.price;
        });
        return total;
    }

    function trocarPagina() {
        try {
            props.navigation.navigate('Shopping', { get: getData })
        } catch (error) {
            console.log(error)
        }

    }

    // console.log(cash)

    return (
        <View style={CarrinhoStyle.Container}>

            {cash ? (
                <FlatList
                    style={{ width: '100%' }}
                    contentContainerStyle={{ gap: 10 }}
                    data={cash}
                    renderItem={({ item }) => (
                        <Card>
                            <Card.Title
                                title={item.title}
                                subtitle={item.brand + ' ' + formatarComoDinheiro(item.price)}
                                left={(props) => <Avatar.Image size={50} source={{ uri: item.thumbnail }} />}
                                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => handleDeleteProducts(item.id)} />}
                            />
                        </Card>
                    )}
                />
            ) : null}

            <TouchableOpacity style={CarrinhoStyle.Button} onLongPress={() => trocarPagina()}><Text style={CarrinhoStyle.buttonText}>{`Total: ${calculateTotalPrice()}`}</Text></TouchableOpacity>
        </View>
    )
}
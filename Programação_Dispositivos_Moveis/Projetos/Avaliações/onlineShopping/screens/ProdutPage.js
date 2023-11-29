import { Alert, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import DummyApi from '../services/DummyApi'
import { Card, Divider, Icon, IconButton, Text, TextInput } from 'react-native-paper'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating';
import ProductPageStyle from '../styles/ProductPageStyle';
import GlobalValues from '../styles/Global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GerarIdÚnico from '../components/GerarIdÚnico';
import Toast from 'react-native-toast-message';

export default function ProductPage(props) {
    const { navigation } = props;
    const idProducts = props.route.params

    const [produtos, setProdutos] = useState([])
    const [cash, setCash] = useState([])
    const [comentarios, setComentarios] = useState([])

    const [visible, setVisible] = useState(false)
    const [editing, setEditing] = useState(false)
    const [starCount, setStarCount] = useState(0);

    const [inputValue, setInputValue] = useState('')
    const [commentEditing, setCommentEditing] = useState(null)

    useEffect(() => {
        try {
            DummyApi.get('/products/' + idProducts).then(response => {
                setProdutos(response.data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    async function loadStorage() {
        try {
            const values = await AsyncStorage.multiGet(['comentarios', 'star']);
            let comentario = values[0][1] ? JSON.parse(values[0][1]) : [];
            let star = values[1][1] ? JSON.parse(values[1][1]) : [];

            const listComentarios = comentario.filter(item => item.id === idProducts)
            const listStar = star.filter(item => item.id == idProducts)
            let rating = listStar.map(item => item.rating)

            setComentarios(listComentarios);
            setStarCount(rating);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadStorage()
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: produtos.title });
    }, [produtos])

    async function addComentarios() {
        let newListComments = comentarios
        newListComments.push({ id: idProducts, comment: inputValue })
        await AsyncStorage.setItem('comentarios', JSON.stringify(newListComments));
        setComentarios(newListComments)
        setCommentEditing(null)
        setInputValue('')
        setVisible(false)
    }

    async function editarComentario() {
        let newListComments = comentarios
        let index = newListComments.findIndex(item => item.id === commentEditing.id)

        newListComments.splice(index, 1, { id: commentEditing.id, comment: inputValue })

        await AsyncStorage.setItem('comentarios', JSON.stringify(newListComments));
        setComentarios(newListComments)
        setEditing(false)
        setInputValue('')
    }

    async function excluirComentarios(comentario) {
        let newListComentarios = comentarios.filter(item => item !== comentario)
        await AsyncStorage.setItem('comentarios', JSON.stringify(newListComentarios));
        setComentarios(newListComentarios)
    }

    function handleDeleteProducts(comentario) {
        Alert.alert("Confirmação?", "Você deseja excluir este Comentarios?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => excluirComentarios(comentario) }
            ]
        );
    }

    function handleComentarios(item) {
        setCommentEditing(item);
        setInputValue(item.comment);
        setEditing(true);
    }

    function handleButton() {
        // console.log('HANDLE BUTTON -> editando: ', editing)
        if (editing) {
            editarComentario()
        } else {
            addComentarios()
        }
    }

    async function salvar(productId, producerId) {
        const cash = JSON.parse(await AsyncStorage.getItem('addProdutos')) || [];
        const comparator = cash.find(item => item.produtor == producerId);
        if (!comparator) {
            cash.push({ id: GerarIdÚnico(), produtor: producerId });
            await AsyncStorage.setItem('addProdutos', JSON.stringify(cash));
            setCash(cash);
            Toast.show({ type: 'success', text1: 'Produto salvo adicionado no carrinho!' });
            navigation.goBack();
        } else {
            Toast.show({ type: 'error', text1: 'Este produto já existe!' });
        }
    }

    async function onStarRatingPress(rating) {
        try {
            const getStarStorage = await AsyncStorage.getItem('star');

            let lisStar = getStarStorage ? JSON.parse(getStarStorage) : [];
            const index = lisStar.findIndex(item => item.id === idProducts);

            if (index !== -1) {
                lisStar[index].rating = rating;
            } else {
                lisStar.push({ id: idProducts, rating: rating });
            }

            await AsyncStorage.setItem('star', JSON.stringify(lisStar));
            setStarCount(rating);

        } catch (error) {
            console.log('Star', error);
        }
    }

    async function limparAsyncStorage() {
        try {
            await AsyncStorage.clear();
            console.log('AsyncStorage limpo com sucesso!');
        } catch (error) {
            console.log('Erro ao limpar o AsyncStorage: ', error);
        }
    }

    return (
        <View style={ProductPageStyle.Container}>
            {produtos ? (
                <>
                    <TouchableOpacity onPress={() => limparAsyncStorage()}><Text style={{ color: 'white' }}>limpar</Text></TouchableOpacity>
                    <FlatList
                        style={ProductPageStyle.Flat}
                        horizontal
                        contentContainerStyle={ProductPageStyle.flatContainer}
                        data={produtos.images}
                        renderItem={({ item }) => (
                            <Card mode='outlined' contentStyle={{ width: 355 }}>
                                <Card.Cover resizeMode='stretch' source={{ uri: item }} />
                            </Card>
                        )}
                    />

                    <View style={ProductPageStyle.Infos}>
                        <View style={ProductPageStyle.infosContainer}>
                            <Text style={[ProductPageStyle.infosText, ProductPageStyle.infosTExtCategory]}>Marca: {produtos.brand}</Text>
                            <Text style={ProductPageStyle.infosText}>Categoria: {produtos.category}</Text>
                        </View>

                        <Divider bold />

                        <View style={ProductPageStyle.infosContainer}>
                            <Text style={[ProductPageStyle.infosText, ProductPageStyle.infosTExtCategory]}>Preço: {produtos.price}</Text>
                            <Text style={ProductPageStyle.infosText}>Stock: {produtos.stock}</Text>
                        </View>

                        <Divider bold />

                        <View style={ProductPageStyle.infosContainer}>
                            <Text style={[ProductPageStyle.infosText, ProductPageStyle.infosTExtCategory]}>Descrição: {produtos.description}</Text>
                        </View>

                        <View style={ProductPageStyle.infosContainer}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={starCount}
                                selectedStar={(rating) => onStarRatingPress(rating)}
                            />
                        </View>

                    </View>
                    <View style={ProductPageStyle.Cash}>
                        <TouchableOpacity style={ProductPageStyle.Botão} onPress={() => setVisible(!visible)}><Text style={ProductPageStyle.infosText}>Comentários</Text></TouchableOpacity>

                        <View>
                            <TouchableOpacity style={ProductPageStyle.Botão} onPress={() => salvar(produtos.id, produtos.id)} >
                                <Text style={ProductPageStyle.infosText}>
                                    <Icon source="cart-arrow-down" size={20} /> Adicionar no Carrinho
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    {visible ? (
                        <>
                            <TextInput
                                mode='outlined'
                                label='Comentario'
                                inputMode='text'
                                value={inputValue}
                                onChangeText={(text) => setInputValue(text)}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <TouchableOpacity style={[ProductPageStyle.Botão, { marginVertical: 10 }]} onPress={handleButton}><Text style={ProductPageStyle.infosText}>{editing ? 'Editar' : 'Comentar'}</Text></TouchableOpacity>
                            </View>
                        </>

                    ) : null}

                    <FlatList
                        style={{ marginTop: GlobalValues.mainSpacing, maxHeight: 230 }}
                        contentContainerStyle={{ gap: GlobalValues.mainSpacing }}
                        data={comentarios}
                        renderItem={({ item }) => (
                            <Card key={item.id}>
                                <Card.Content>
                                    <Text>{item.comment}</Text>
                                </Card.Content>
                                <Divider bold />
                                <Card.Actions>
                                    <IconButton icon='pen' onPress={() => { handleComentarios(item) }} />
                                    <IconButton icon='trash-can-outline' onPress={() => { handleDeleteProducts(item) }} />
                                </Card.Actions>
                            </Card>
                        )}
                    />

                </>
            ) : null}

        </View>

    )
}

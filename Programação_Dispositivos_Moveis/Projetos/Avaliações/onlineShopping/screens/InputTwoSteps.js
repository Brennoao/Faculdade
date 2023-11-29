import { Alert, FlatList, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, IconButton, Menu, Modal, Portal, Text, TextInput } from 'react-native-paper'
import GlobalValues from '../styles/Global'
import GerarIdÚnico from '../components/GerarIdÚnico'
import { Formik } from 'formik'
import InputTwoStepsStyle from '../styles/InputTwoStepsStyle'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextInputMask } from 'react-native-masked-text'
import Toast from 'react-native-toast-message'
import DummyApi from '../services/DummyApi'
import FuncionarioStyle from '../styles/FuncionarioStyle'

export default function InputTwoSteps(props) {
    const [twoSteps, setTwoSteps] = useState(0)
    const [shopping, setShopping] = useState([])
    const [cash, setCash] = useState([])
    const [total, setTotal] = useState(0);

    const [menuVisible, setMenuVisible] = useState(false);
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const openMenu = (id) => setMenuVisible({ [id]: true });
    const closeMenu = () => setMenuVisible({});

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

    useEffect(() => {
        getData()
    }, [])

    async function loadShopping() {
        try {
            const response = await AsyncStorage.getItem('shopping')
            const shoppingStorage = response ? JSON.parse(response) : []
            setShopping(shoppingStorage)
        } catch (error) {
            console.log('load', error)
        }
    }

    async function salvar(shoppingTest) {
        // console.log('chegou até aqui', funcionario)
        try {
            console.log(shopping)
            let listShopping = shopping
            shoppingTest.id = GerarIdÚnico(); // Add um ID único ao shopping
            listShopping.push(shoppingTest)
            await AsyncStorage.setItem('shopping', JSON.stringify(listShopping));
            setShopping(listShopping)
            setTwoSteps(0)

            Toast.show({
                visibilityTime: GlobalValues.ms800,
                type: 'success',
                text1: 'Compra realizada com sucesso!'
            })

            // navigation.goBack()

        } catch (error) {
            console.log('Salvar', error)
        }
    }

    useEffect(() => {
        loadShopping()
    }, [])

    function calculateTotalPrice() {
        let total = 0;
        cash.forEach(item => {
            total += item.price;
        });
        return total;
    }

    useEffect(() => {
        setTotal(calculateTotalPrice());
    }, [cash]);

    function confirmDelete() {
        shopping.length === 0 ? (
            Toast.show({
                visibilityTime: GlobalValues.ms800,
                type: 'info',
                text1: 'Não existe informações cadastradas!'
            })
        ) : showModal()
    }

    async function excluirShopping(shoppingExcluir) {
        const newListFuncionarios = shopping.filter(item => item.id !== shoppingExcluir.id);
        await AsyncStorage.setItem('shopping', JSON.stringify(newListFuncionarios));
        setShopping(newListFuncionarios);

        Toast.show({
            visibilityTime: GlobalValues.ms800,
            type: 'success',
            text1: 'Shopping excluído com sucesso!'
        });
    }


    function handleExcliuirShopping(shoppingExcluir) {
        Alert.alert("Confirmação?", "Você realmente deseja excluir este Shopping?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => excluirShopping(shoppingExcluir) }
            ]
        );
    }

    console.log(shopping)

    return (
        <View>
            <View style={{ padding: GlobalValues.mainSpacing, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: GlobalValues.thirdColor, borderRadius: GlobalValues.mainRadius }}>
                <Text style={{ color: GlobalValues.thirdColor }}>Informações da compra</Text>
            </View>
            <Formik
                initialValues={{ valor: '', nome: '', sobreNome: '', cpf: '', celular: '', cep: '', rua: '', bairro: '', cidade: '', uf: '', email: '', salario: '', numCard: '', validData: '', cvv: '' }}
                onSubmit={(values, { resetForm }) => {
                    salvar(values);
                    resetForm();
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, touched, errors, values }) => (
                    <>
                        <View style={{ gap: 10, padding: 10 }}>
                            {twoSteps === 0 && (
                                <>
                                    <TextInput
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='Valor'
                                        onBlur={handleBlur('valor')}
                                        value={values.valor + total}
                                        error={errors.valor ? true : false}
                                        disabled={true}
                                    />

                                    <TextInput
                                        // style={InputTwoStepsStyle.input}
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='Nome'
                                        onChangeText={handleChange('nome')}
                                        onBlur={handleBlur('nome')}
                                        value={values.nome}
                                        error={errors.nome ? true : false}
                                    />

                                    {touched.nome && errors.nome && (
                                        <Text style={{ color: GlobalValues.mainColor, textAlign: 'center' }}>{errors.nome}</Text>
                                    )}

                                    <TextInput
                                        // style={InputTwoStepsStyle.input}
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='Sobre Nome'
                                        onChangeText={handleChange('sobreNome')}
                                        onBlur={handleBlur('sobreNome')}
                                        value={values.sobreNome}
                                        error={errors.sobreNome ? true : false}
                                    />

                                    {touched.sobreNome && errors.sobreNome && (
                                        <Text style={{ color: GlobalValues.mainColor, textAlign: 'center' }}>{errors.sobreNome}</Text>
                                    )}

                                    <TextInput
                                        // style={InputTwoStepsStyle.input}
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='CPF'
                                        onChangeText={handleChange('cpf')}
                                        onBlur={handleBlur('cpf')}
                                        value={values.cpf}
                                        keyboardType='numeric'
                                        error={errors.cpf ? true : false}
                                        render={props =>
                                            <TextInputMask
                                                {...props}
                                                type={'cpf'}
                                            />
                                        }
                                    />

                                    {touched.cpf && errors.cpf && (
                                        <Text style={{ color: GlobalValues.mainColor, textAlign: 'center' }}>{errors.cpf}</Text>
                                    )}

                                    <Button mode='outlined' onPress={() => setTwoSteps(1)}>Avançar</Button>
                                </>
                            )}
                            {twoSteps === 1 && (
                                <>
                                    <TextInput
                                        // style={InputTwoStepsStyle.input}
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='Celular'
                                        onChangeText={handleChange('celular')}
                                        onBlur={handleBlur('celular')}
                                        value={values.celular}
                                        error={errors.celular ? true : false}
                                        keyboardType='numeric'
                                        render={props =>
                                            <TextInputMask
                                                {...props}
                                                type={'cel-phone'}
                                            />
                                        }
                                    />

                                    {touched.celular && errors.celular && (
                                        <Text style={{ color: GlobalValues.mainColor, textAlign: 'center' }}>{errors.celular}</Text>
                                    )}

                                    <TextInput
                                        // style={InputTwoStepsStyle.input}
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='Email'
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        keyboardType='email-address'
                                        value={values.email}
                                        error={errors.email ? true : false}
                                    />

                                    {touched.email && errors.email && (
                                        <Text style={{ color: GlobalValues.mainColor, textAlign: 'center' }}>{errors.email}</Text>
                                    )}

                                    <View style={InputTwoStepsStyle.Button}>
                                        <TouchableOpacity style={InputTwoStepsStyle.insideButtons} onPress={() => setTwoSteps(0)}><Text style={InputTwoStepsStyle.insideTextButtons}>Voltar</Text></TouchableOpacity>
                                        <TouchableOpacity style={InputTwoStepsStyle.insideButtons} onPress={() => setTwoSteps(2)}><Text style={InputTwoStepsStyle.insideTextButtons}>Avançar</Text></TouchableOpacity>
                                    </View>
                                </>
                            )}
                            {twoSteps === 2 && (
                                <>
                                    <TextInput
                                        // style={InputTwoStepsStyle.input}
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='CEP'
                                        onChangeText={handleChange('cep')}
                                        onBlur={handleBlur('cep')}
                                        value={values.cep}
                                        error={errors.cep ? true : false}
                                        keyboardType='numeric'
                                        render={props =>
                                            <TextInputMask
                                                {...props}
                                                type={'zip-code'}
                                            />
                                        }
                                    />

                                    {touched.cep && errors.cep && (
                                        <Text style={{ color: GlobalValues.mainColor, textAlign: 'center' }}>{errors.cep}</Text>
                                    )}

                                    <TextInput
                                        // style={InputTwoStepsStyle.input}
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='Rua'
                                        onChangeText={handleChange('rua')}
                                        onBlur={handleBlur('rua')}
                                        value={values.rua}
                                        error={errors.rua ? true : false}
                                    />

                                    <TextInput
                                        // style={InputTwoStepsStyle.input}
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='Bairro'
                                        onChangeText={handleChange('bairro')}
                                        onBlur={handleBlur('bairro')}
                                        value={values.bairro}
                                        error={errors.bairro ? true : false}
                                    />

                                    <TextInput
                                        // style={InputTwoStepsStyle.input}
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='Cidade'
                                        onChangeText={handleChange('cidade')}
                                        onBlur={handleBlur('cidade')}
                                        value={values.cidade}
                                        error={errors.cidade ? true : false}
                                    />

                                    <TextInput
                                        // style={InputTwoStepsStyle.input}
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='UF'
                                        onChangeText={handleChange('uf')}
                                        onBlur={handleBlur('uf')}
                                        value={values.uf}
                                        error={errors.uf ? true : false}
                                    />

                                    <View style={InputTwoStepsStyle.Button}>
                                        <TouchableOpacity style={InputTwoStepsStyle.insideButtons} onPress={() => setTwoSteps(1)}><Text style={InputTwoStepsStyle.insideTextButtons}>Voltar</Text></TouchableOpacity>
                                        <TouchableOpacity style={InputTwoStepsStyle.insideButtons} onPress={() => setTwoSteps(3)}><Text style={InputTwoStepsStyle.insideTextButtons}>Avançar</Text></TouchableOpacity>
                                    </View>
                                </>
                            )}
                            {twoSteps === 3 && (
                                <>
                                    <TextInput
                                        // style={InputTwoStepsStyle.input}
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='Numero do Cartão'
                                        onChangeText={handleChange('numCard')}
                                        onBlur={handleBlur('numCard')}
                                        keyboardType='numeric'
                                        value={values.numCard}
                                        error={errors.numCard ? true : false}
                                        render={props =>
                                            <TextInputMask
                                                {...props}
                                                type={'credit-card'}
                                                options={{
                                                    obfuscated: false,
                                                    issuer: 'amex'
                                                }}

                                            />
                                        }
                                    />

                                    {touched.numCard && errors.numCard && (
                                        <Text style={{ color: GlobalValues.mainColor, textAlign: 'center' }}>{errors.numCard}</Text>
                                    )}

                                    <TextInput
                                        // style={InputTwoStepsStyle.input}
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='Validade'
                                        onChangeText={handleChange('validData')}
                                        onBlur={handleBlur('validData')}
                                        keyboardType='numeric'
                                        value={values.validData}
                                        error={errors.validData ? true : false}
                                        render={props =>
                                            <TextInputMask
                                                {...props}
                                                type={'datetime'}
                                                options={{
                                                    format: 'DD/MM/YYYY'
                                                }}
                                            />
                                        }
                                    />

                                    {touched.validData && errors.validData && (
                                        <Text style={{ color: GlobalValues.mainColor, textAlign: 'center' }}>{errors.validData}</Text>
                                    )}

                                    <TextInput
                                        // style={InputTwoStepsStyle.input}
                                        outlineColor={GlobalValues.mainColor}
                                        activeOutlineColor={GlobalValues.thirdColor}
                                        textColor={GlobalValues.secondaryColor}
                                        mode='outlined'
                                        label='Cvv'
                                        onChangeText={handleChange('cvv')}
                                        onBlur={handleBlur('cvv')}
                                        keyboardType='numeric'
                                        value={values.cvv}
                                        error={errors.cvv ? true : false}
                                        render={props =>
                                            <TextInputMask
                                                {...props}
                                                type={'custom'}
                                                options={{
                                                    mask: '999'
                                                }}
                                            />
                                        }
                                    />

                                    {touched.cvv && errors.cvv && (
                                        <Text style={{ color: GlobalValues.mainColor, textAlign: 'center' }}>{errors.cvv}</Text>
                                    )}

                                    <View style={InputTwoStepsStyle.Button}>
                                        <TouchableOpacity style={FuncionarioStyle.botao} onPress={() => confirmDelete()}>
                                            <Text style={FuncionarioStyle.textBotao}>Listar Compras</Text>
                                        </TouchableOpacity>
                                        <View style={{ marginTop: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                                            <TouchableOpacity style={InputTwoStepsStyle.insideButtons} onPress={() => setTwoSteps(1)}><Text style={InputTwoStepsStyle.insideTextButtons}>Voltar</Text></TouchableOpacity>

                                            <TouchableOpacity style={InputTwoStepsStyle.insideButtons} onPress={handleSubmit}><Text style={[InputTwoStepsStyle.textBotao, { color: GlobalValues.mainColor }]}>Enviar</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                </>
                            )}
                        </View>
                    </>
                )}
            </Formik>

            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={FuncionarioStyle.Modal}>
                    <FlatList
                        style={{ maxHeight: 400 }}
                        contentContainerStyle={{ gap: GlobalValues.mainSpacing }}
                        showsVerticalScrollIndicator={false}
                        data={shopping}
                        renderItem={({ item }) => (
                            <Card mode='outlined' key={item.id}>
                                <Card.Title
                                    title={item.nome + ' ' + item.sobreNome}
                                    right={(props) => (
                                        <Menu visible={menuVisible[item.id]} onDismiss={closeMenu} anchor={<IconButton {...props} icon="dots-vertical" onPress={() => openMenu(item.id)} />} >
                                            <Menu.Item onPress={() => handleExcliuirShopping(item)} title="Excluir" />
                                        </Menu>
                                    )}
                                />
                                <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text variant="bodyMedium">valor:</Text>
                                        <Text variant="bodyMedium">Nome:</Text>
                                        <Text variant="bodyMedium">Sobre Nome:</Text>
                                        <Text variant="bodyMedium">CPF:</Text>
                                    </View>

                                    <View>
                                        <Text variant="bodyMedium">{item.valor}</Text>
                                        <Text variant="bodyMedium">{item.nome}</Text>
                                        <Text variant="bodyMedium">{item.sobreNome}</Text>
                                        <Text variant="bodyMedium">{item.cpf}</Text>
                                    </View>
                                </Card.Content>
                            </Card>
                        )}
                    />
                </Modal>
            </Portal>
        </View>
    )
}


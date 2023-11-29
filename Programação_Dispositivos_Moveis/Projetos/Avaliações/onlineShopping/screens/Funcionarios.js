import { Alert, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { Card, Divider, IconButton, Menu, Modal, Portal, Text, TextInput } from 'react-native-paper'
import FuncionarioStyle from '../styles/FuncionarioStyle'
import { useNavigation } from '@react-navigation/native'
import GerarIdÚnico from '../components/GerarIdÚnico'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import GlobalValues from '../styles/Global'
import FuncionarioValidator from '../validator/FuncionarioValidator'
import { TextInputMask } from 'react-native-masked-text'

export default function Funcionarios() {

  const navigation = useNavigation()
  const [funcionarios, setFuncionarios] = useState([])
  const [editingItem, setEditingItem] = useState(null);


  const [menuVisible, setMenuVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const openMenu = (id) => setMenuVisible({ [id]: true });
  const closeMenu = () => setMenuVisible({});

  async function loadFuncionarios() {
    const response = await AsyncStorage.getItem('funcionario')
    const funcionariosStorage = response ? JSON.parse(response) : []
    setFuncionarios(funcionariosStorage)
  }
  useEffect(() => {
    loadFuncionarios()
  }, [])

  async function salvar(funcionario) {
    console.log('chegou até aqui', funcionario)
    try {
      console.log(funcionarios)
      let listShopping = funcionarios

      if (funcionario.id) {
        const index = listShopping.findIndex(item => item.id === funcionario.id);
        if (index !== -1) {
          listShopping[index] = funcionario;
          setEditingItem(null)
        }
      } else {
        // Verifica se o CPF ou o celular já existem
        const cpfExists = listShopping.some(item => item.cpf === funcionario.cpf);
        const celularExists = listShopping.some(item => item.celular === funcionario.celular);

        if (cpfExists || celularExists) {
          console.log('CPF ou celular já existem');
          Toast.show({
            visibilityTime: GlobalValues.ms800,
            type: 'info',
            text1: 'CPF ou celular já existem!!'
          })
          return;
        }

        funcionario.id = GerarIdÚnico();
        listShopping.push(funcionario)
        navigation.goBack()
      }

      await AsyncStorage.setItem('funcionario', JSON.stringify(listShopping));
      setFuncionarios(listShopping)

      Toast.show({
        visibilityTime: GlobalValues.ms800,
        type: 'success',
        text1: 'Funcionario realizada com sucesso!'
      })

    } catch (error) {
      console.log('Salvar', error)
    }
  }

  function editarFuncionario(funcionario) {
    closeMenu();
    hideModal();
    setEditingItem(funcionario);
  }

  async function excluirFuncionarios(funcionariosExcluir) {
    const newListFuncionarios = funcionarios.filter(item => item.id !== funcionariosExcluir.id);
    await AsyncStorage.setItem('funcionario', JSON.stringify(newListFuncionarios));
    setFuncionarios(newListFuncionarios);

    Toast.show({
      visibilityTime: GlobalValues.ms800,
      type: 'success',
      text1: 'Funcionario excluído com sucesso!'
    });
  }


  function handleExcliuirFuncionarios(funcionariosExcluir) {
    Alert.alert("Confirmação?", "Você realmente deseja excluir este Funcionario?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => excluirFuncionarios(funcionariosExcluir) }
      ]
    );
  }

  useEffect(() => {
    if (funcionarios.length === 0) {
      hideModal()
    }
  }, [funcionarios])

  function confirmDelete() {
    funcionarios.length === 0 ? (
      Toast.show({
        visibilityTime: GlobalValues.ms800,
        type: 'info',
        text1: 'Não existe funcionario cadastrado!'
      })
    ) : showModal()
  }

  // console.log(funcionarios, editingItem)
  return (
    <View>
      <Formik
        enableReinitialize
        initialValues={{
          nome: editingItem ? editingItem.nome : '',
          sobreNome: editingItem ? editingItem.sobreNome : '',
          cpf: editingItem ? editingItem.cpf : '',
          celular: editingItem ? editingItem.celular : '',
          salario: editingItem ? editingItem.salario : '',
          id: editingItem ? editingItem.id : '',
        }}
        validationSchema={FuncionarioValidator}
        onSubmit={(values, { resetForm }) => {
          salvar(values);
          resetForm(); // Reseta os valores do formulário para initialValues
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, touched, errors, values }) => (
          <>
            <View style={{ gap: 10, padding: 10 }}>

              <TextInput
                style={FuncionarioStyle.input}
                outlineColor={GlobalValues.mainColor}
                activeOutlineColor={GlobalValues.thirdColor}
                textColor={GlobalValues.thirdColor}
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
                style={FuncionarioStyle.input}
                outlineColor={GlobalValues.mainColor}
                activeOutlineColor={GlobalValues.thirdColor}
                textColor={GlobalValues.thirdColor}
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
                style={FuncionarioStyle.input}
                outlineColor={GlobalValues.mainColor}
                activeOutlineColor={GlobalValues.thirdColor}
                textColor={GlobalValues.thirdColor}
                mode='outlined'
                label='CPF'
                onChangeText={handleChange('cpf')}
                onBlur={handleBlur('cpf')}
                value={values.cpf}
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

              <TextInput
                style={FuncionarioStyle.input}
                outlineColor={GlobalValues.mainColor}
                activeOutlineColor={GlobalValues.thirdColor}
                textColor={GlobalValues.thirdColor}
                mode='outlined'
                label='Celular'
                onChangeText={handleChange('celular')}
                onBlur={handleBlur('celular')}
                value={values.celular}
                error={errors.celular ? true : false}
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
                style={FuncionarioStyle.input}
                outlineColor={GlobalValues.mainColor}
                activeOutlineColor={GlobalValues.thirdColor}
                textColor={GlobalValues.thirdColor}
                mode='outlined'
                label='Salario'
                onChangeText={handleChange('salario')}
                onBlur={handleBlur('salario')}
                value={values.salario}
                error={errors.salario ? true : false}
                render={props =>
                  <TextInputMask
                    {...props}
                    type={'money'}
                    options={{
                      precision: 2,
                      separator: ',',
                      delimiter: '.',
                      unit: 'R$',
                      suffixUnit: ''
                    }}
                  />
                }
              />

              {touched.salario && errors.salario && (
                <Text style={{ color: GlobalValues.mainColor, textAlign: 'center' }}>{errors.salario}</Text>
              )}

              {editingItem ? (
                <TextInput
                  style={FuncionarioStyle.input}
                  outlineColor={GlobalValues.mainColor}
                  activeOutlineColor={GlobalValues.thirdColor}
                  textColor={GlobalValues.thirdColor}
                  mode='outlined'
                  label='Id'
                  disabled={true}
                  onChangeText={handleChange('id')}
                  onBlur={handleBlur('id')}
                  value={values.id}
                  error={errors.id ? true : false}
                />
              ) : null}

            </View>

            <View style={{ marginTop: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
              <TouchableOpacity style={FuncionarioStyle.botao} onPress={() => confirmDelete()}>
                <Text style={FuncionarioStyle.textBotao}>Listar Funcionarios</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <TouchableOpacity style={FuncionarioStyle.botao} onPress={() => navigation.goBack()}><Text style={FuncionarioStyle.textBotao}>Voltar</Text></TouchableOpacity>
                <TouchableOpacity style={FuncionarioStyle.botao} onPress={handleSubmit}><Text style={FuncionarioStyle.textBotao}>Enviar</Text></TouchableOpacity>
              </View>

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
            data={funcionarios}
            renderItem={({ item }) => (
              <Card mode='outlined' key={item.id}>
                <Card.Title
                  title={item.nome + ' ' + item.sobreNome}
                  right={(props) => (
                    <Menu visible={menuVisible[item.id]} onDismiss={closeMenu} anchor={<IconButton {...props} icon="dots-vertical" onPress={() => openMenu(item.id)} />} >
                      <Menu.Item onPress={() => handleExcliuirFuncionarios(item)} title="Excluir" />
                      <Menu.Item onPress={() => editarFuncionario(item)} title="Editar" />

                      {/* Adicione mais opções de menu aqui... */}
                    </Menu>
                  )}
                />
                <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Text variant="bodyMedium">Celular:</Text>
                    <Text variant="bodyMedium">CPF:</Text>
                    <Text variant="bodyMedium">Salario:</Text>
                  </View>

                  <View>
                    <Text variant="bodyMedium">{item.celular}</Text>
                    <Text variant="bodyMedium">{item.cpf}</Text>
                    <Text variant="bodyMedium">{item.salario}</Text>
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

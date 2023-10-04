import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../services/Api'
import { Card, Text, Divider } from 'react-native-paper'

export default function TestRestaurante(props) {
  const [restaurante, setRestaurante] = useState([])
  const [pratos, setPratos] = useState([])
  const [bebidas, setBebidas] = useState([])

  const idUser = props.route.params

  useEffect(() => {

    Api.get('/food/restaurantes/' + idUser).then(resultado => {
      setRestaurante(resultado.data)
    }).catch(error => {
      console.log('DEU ERRO NA CHAMADA DE RESTAURANTES:', error)
    })

  }, [])

  useEffect(() => {

    Api.get('/food/pratos?restaurante_id=' + idUser).then(resultado => {
      setPratos(resultado.data)
    })

  }, [])

  useEffect(() => {

    Api.get('/food/bebidas?restaurante_id=' + idUser).then(resultado => {
      setBebidas(resultado.data)
    })

  }, [])

  return (
    <ScrollView style={styles.Global}>
      <Text style={styles.Title}>Restaurante</Text>
      <Card style={styles.Inside}>
        <Card.Title title={restaurante.nome} titleVariant='titleLarge' subtitle={restaurante.descricao} />
        <Card.Cover source={{ uri: restaurante.imagem }} />
        <View style={styles.Test}>
          <View style={styles.Igual}>
            <Text variant='bodyMedium' style={{fontWeight: 'bold', fontSize: 20}}>Nome:</Text>
            <Text variant='bodyMedium'>{restaurante.nome}</Text>
          </View>
          <View style={styles.Igual}>
            <Text variant='bodyMedium' style={{fontWeight: 'bold', fontSize: 20}}>Tipo de Cozinha:</Text>
            <Text variant='bodyMedium'>{restaurante.tipo_cozinha}</Text>
          </View>
          <View style={styles.Test}>
            <Text variant='bodyMedium' style={{fontWeight: 'bold', fontSize: 20}}>Endereço:</Text>
            <Text variant='bodyMedium'>{restaurante.endereco}</Text>
          </View>
          <View style={styles.Test}>
            <Text variant='bodyMedium' style={{fontWeight: 'bold', fontSize: 20}}>Horário de Funcionamento:</Text>
            <Text variant='bodyMedium'>{restaurante.horario_funcionamento}</Text>
          </View>
        </View>
      </Card>

      <Text style={styles.Title}>Cardápio</Text>
      <Card style={styles.Inside}>
        <Text style={{ textAlign: 'center', fontSize: 30, marginVertical: 10 }}>Pratos</Text>
        <View style={styles.Test}>
          <View style={styles.Igual}>
            <FlatList style={styles.peopleList}
              data={pratos}
              renderItem={({ item }) =>
                <>
                  <View style={styles.Igual}>
                    <Text variant='bodyMedium' style={{fontWeight: 'bold', fontSize: 20}}>{item.nome}</Text>
                    <Text variant='bodyMedium'>R$: {item.preco}</Text>
                  </View>
                </>}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
        <Divider style={styles.divider} />
        <Text style={{ textAlign: 'center', fontSize: 30, marginVertical: 10 }}>Bebidas</Text>
        <View style={styles.Test}>
          <View style={styles.Igual}>
            <FlatList style={styles.peopleList}
              data={bebidas}
              renderItem={({ item }) =>
                <>
                  <View style={[styles.Igual,]}>
                    <Text variant='bodyMedium' style={{fontWeight: 'bold', fontSize: 20}}>{item.nome}</Text>
                    <Text variant='bodyMedium'>R$: {item.preco}</Text>
                  </View>
                </>}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Global: { paddingHorizontal: 10 },

  Inside: { paddingHorizontal: 10, paddingBottom: 10, borderWidth: 2},

  divider: { marginVertical: 10 },

  Test: { gap: 10 },

  Title: {
    fontSize: 30, textAlign: 'center', fontWeight: 'bold',
    marginVertical: 10,
  },

  Igual: { marginTop: 10, gap: 10, flexDirection: 'row', justifyContent: 'space-between' },

  Igual2: { fontSize: 20 },

  TextInside: { fontSize: 20, fontWeight: '500', },

  TextInsideB: { fontSize: 20, fontWeight: '300', },

})
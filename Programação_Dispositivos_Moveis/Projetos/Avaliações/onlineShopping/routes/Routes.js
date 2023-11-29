import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ProductPage from '../screens/ProdutPage';
import GlobalValues from '../styles/Global';
import { Badge, IconButton, Text } from 'react-native-paper';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carrinho from '../screens/Carrinho';
import { useNavigation } from '@react-navigation/native';
import InputTwoSteps from '../screens/InputTwoSteps';
import StartScreen from '../screens/StartScreen';

const Stack = createStackNavigator();

export function CustonIndicator() {
    const navigation = useNavigation()

    const [cash, setCash] = useState([])
    const [cashIndicator, setCashIndicator] = useState(0)

    async function loadCash() {
        const response = await AsyncStorage.getItem('addProdutos')
        const cashStorage = response ? JSON.parse(response) : []
        setCash(cashStorage)
    }

    useEffect(() => {
        loadCash()
    }, [])

    useEffect(() => {
        setCashIndicator(cash.length)
    }, [cash])

    return (

        <View>
            <Badge style={{ position: 'absolute', backgroundColor: GlobalValues.thirdColor, color: GlobalValues.secondaryColor }}>{cashIndicator}</Badge>
            <IconButton style={{ position: 'relative' }} icon='cart-plus' size={20} iconColor={GlobalValues.mainColor} onPress={() => navigation.navigate('Cart')}/>
        </View>

    )

}

export default function Routes() {
    const navigation = useNavigation()

    return (
        <Stack.Navigator initialRouteName='Start' screenOptions={{ headerLeftLabelVisible: null, headerTintColor: GlobalValues.mainColor }}>
            <Stack.Screen name="Home" component={Home} options={{
                headerRight: () => {
                    return (
                        <IconButton icon='cart-plus' size={20} iconColor={GlobalValues.mainColor} onPress={() => navigation.navigate('Cart')}/>
                    )
                }
            }}/>

            <Stack.Screen name="productPage" component={ProductPage} options={{
                headerRight: () => (
                    <CustonIndicator />
                ),
            }} />

            <Stack.Screen name="Cart" component={Carrinho} />

            <Stack.Screen name="Shopping" component={InputTwoSteps} />

            <Stack.Screen name="Start" component={StartScreen} options={{headerShown: false}}/>

            {/* <Stack.Screen name="Cart" component={Carrinho} /> */}
        </Stack.Navigator>
    )
}

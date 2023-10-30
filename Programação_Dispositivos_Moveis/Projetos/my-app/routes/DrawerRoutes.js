
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Carros from '../screen/Carros/Carros'
import Test from '../screen/Carros/Test'
import StackAlunos from '../components/ExeAlunos/StackAlunos'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='StackAlunos'>
            <Drawer.Screen name="Carros" component={Carros} />
            <Drawer.Screen name="Test" component={Test} />
            <Drawer.Screen name="StackAlunos" component={StackAlunos} />
        </Drawer.Navigator>

    )
}
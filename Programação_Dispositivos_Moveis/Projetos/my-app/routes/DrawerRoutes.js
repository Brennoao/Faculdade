
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Carros from '../screen/Carros/Carros'
import Test from '../screen/Carros/Test'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Carros'>
            <Drawer.Screen name="Carros" component={Carros} />
            <Drawer.Screen name="Test" component={Test} />
        </Drawer.Navigator>

    )
}
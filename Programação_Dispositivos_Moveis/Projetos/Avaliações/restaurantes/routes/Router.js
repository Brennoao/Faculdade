import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurantes from '../pages/Restaurantes';
import Restaurante from '../pages/TestRestaurante';

const Stack = createStackNavigator();

export default function Router(props) {

    console.log(props)
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>

                <Stack.Screen name='Home' component={Restaurantes} />

                <Stack.Screen name='id' component={Restaurante} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
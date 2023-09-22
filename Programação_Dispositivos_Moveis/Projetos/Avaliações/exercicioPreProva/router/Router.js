import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from '../pages/StartPage';
import Usuarios from '../pages/Usuarios';
import Users from '../pages/Users';

const Stack = createStackNavigator();

export default function Router(props) {

    console.log(props)
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='posts'>

                <Stack.Screen name='posts' component={StartPage} />

                <Stack.Screen name='usuario' component={Usuarios} />

                <Stack.Screen name='users' component={Users} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
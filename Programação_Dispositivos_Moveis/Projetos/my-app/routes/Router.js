import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/home/Home';
import Feed from '../screen/feed/Feed';

const Stack = createStackNavigator();

export default function Router(props) {

    console.log(props)
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>

                <Stack.Screen name='Home' component={Home} />

                <Stack.Screen name='Feed' component={Feed} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
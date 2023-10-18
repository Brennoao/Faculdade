import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/home/Home';
import Posts from '../screen/posts/posts';
import DrawerRoutes from './DrawerRoutes';




// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Router(props) {

    console.log(props)

    return (
        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName='Home'>

                <Stack.Screen name='Home' component={Home} />

                <Stack.Screen name='Feed' component={Feed} />

            </Stack.Navigator> */}
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Posts" component={Posts} />
                <Tab.Screen name="Carros" component={DrawerRoutes} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
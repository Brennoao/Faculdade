import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from '../components/CustomTabBar'
import Routes from "./Routes";
import Funcionarios from "../screens/Funcionarios";
import Carrinho from "../screens/Carrinho";

const Tab = createBottomTabNavigator();

export function MenuRouter() {
    return (
        <Tab.Navigator initialRouteName='Store' screenOptions={{ tabBarHideOnKeyboard: true, tabBarShowLabel: false, tabBarActiveTintColor: "#121212", tabBarStyle: { borderTopWidth: 0, backgroundColor: "#FFF" }}} tabBar={(props) => <CustomTabBar {...props} />} >
            <Tab.Screen name="Store" component={Routes} options={{ tabBarIcon: "store", headerShown: false }} />
            <Tab.Screen name="Funcionarios" component={Funcionarios} options={{ tabBarIcon: "person" }} />
            <Tab.Screen name="CartList" component={Carrinho} options={{ tabBarIcon: "shopping-cart" }} />
        </Tab.Navigator>
    )
}
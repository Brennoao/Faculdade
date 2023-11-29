import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import GlobalValues from '../styles/Global';
import CustomTabBarStyle from '../styles/CustomTabBarStyle';

export default function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View style={CustomTabBarStyle.container}>

            <View style={CustomTabBarStyle.insideContainer}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true, });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => { navigation.emit({ type: 'tabLongPress', target: route.key, }); };

                    return (
                        <TouchableOpacity accessibilityRole="button" accessibilityState={isFocused ? { selected: true } : {}} accessibilityLabel={options.tabBarAccessibilityLabel} testID={options.tabBarTestID} onPress={onPress} onLongPress={onLongPress} style={CustomTabBarStyle.buttonTab} >
                            <View style={{ alignItems: 'center', padding: GlobalValues.borderWidth }}>
                                <View style={[CustomTabBarStyle.insideButton, { backgroundColor: isFocused ? GlobalValues.secondaryColor : GlobalValues.transparent }]}>
                                    <MaterialIcons name={options.tabBarIcon} size={30} color={isFocused ? GlobalValues.mainColor : GlobalValues.fifthColor} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}

            </View>
        </View>
    )
}
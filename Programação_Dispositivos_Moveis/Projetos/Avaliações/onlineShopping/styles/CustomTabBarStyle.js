import { StyleSheet } from "react-native";
import GlobalValues from "./Global";

const CustomTabBarStyle = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center' },

    insideContainer: {
        borderRadius: GlobalValues.mainRadius, borderWidth: 1, borderColor: GlobalValues.secondaryColor,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        marginBottom: 25,
        position: "absolute",
        bottom: 0,
        backgroundColor: GlobalValues.mainColor,
        shadowColor: GlobalValues.mainColor, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3.80
    },

    buttonTab: { justifyContent: 'center', alignItems: 'center' },

    insideButton: {
        padding: 8,
        borderRadius: GlobalValues.secondaryRadius
    }
})

export default CustomTabBarStyle
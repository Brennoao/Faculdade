import { StyleSheet } from "react-native";
import GlobalValues from "./Global";

const CarrinhoStyle = StyleSheet.create({
    Container: {
        alignItems: 'flex-end',
        gap: 10
    },

    Button: {
        width: 100,
        alignItems: 'center',
        backgroundColor: GlobalValues.thirdColor,
        padding: GlobalValues.mainSpacing,
        borderRadius: GlobalValues.mainRadius
    },

    buttonText: {
        color: GlobalValues.secondaryColor, fontWeight: 'bold'
    }
})

export default CarrinhoStyle
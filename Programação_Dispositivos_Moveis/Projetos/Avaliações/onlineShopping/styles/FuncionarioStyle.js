import { StyleSheet } from "react-native"
import GlobalValues from "./Global"

const FuncionarioStyle = StyleSheet.create({
    botao: {
        borderWidth: GlobalValues.borderWidth, borderRadius: GlobalValues.mainRadius, borderColor: GlobalValues.mainColor,
        padding: GlobalValues.mainSpacing
    },

    textBotao: {
        color: GlobalValues.mainColor, fontSize: 15
    },

    Modal: {
        backgroundColor: 'white',
        padding: 20, margin: GlobalValues.mainSpacing,
        borderRadius: GlobalValues.mainRadius
    },

    input: {
        backgroundColor: 'transparent'
    }
})

export default FuncionarioStyle
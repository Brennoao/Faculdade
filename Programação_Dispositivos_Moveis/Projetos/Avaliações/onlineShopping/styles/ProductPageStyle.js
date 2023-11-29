import { StyleSheet } from "react-native"
import GlobalValues from "./Global"

const ProductPageStyle = StyleSheet.create({
    Container: {
        // flex: 1,
        padding: GlobalValues.mainSpacing,
    },

    Flat: {
        width: '100%',
        padding: 5,
        borderWidth: GlobalValues.borderWidth, borderColor: GlobalValues.mainColor, borderRadius: 15
    },

    flatContainer: { gap: 20 },

    Infos: {
        marginTop: GlobalValues.mainSpacing,
        backgroundColor: GlobalValues.mainColor,
        borderRadius: GlobalValues.mainRadius
    },

    infosContainer: {
        flexDirection: 'row', justifyContent: 'space-between',
        padding: GlobalValues.mainSpacing,
    },

    infosText: { fontWeight: 'bold', letterSpacing: 1, }, infosTExtCategory: { color: GlobalValues.fourthColor },

    Botão: {
        backgroundColor: GlobalValues.thirdColor,
        padding: GlobalValues.mainSpacing,
        borderRadius: GlobalValues.mainRadius
    },

    Cash: {
        width: '100%',
        justifyContent: 'space-between', flexDirection: 'row',
        marginTop: GlobalValues.mainSpacing
    }
})

export default ProductPageStyle
import { StyleSheet } from "react-native";
import GlobalValues from "../../styles/Global";

const Style = StyleSheet.create({
    outsideImage: {
        borderWidth: 2, borderRadius: 10, borderColor: GlobalValues.mainColor,
        marginBottom: GlobalValues.mainSpacing,
    },

    Image: {
        width: 176,
        height: 100,
        resizeMode: 'cover',
        borderTopStartRadius: 8, borderStartEndRadius: 8,
    },


    outsideInsideImage: {
        backgroundColor: GlobalValues.transparent,
        width: 176,
        height: 80,
        justifyContent: 'space-between',
        borderBottomLeftRadius: 8, borderBottomRightRadius: 8,
    },

    Price: {
        width: '100%',
        backgroundColor: GlobalValues.mainColor,
        borderBottomLeftRadius: 7, borderBottomRightRadius: 7
    }

})

export default Style
import { StyleSheet } from "react-native";
import GlobalValues from "./Global";

const HomeStyle = StyleSheet.create({
    container: {
        padding: GlobalValues.mainSpacing
    },

    mainText: {
        color: GlobalValues.mainColor,
        fontSize: 20
    }
})

export default HomeStyle
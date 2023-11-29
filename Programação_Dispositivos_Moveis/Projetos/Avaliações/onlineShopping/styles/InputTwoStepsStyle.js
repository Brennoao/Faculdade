import { StyleSheet } from "react-native";
import GlobalValues from "./Global";

const InputTwoStepsStyle = StyleSheet.create({
    Button: {
        flexDirection: 'row', justifyContent: 'space-between', gap: GlobalValues.mainSpacing,
        borderColor: GlobalValues.mainColor
    },

    insideButtons: {
        padding: GlobalValues.mainSpacing,
        borderColor: GlobalValues.mainColor, borderWidth: GlobalValues.borderWidth, borderRadius: GlobalValues.mainRadius
    },

    insideTextButtons: {
        color: 'white'
    }
})

export default InputTwoStepsStyle
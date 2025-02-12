import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#009240",
        paddingHorizontal: 12,
        paddingTop: 15,
        flexDirection: "column",
    },
    containerText: {
        flexDirection: "row",
        marginTop: 26,
        gap: 3,
    },
    passo: {
        color: colors.gray[100],
        fontSize: 14,
        fontWeight: "500",

    },
    text: {
        color: colors.gray[100],
        fontSize: 14,
        fontWeight: "500",
        width: screenWidth * 0.78

    },
    textCaixaAlta: {
        color: colors.gray[100],
        fontSize: 13,
        fontWeight: "800",
    }
})
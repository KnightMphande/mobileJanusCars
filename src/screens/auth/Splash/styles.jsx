import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        height: '100%'
    },

    image: {
        width: '100%',
        height: 200
    },

    containerTitle: {
        marginVertical: 44
    },
    
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.default
    },

    highlight: {
        fontSize: 28,
        fontWeight: '700',
        color: colors.mediumGreen
    },
});

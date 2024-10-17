import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mediumGreen,
        padding: 12,
        borderRadius: 8,
        marginTop: 15,
        width: '100%'
    },

    title: {
        color: colors.light,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    }
})
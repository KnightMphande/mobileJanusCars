import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    image: {
        width: 36,
        height: 36
    },
    title: {
        color: colors.mediumGreen,
        fontSize: 26,
        fontWeight: '500',
        paddingHorizontal: 16
    }
})
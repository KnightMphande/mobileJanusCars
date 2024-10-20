import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },

    backNavContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },

    image: {
        width: 36,
        height: 36
    },

    title: {
        color: colors.mediumGreen,
        fontSize: 26,
        fontWeight: '500',
    },

    signoutContainer: {
        backgroundColor: colors.red, 
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signoutText: {
        color: colors.light, 
        fontSize: 16,
        fontWeight: 'bold',
    },
})
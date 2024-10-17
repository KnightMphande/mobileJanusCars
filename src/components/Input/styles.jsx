import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },

    label: {
        marginBottom: 6,
        color: colors.default,
        fontWeight: '400'
    },

    inputContainer: {
        borderWidth: 1,
        borderColor: colors.mediumGreen,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        color: colors.default,
        flex: 1
    },

    showOrHideBtn: {
        width: 40
    },

    btnTitle: {
        color: colors.dakGreen,
        fontWeight: '500'
    }
})
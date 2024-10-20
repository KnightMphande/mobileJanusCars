import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 8
    },
    imagePicker: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    imagePickerText: {
        color: 'white',
    },
    imagePreview: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    },

    modalActionBtn: {
        maxWidth: 80,
        backgroundColor: colors.mediumGreen,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 8
    },

    btnText: {
        color: colors.light
    },

    redBtn: {
        backgroundColor: colors.red
    }
});
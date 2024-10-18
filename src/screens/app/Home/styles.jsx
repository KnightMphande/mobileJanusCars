import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20
    },

    list: {
        marginTop: 20,
        flexDirection: 'row'
    },
    categoryBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        padding: 4,
        borderRadius: 8,
        marginBottom: 10
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
})
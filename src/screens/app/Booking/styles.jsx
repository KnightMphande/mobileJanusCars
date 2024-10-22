import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
      },
      bookingCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        borderColor: '#ddd',
        borderWidth: 1,
      },
      bookingImage: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        marginBottom: 10,
      },
      bookingDetails: {
        flexDirection: 'column',
      },
      titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      detailText: {
        fontSize: 14,
        marginBottom: 4,
        color: '#333',
      },

      bold: {
        fontWeight: '600',
      },

      buttonContainer: {
        marginTop: 10,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
      },
      modalDetailText: {
        fontSize: 16,
        marginBottom: 10,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        width: '100%',
      },

      updateButton: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
      },

      closeButton: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
      },
      
      buttonText: {
        color: "white",
        fontWeight: "bold",
      },
})
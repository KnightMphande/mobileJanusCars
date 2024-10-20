import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    marginTop: 16,
  },
  bookingCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 16,
  },
  bookingInfo: {
    flex: 1,
  },
  vehicleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: '#757575',
  },
  buttonContainer: {
    marginTop: 8,
  },
  cancelButton: {
    backgroundColor: '#e63946',
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderRadius: 8,
    maxWidth: 120
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'flex-end',
  },
  vehicleImage: {
    width: 100,
    height: 80,
    borderRadius: 8,
  },
  statusText: {
    marginTop: 8,
    color: '#757575',
    fontWeight: 'medium',
  },
});

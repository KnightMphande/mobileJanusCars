import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, Linking } from 'react-native';
import { styles } from './styles';
import { removeTimeFromTimestamp } from '../../utils/helpers';

const BookingHistory = ({ bookingHistory }) => {

  // Handle invoice generation
  const handleGenerateInvoice = async (bookingId) => {
    try {
      const response = await fetch(`/api/invoice/generate/${bookingId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();

      if (!data.success) {
        Alert.alert('Error', data.error);
        return;
      }

      if (data.success) {
        // Construct the URL for the served invoice
        const invoiceUrl = `http://10.242.154.96:5000/invoices/invoice_${bookingId}.pdf`;

        Alert.alert('Success', data.message, [{ text: 'OK', onPress: () => Linking.openURL(invoiceUrl) }]);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to generate invoice');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {bookingHistory?.length === 0
          ? "Booking history is empty"
          : "Booking History:"}
      </Text>
      <View style={styles.listContainer}>
        {bookingHistory?.map((booking) => (
          <View key={booking?.booking_id} style={styles.bookingCard}>
            <View style={styles.bookingInfo}>
              <Text style={styles.vehicleTitle}>
                {booking?.vehicleDetails?.make} {booking?.vehicleDetails?.model}
              </Text>
              <Text style={styles.text}>
                Year: {booking?.vehicleDetails?.year}
              </Text>
              <Text style={styles.text}>
                Check Out: {removeTimeFromTimestamp(booking?.check_out)}
              </Text>
              <Text style={styles.text}>
                Check In: {removeTimeFromTimestamp(booking?.check_in)}
              </Text>

              {booking?.status === "completed" && (
                <TouchableOpacity
                  onPress={() => handleGenerateInvoice(booking?.booking_id)}
                  style={styles.invoiceButton}
                >
                  <Text style={styles.buttonText}>Download Invoice</Text>
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.imageContainer}>
              <Image
                style={styles.vehicleImage}
                source={{ uri: `http://10.242.154.96:5000/image/${booking?.vehicle_id}/${booking?.vehicleDetails?.filename}` }}
                alt={`${booking?.vehicleDetails?.make} ${booking?.vehicleDetails?.model}`}
              />
              {booking?.status === "cancelled" && (
                <Text style={styles.cancelledText}>{booking?.status}</Text>
              )}
              {booking?.status === "completed" && (
                <Text style={styles.completedText}>{booking?.status}</Text>
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};


export default BookingHistory;
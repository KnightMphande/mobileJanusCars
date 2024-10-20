import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { removeTimeFromTimestamp } from '../../utils/helpers';
import { styles } from './styles';

const CurrentBookings = ({ currentBookings, cancelBooking }) => {

    const handleCancelBooking = (bookingId) => {
        Alert.alert(
            'Confirm Cancellation',
            'Are you sure you want to cancel this booking?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => cancelBooking(bookingId),
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{currentBookings?.length === 0 ? 'Current bookings is empty' : 'Current Bookings:'}</Text>
            <View style={styles.listContainer}>
                {currentBookings?.map((booking) => (
                    <View key={booking.booking_id} style={styles.bookingCard}>
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

                            <View style={styles.buttonContainer}>
                                {(booking?.status === "confirmed" ||
                                    booking?.status === "in-progress" ||
                                    booking?.status === "cancelled") &&
                                    booking?.status !== "rented" && (
                                        <TouchableOpacity
                                            onPress={() => handleCancelBooking(booking?.booking_id)}
                                            style={styles.cancelButton}
                                        >
                                            <Text style={styles.buttonText}>Cancel Booking</Text>
                                        </TouchableOpacity>
                                    )}
                            </View>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.vehicleImage}
                                source={{ uri: `http://10.242.154.96:5000/image/${booking?.vehicle_id}/${booking?.vehicleDetails?.filename}` }}
                                onError={(error) => console.log('Image Load Error', error.nativeEvent.error)} // Log errors if image fails to load
                                alt={`${booking?.vehicleDetails?.make} ${booking?.vehicleDetails?.model}`}
                            />

                            <Text style={styles.statusText}>
                                {booking?.status === "rented" ? "Vehicle" : "Booking"} {booking?.status}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default CurrentBookings;

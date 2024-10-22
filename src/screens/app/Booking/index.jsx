import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { launchImageLibrary } from "react-native-image-picker"; // for file upload
import { Checkbox } from "react-native-paper"; // for checkbox
import AppHeader from "../../../components/AppHeader";
import { removeTimeFromTimestamp } from "../../../utils/helpers";
import { styles } from "./styles";

export default function Bookings({ navigation }) {
  const [bookings, setBookings] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [updatedAmount, setUpdatedAmount] = useState("");
  const [chargeAdditional, setChargeAdditional] = useState(false);
  const [additionalPrice, setAdditionalPrice] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`http://10.0.0.191:5000/api/booking`);
      const data = response.data;

      console.log(data);
      
      setBookings(data.bookings);
    } catch (error) {
      console.error("Failed to fetch bookings data:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleUpdateBooking = (booking) => {
    setSelectedBooking(booking);
    setUpdatedAmount(booking.amount);
    setModalVisible(true);
  };

  const handleFileUpload = () => {
    launchImageLibrary({}, (response) => {
      if (response.assets) {
        const uri = response.assets[0].uri;
        setPreviewUrl(uri);
        setFile(response);
      }
    });
  };

  const clearImagePreview = () => {
    setPreviewUrl(null);
    setFile(null);
  };

  const saveUpdatedBooking = async () => {
    try {
      const dataToUpdate = {
        amount: updatedAmount,
        ...(chargeAdditional && { additionalPrice }), // Include additional price if checkbox is checked
        file, // Include file if selected
      };

      const response = await axios.put(
        `http://10.0.0.191:5000/api/booking/${selectedBooking.booking_id}`,
        dataToUpdate
      );

      if (response.data.success) {
        fetchBookings();
        setModalVisible(false);
      }
    } catch (error) {
      console.error("Failed to update booking:", error);
    }
  };

  const handleSignout = () => {
    navigation.navigate("Splash");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <AppHeader title="Employee" handleSignout={handleSignout} />
            {bookings.map((booking) => (
              <View key={booking.booking_id} style={styles.bookingCard}>
                <Image
                  source={{
                    uri: `http://10.242.154.96:5000/image/${booking?.vehicle_id}/${booking.filename}`,
                  }}
                  style={styles.bookingImage}
                />
                <View style={styles.bookingDetails}>
                  <Text style={styles.titleText}>
                    <Text style={styles.bold}>Vehicle:</Text> {booking.make}{" "}
                    {booking.model} ({booking.year})
                  </Text>
                  <Text style={styles.detailText}>
                    <Text style={styles.bold}>Amount: </Text>
                    {booking.amount}
                  </Text>
                  <Text style={styles.detailText}>
                    <Text style={styles.bold}>Category: </Text>
                    {booking.category}
                  </Text>
                  <Text style={styles.detailText}>
                    <Text style={styles.bold}>Check-in: </Text>
                    {removeTimeFromTimestamp(booking.check_in)}
                  </Text>
                  <Text style={styles.detailText}>
                    <Text style={styles.bold}>Check-out:</Text>{" "}
                    {removeTimeFromTimestamp(booking.check_out)}
                  </Text>
                  <Text style={styles.detailText}>
                    <Text style={styles.bold}>Pick-up location: </Text>
                    {booking.pick_up_location}
                  </Text>
                  <Text style={styles.detailText}>
                    <Text style={styles.bold}>Drop-off location: </Text>
                    {booking.drop_off_location}
                  </Text>
                  <Text style={styles.detailText}>
                    <Text style={styles.bold}>Total days: </Text>
                    {booking.total_days}
                  </Text>
                  <Text style={styles.detailText}>
                    <Text style={styles.bold}>Status: </Text>
                    {booking.status}
                  </Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.updateButton}
                      onPress={() => handleUpdateBooking(booking)}
                    >
                      <Text style={styles.buttonText}>Update Booking</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(!modalVisible)}
            >
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Update Booking</Text>
                {selectedBooking && (
                  <>
                    <Text style={styles.modalDetailText}>
                      Vehicle: {selectedBooking.make} {selectedBooking.model}
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={updatedAmount}
                      onChangeText={setUpdatedAmount}
                      placeholder="Update Amount"
                    />

                    {/* Checkbox for Additional Price */}
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <Checkbox
                        status={chargeAdditional ? "checked" : "unchecked"}
                        onPress={() => setChargeAdditional(!chargeAdditional)}
                      />
                      <Text>Charge additional price</Text>
                    </View>

                    {chargeAdditional && (
                      <TextInput
                        style={styles.input}
                        value={additionalPrice}
                        onChangeText={setAdditionalPrice}
                        placeholder="Enter Additional Price"
                      />
                    )}

                    {/* File Upload Section */}
                    {previewUrl ? (
                      <View style={{ marginVertical: 10 }}>
                        <Image
                          source={{ uri: previewUrl }}
                          style={{ width: 100, height: 100 }}
                        />
                        <TouchableOpacity onPress={clearImagePreview}>
                          <Text style={{ color: "red" }}>Remove Image</Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <TouchableOpacity
                        onPress={handleFileUpload}
                        style={{ marginVertical: 10 }}
                      >
                        <Text style={{ color: "blue" }}>
                          Upload a picture of the damaged vehicle
                        </Text>
                      </TouchableOpacity>
                    )}

                    <TouchableOpacity
                      style={styles.updateButton}
                      onPress={saveUpdatedBooking}
                    >
                      <Text style={styles.buttonText}>Save Changes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.closeButton}
                      onPress={() => setModalVisible(false)}
                    >
                      <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </Modal>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

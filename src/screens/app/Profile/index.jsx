import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import AppHeader from '../../../components/AppHeader';
import axios from "axios";
import { styles } from './styles';
import { UserContext } from '../../../../App';
import Button from '../../../components/Button';
import { removeTimeFromTimestamp } from '../../../utils/helpers';
import BookingHistory from '../../../components/BookingHistory';
import CurrentBookings from '../../../components/CurrentBookings';
import UpdateProfileModal from '../../../components/UpdateProfile';

export default function Profile({ navigation }) {
    // Get user and setUser from context
    const { user, setUser } = useContext(UserContext);
    const [profile, setProfile] = useState({});
    const [userData, setUserData] = useState({});
    const [currentBookings, setCurrentBookings] = useState([]);
    const [bookingHistory, setBookingHistory] = useState([]);
    const [driversLicense, setDriversLicense] = useState({});
    const [activeTab, setActiveTab] = useState('driversLicense');
    const [modalVisible, setModalVisible] = useState(false);

    const fetchProfile = async () => {
        try {
            const response = await axios.get(`http://10.0.0.191:5000/api/profile/${user?.customer_id}`);
            const data = response.data;
            const profileData = data.profile;

            setUserData(profileData.user);
            setCurrentBookings(profileData.currentBookings);
            setBookingHistory(profileData.bookingHistory);
            setDriversLicense(profileData.driversLicense);
        } catch (error) {
            console.error('Failed to fetch profile data:', error);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleSignout = () => {
        navigation.navigate('Splash');
    };

    // Cancel Booking
    const cancelBooking = async (id) => {
        try {
            const response = await fetch(`http://10.0.0.191:5000/api/booking/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (!result.success) {
                // Show error alert if the cancellation is unsuccessful
                Alert.alert(
                    'Cancellation Failed',
                    result.error,
                    [{ text: 'OK' }]
                );
                return;
            }

            fetchProfile();

            Alert.alert(
                'Cancellation Successful',
                result.message,
                [{ text: 'OK' }]
            );
        } catch (error) {
            console.log(error);
            Alert.alert(
                'Error',
                'An unexpected error occurred. Please try again later.',
                [{ text: 'OK' }]
            );
        }
    };

    // Handle profile update
    const handleUpdate = (data) => {
        // Handle the updated profile data here (e.g., send to an API)
        console.log('Updated Profile:', data);
    };

    const urlLogo =
        userData?.logo_url === null
            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdIVSqaMsmZyDbr9mDPk06Nss404fosHjLg&s"
            : `http://10.0.0.191:5000/profile/${user.customer_id}/${user?.logo_url}`;

    return (
        <View style={styles.container}>
            <AppHeader title="Profile" handleSignout={handleSignout} />
            {
                user && <Image source={{ uri: urlLogo }} style={styles.profileImage} />
            }

            <Text style={styles.title}>
                <Text style={styles.titleText}>Names: </Text>{userData?.names}
            </Text>
            <Text style={styles.title}>
                <Text style={styles.titleText}>Phone: </Text>{userData?.phone}
            </Text>
            <Text style={styles.title}>
                <Text style={styles.titleText}>Email: </Text>{userData?.email}
            </Text>


            <Button title="Update profile" onPress={() => setModalVisible(true)} />
            <UpdateProfileModal isVisible={modalVisible}
                onClose={() => setModalVisible(false)}
                userData={userData}
                onUpdate={handleUpdate} />

            {/* Tab Navigation */}
            <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => setActiveTab('driversLicense')} style={activeTab === 'driversLicense' ? styles.activeTab : styles.inactiveTab}>
                    <Text style={styles.tabText}>Driver's License</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('currentBookings')} style={activeTab === 'currentBookings' ? styles.activeTab : styles.inactiveTab}>
                    <Text style={styles.tabText}>Current Bookings</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('bookingHistory')} style={activeTab === 'bookingHistory' ? styles.activeTab : styles.inactiveTab}>
                    <Text style={styles.tabText}>History</Text>
                </TouchableOpacity>
            </View>

            {/* Render Content Based on Active Tab */}
            {activeTab === 'driversLicense' && (
                <View style={styles.tabContent}>
                    <Text style={styles.tabTitle}>Driver's License Details:</Text>

                    <View>
                        <Text style={[styles.title, styles.alignLeft]}>
                            <Text style={styles.titleText}>Names: </Text>{driversLicense?.license_number}
                        </Text>
                        <Text style={[styles.title, styles.alignLeft]}>
                            <Text style={styles.titleText}>Phone: </Text>{removeTimeFromTimestamp(driversLicense?.issue_date)}
                        </Text>
                        <Text style={[styles.title, styles.alignLeft]}>
                            <Text style={styles.titleText}>Email: </Text>{removeTimeFromTimestamp(driversLicense?.expiry_date)}
                        </Text>
                    </View>
                    <Text>{driversLicense?.details}</Text>
                </View>
            )}
            {activeTab === 'currentBookings' && (
                <View style={styles.tabContent}>
                    {/* Render current bookings */}

                    <CurrentBookings currentBookings={currentBookings} cancelBooking={cancelBooking} />

                </View>
            )}
            {activeTab === 'bookingHistory' && (
                <View style={styles.tabContent}>
                    {/* Render booking history */}

                    <BookingHistory bookingHistory={bookingHistory} />
                </View>
            )}
        </View>
    );
}

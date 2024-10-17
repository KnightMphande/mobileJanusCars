import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Signup({ navigation }) {

    const handleBackPress = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaProvider>
            <ScrollView>
                <View style={styles.container}>
                    <AuthHeader title="Signup" handleBackPress={handleBackPress} />
                    <Input label="First Name" placeholder="First Name" />
                    <Input label="Last Name" placeholder="Last Name" />
                    <Input label="Phone" placeholder="Phone Number" />
                    <Input label="Email" placeholder="example@gmail.com" />
                    <Input isPassword label="Password" placeholder="Password" />
                    <Input label="Street" placeholder="Street Address" />
                    <Input label="City" placeholder="City" />
                    <Input label="Province" placeholder="Province" />
                    <Input label="Zip Code" placeholder="Zip Code" />
                    <Input label="Country" placeholder="Country" />
                    <Input label="License Number" placeholder="License Number" />
                    <Input label="Issue Date" placeholder="Issue Date" type="date" />
                    <Input label="Expiry Date" placeholder="Expiry Date" type="date" />

                    <Button title="Signup" />

                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

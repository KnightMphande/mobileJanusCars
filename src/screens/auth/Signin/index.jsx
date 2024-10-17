import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Signin({ navigation }) {

    const handleBackPress = () => {
        navigation.goBack();
    }


    return (
        <SafeAreaProvider>
            <ScrollView>
                <View style={styles.container}>
                    <AuthHeader title="Signin" handleBackPress={handleBackPress} />

                    <Input label="Email" placeholder="example@gmail.com" />
                    <Input isPassword label="Password" placeholder="Password" />

                    <Button title="Signin" />

                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

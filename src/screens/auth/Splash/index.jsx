import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Splash({ navigation }) {

    const handleSignup = () => {
        navigation.navigate('Signup')        
    }

    const handleSignin = () => {
        navigation.navigate('Signin')        
    }

    return (
        <SafeAreaProvider>
                    <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/car_keys.png')} />

            <View style={styles.containerTitle}>
                <Text style={styles.title}>Okay, Let's</Text>
                <Text style={[styles.title, styles.highlight]}>Drive</Text>
            </View>

            <Button onPress={handleSignup} title="Signup" />
            <Button onPress={handleSignin} title="Signin" />
        </View>
        </SafeAreaProvider>
    );
}

import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";

export default function Signin() {


    return (
        <ScrollView>
            <View style={styles.container}>
            <AuthHeader title="Signin" />

            <Input label="Email" placeholder="example@gmail.com" />
            <Input isPassword label="Password" placeholder="Password" />

            <Button title="Signin" />

        </View>
        </ScrollView>
    );
}

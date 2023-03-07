import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { GlobalStyles } from "../constants/style";
import Input from "../ui/Input";
import { ScrollView } from "react-native-gesture-handler";
import PrimaryButton from "../ui/PrimaryButton";
import axios from "axios";
import TextButton from "../ui/TextButton";
import { useLoginMutation } from "../ApiServices/auth.services";
import { useDispatch, useSelector } from "react-redux";
import { addUser, authSelector } from "../redux/slices/auth.slice";

const SignInScreen = ({ navigation }) => {
    const [inputs, setInputs] = useState({ email: null, password: null });
    const [focused, setFocused] = useState("");

    //redux hooks
    const dispatch = useDispatch();
    const [loginUser, { data, isLoading }] = useLoginMutation();
    const { user } = useSelector(authSelector);

    const inputChangeHandler = (identifier, enteredText) => {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [identifier]: enteredText,
            };
        });
    };

    const signInHandler = async () => {
        const userInfo = {
            email: inputs.email,
            password: inputs.password,
        };
        let user = await loginUser(userInfo);
        if (user.error) {
            Alert.alert("Incorrect user credentials!");
            return;
        }
        //console.log(user);
        dispatch(addUser(user?.data ? user.data : user.error));
    };

    useEffect(() => {
        if (user?.accessToken) {
            navigation.replace("DrawerNavigator");
        }
    }, [user]);

    return (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/images/logo.png")}
                    style={styles.image}
                />
            </View>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subTitle}>
                Welcome Back to Cannabis Connecter
            </Text>
            <KeyboardAvoidingView
                behavior={Platform.OS === "android" ? "padding" : "height"}
                // behavior="padding"
                style={styles.inputContainer}
            >
                <Input
                    label="Email"
                    inputConfig={{
                        placeholder: "Enter your email",
                        onChangeText: inputChangeHandler.bind(this, "email"),
                    }}
                />
                <Input
                    label="Password"
                    inputConfig={{
                        placeholder: "Enter your password",
                        secureTextEntry: true,
                        onChangeText: inputChangeHandler.bind(this, "password"),
                    }}
                />
            </KeyboardAvoidingView>
            <PrimaryButton
                onPress={signInHandler}
                style={{ marginVertical: 16 }}
            >
                {isLoading ? "Signing in" : "Sign In"}
            </PrimaryButton>
            <View style={styles.signUpTextContainer}>
                <Text style={{ color: GlobalStyles.colors.gray300 }}>
                    Don't have an account?{" "}
                </Text>
                <TextButton onPress={() => navigation.navigate("SignUpScreen")}>
                    Sign Up
                </TextButton>
            </View>
        </ScrollView>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        // paddingBottom: 50,
        backgroundColor: "white",
    },
    imageContainer: {
        marginTop: 115,
        alignItems: "center",
    },
    image: {
        height: 107,
        width: 144,
    },
    title: {
        marginTop: 56,
        fontSize: 22,
        fontWeight: "600",
        color: GlobalStyles.colors.gray700,
    },
    subTitle: {
        fontSizeL: 16,
        color: GlobalStyles.colors.gray300,
        marginTop: 4,
        marginBottom: 32,
    },
    inputContainer: {
        flex: 1,
    },
    signUpTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
    },
});

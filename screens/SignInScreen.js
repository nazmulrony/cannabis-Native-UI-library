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
import {
    Button,
    Dialog,
    Portal,
    TextInput,
    TouchableRipple,
} from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const SignInScreen = ({ navigation }) => {
    const [inputs, setInputs] = useState({ email: null, password: null });
    const [showPassword, setShowPassword] = useState(false);

    //redux hooks
    const dispatch = useDispatch();
    const [loginUser, { data, isLoading }] = useLoginMutation();
    const { user } = useSelector(authSelector);
    const [showAlert, setShowAlert] = useState(false);
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
            // Alert.alert("Incorrect user credentials!");
            setShowAlert(true);

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
        <ScrollView
            style={styles.screen}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
        >
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
                <TextInput
                    style={{ fontSize: 14, backgroundColor: "white" }}
                    mode="outlined"
                    label="Email"
                    placeholder="Enter your email"
                    onChangeText={inputChangeHandler.bind(this, "email")}
                    // activeOutlineColor="red"
                    focu
                />
                <TextInput
                    style={{
                        fontSize: 14,
                        marginVertical: 16,
                        backgroundColor: "white",
                    }}
                    mode="outlined"
                    label="Password"
                    placeholder="Enter your password"
                    right={
                        <TextInput.Icon
                            icon={showPassword ? "eye" : "eye-off"}
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    }
                    onChangeText={inputChangeHandler.bind(this, "password")}
                    secureTextEntry={!showPassword}
                />
            </KeyboardAvoidingView>
            {/*this portion of code is for alert purpose */}
            <Portal>
                <Dialog
                    style={{ borderRadius: 8, backgroundColor: "white" }}
                    visible={showAlert}
                    onDismiss={() => setShowAlert(false)}
                >
                    <Dialog.Title style={{ fontSize: 18, marginBottom: 4 }}>
                        Incorrect user credentials!
                    </Dialog.Title>
                    <Dialog.Content>
                        <Text>
                            Please try again with correct user credentials.
                        </Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setShowAlert(false)}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

            <Button
                rippleColor="white"
                style={{ borderRadius: 8, marginTop: 12 }}
                mode="contained"
                loading={isLoading}
                onPress={signInHandler}
            >
                Sign In
            </Button>

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

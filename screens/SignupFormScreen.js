import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";

import Input from "../ui/Input";
import TextButton from "../ui/TextButton";
import PrimaryButton from "../ui/PrimaryButton";
import { GlobalStyles } from "../constants/style";

const SignupFormScreen = ({ navigation, route }) => {
    const { register, reset, handleSubmit, errors } = useForm();
    const onPressHandler = () => {
        navigation.navigate("DrawerNavigator");
    };
    return (
        <View style={styles.screen}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
            >
                <Text style={styles.title}>
                    Become a{" "}
                    {route.params?.userType ? route.params.userType : "Grower"}
                </Text>
                <Input label={"First Name*"} inputConfig={{}} />
                <Input label={"Last Name*"} inputConfig={{}} />
                <Input label={"Business Name*"} inputConfig={{}} />
                <Input label={"Contact Email*"} inputConfig={{}} />
                <Input label={"Contact Number*"} inputConfig={{}} />
                <Input label={"DBA"} inputConfig={{}} />
                <Input label={"License Type*"} inputConfig={{}} />
                <Input label={"License Number*"} inputConfig={{}} />
                <Input label={"State"} inputConfig={{}} />
                <Input label={"City"} inputConfig={{}} />
                <Input label={"ZIP Code"} inputConfig={{}} />
                <Input label={"Website"} inputConfig={{}} />
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginVertical: 8,
                    }}
                >
                    <Text style={styles.termsText}>
                        By proceeding, I agree to Cannabis Connector{" "}
                    </Text>
                    <TextButton style={{ fontSize: 12 }}>
                        Terms of Use
                    </TextButton>
                    <Text style={styles.termsText}>
                        and acknowledge that I have read the
                    </Text>
                    <TextButton style={{ fontSize: 12 }}>
                        Privacy Policy.
                    </TextButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton onPress={onPressHandler}>
                        Create Account
                    </PrimaryButton>
                </View>
            </ScrollView>
        </View>
    );
};

export default SignupFormScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 18,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 16,
    },

    button: {
        alignItems: "center",
        marginVertical: 24,
        paddingBottom: 36,
    },
    termsText: {
        fontSize: 12,
        color: GlobalStyles.colors.gray300,
    },
});

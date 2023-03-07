import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

const SettingsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Settings Screen</Text>
            <StatusBar barStyle={"dark-content"} />
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
    },
});

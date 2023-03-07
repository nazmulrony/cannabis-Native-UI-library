import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const SearchBar = ({ style }) => {
    return (
        <View style={[styles.searchBarContainer, style]}>
            <Ionicons
                name="ios-search-outline"
                size={24}
                color={Colors.dark400}
            />
            <TextInput style={styles.input} placeholder="Find products..." />
            <Ionicons name="options-outline" size={24} color={Colors.dark400} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 14,
        paddingVertical: 12,
        backgroundColor: "white",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: Colors.light500,
        marginBottom: 20,
    },
    input: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "400",
        color: Colors.dark400,
        width: "80%",
        marginLeft: 12,
    },
});

export default SearchBar;

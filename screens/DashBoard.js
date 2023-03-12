import { View, Text, StatusBar, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/DashBoard/Header";
import SearchBar from "../components/DashBoard/SearchBar";
import BalanceChart from "../components/DashBoard/BalanceChart";
import TestChart from "../components/DashBoard/TestChart";
import TotalSale from "../components/DashBoard/TotalSale";
import TotalRevenueAndSales from "../components/DashBoard/TotalRevenueAndSales";
import ProfitChart from "../components/DashBoard/ProfitChart";
import AuctionStatus from "../components/DashBoard/AuctionStatus";
import TransactionHistory from "../components/DashBoard/TransactionHistory";
import { Searchbar, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const DashBoard = () => {
    const testData = [
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello",
        "hello last item",
    ];
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
            >
                {/* <Header /> */}
                {/* <SearchBar /> */}
                <Searchbar
                    style={{
                        backgroundColor: "white",
                        marginBottom: 16,
                        borderRadius: 8,
                    }}
                    inputStyle={{ fontSize: 12 }}
                    placeholder="Find products"
                    onChangeText={() => {}}
                    value={""}
                    right={() => (
                        <Pressable
                            style={{ marginRight: 16 }}
                            onPress={() => console.log("pressed")}
                        >
                            <Ionicons
                                name="options-outline"
                                size={24}
                                color={Colors.dark400}
                            />
                        </Pressable>
                    )}
                />
                {/* <BalanceChart /> */}
                <TestChart />
                <TotalSale />
                <TotalRevenueAndSales />
                <ProfitChart />
                <AuctionStatus />
                <TransactionHistory />
            </ScrollView>
            <StatusBar barStyle={"dark-content"} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        //marginTop: StatusBar.currentHeight,
    },
});

export default DashBoard;

import { View, Text } from "react-native";
import React from "react";
import { DrawerActions, useFocusEffect } from "@react-navigation/native";

const MyAuctionScreen = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );
    return (
        <View>
            <Text>My Auction Screen</Text>
        </View>
    );
};

export default MyAuctionScreen;

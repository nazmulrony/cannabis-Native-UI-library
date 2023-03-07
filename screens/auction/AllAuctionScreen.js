import { View, Text } from "react-native";
import React from "react";
import { DrawerActions, useFocusEffect } from "@react-navigation/native";

const AllAuctionScreen = ({ navigation }) => {
    //this code helps to close the drawer when a bo back to the drawer navigation

    useFocusEffect(
        React.useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );
    //...........................................................................
    return (
        <View>
            <Text>All Auction Screen</Text>
        </View>
    );
};

export default AllAuctionScreen;

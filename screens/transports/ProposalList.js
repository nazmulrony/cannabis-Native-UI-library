import { View, Text } from "react-native";
import React from "react";

import { DrawerActions, useFocusEffect } from "@react-navigation/native";
const ProposalList = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );
    return (
        <View>
            <Text>ProposalList</Text>
        </View>
    );
};

export default ProposalList;

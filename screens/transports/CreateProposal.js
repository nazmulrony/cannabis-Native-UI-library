import { View, Text } from "react-native";
import React from "react";

import { DrawerActions, useFocusEffect } from "@react-navigation/native";
const CreateProposal = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );
    return (
        <View>
            <Text>CreateProposal</Text>
        </View>
    );
};

export default CreateProposal;

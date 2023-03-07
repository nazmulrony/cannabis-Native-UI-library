import { View, Text } from "react-native";
import React from "react";
import { DrawerActions, useFocusEffect } from "@react-navigation/native";

const CreateEvent = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            navigation.dispatch(DrawerActions.closeDrawer());
        }, [navigation])
    );
    return (
        <View>
            <Text>CreateEvent</Text>
        </View>
    );
};

export default CreateEvent;

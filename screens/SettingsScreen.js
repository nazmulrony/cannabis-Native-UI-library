import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    FlatList,
    Dimensions,
} from "react-native";
import React from "react";
import Skeleton from "../ui/Skeleton";
import CardSkeleton from "../ui/CardSkeleton";
import { MD3Colors, ProgressBar } from "react-native-paper";

const SettingsScreen = () => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={({ item, index }) => (
                    <CardSkeleton
                        key={index}
                        height={280}
                        width={Dimensions.get("window").width / 2 - 30}
                        // width={250}
                        style={{
                            borderRadius: 8,
                            marginBottom: 20,
                            marginRight: index % 2 === 0 ? 20 : 0,
                        }}
                    />
                )}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    text: {
        fontSize: 24,
    },
});

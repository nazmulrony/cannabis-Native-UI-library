import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    StatusBar,
    Dimensions,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/slices/auth.slice";

const Header = () => {
    const navigation = useNavigation();
    const { user } = useSelector(authSelector) || {};
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Pressable onPress={() => navigation.openDrawer()}>
                    {user?.user?.profile_pic ? (
                        <Image
                            style={styles.image}
                            source={{
                                uri: `${user?.user?.profile_pic}`,
                            }}
                        />
                    ) : (
                        <Image
                            style={[styles.image, { width: 50, height: 50 }]}
                            source={require("../../assets/avatar.png")}
                        />
                    )}
                </Pressable>
                <View>
                    <Text style={styles.greetings}>Welcome!</Text>
                    <Text>
                        {user?.user?.first_name} {user?.user?.last_name}
                    </Text>
                </View>
            </View>
            <View style={styles.iconsContainer}>
                <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={24}
                    color={Colors.dark400}
                    style={{ marginRight: 24 }}
                />
                <Ionicons
                    name="ios-notifications-outline"
                    size={24}
                    color={Colors.dark400}
                />
            </View>
            <StatusBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 17,
        //borderWidth: 1,
        paddingHorizontal: 20,
    },
    profileContainer: {
        borderColor: "blue",
        flexDirection: "row",
        alignItems: "center",
    },
    iconsContainer: {
        borderColor: "blue",
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: "white",
        marginRight: 6,
    },
    greetings: {
        color: Colors.dark400,
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "400",
    },
    name: {
        color: Colors.dark600,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
    },
});

export default Header;

import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    StatusBar,
    Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/slices/auth.slice";
import {
    Button,
    Divider,
    IconButton,
    Menu,
    TouchableRipple,
} from "react-native-paper";
import { GlobalStyles } from "../../constants/style";

const Header = () => {
    const navigation = useNavigation();
    const { user } = useSelector(authSelector) || {};
    const [chatVisible, setChatVisible] = useState(false);
    const [notificationVisible, setNotificationVisible] = useState(false);
    const notificationRef = useRef();

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
                <Menu
                    visible={chatVisible}
                    onDismiss={() => setChatVisible(false)}
                    anchorPosition="bottom"
                    contentStyle={{ backgroundColor: "white" }}
                    anchor={
                        <IconButton
                            icon={() => (
                                <Ionicons
                                    name="chatbubble-ellipses-outline"
                                    size={24}
                                    color={Colors.dark400}
                                />
                            )}
                            onPress={() => setChatVisible(!chatVisible)}
                        />
                    }
                >
                    <Text style={{ textAlign: "center" }}>Chat list</Text>
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Chat 1" />
                    <Menu.Item onPress={() => {}} title="Chat 2" />
                    <Menu.Item onPress={() => {}} title="Chat 3" />
                </Menu>
                {/* <IconButton
                    icon={() => (
                        <Ionicons
                            name="chatbubble-ellipses-outline"
                            size={24}
                            color={Colors.dark400}
                        />
                    )}
                    onPress={() => setChatVisible(true)}
                /> */}

                <Menu
                    visible={notificationVisible}
                    onDismiss={() => setNotificationVisible(false)}
                    anchorPosition="bottom"
                    contentStyle={{ backgroundColor: "white" }}
                    anchor={
                        <IconButton
                            icon={() => (
                                <Ionicons
                                    name="ios-notifications-outline"
                                    size={24}
                                    color={Colors.dark400}
                                />
                            )}
                            // ref={notificationRef}
                            onPress={() => setNotificationVisible(true)}
                        />
                    }
                >
                    <Text style={{ textAlign: "center" }}>Notifications</Text>
                    <Divider />
                    <Menu.Item
                        onPress={() => console.log("Option 1")}
                        title="Notification 1"
                    />
                    <Menu.Item
                        onPress={() => console.log("Option 2")}
                        title="Notification 2"
                    />
                    <Menu.Item
                        onPress={() => console.log("Option 3")}
                        title="Notification 3"
                    />
                </Menu>
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

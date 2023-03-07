import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import Dashbaord from "../screens/DashBoard";
import Inventory from "../screens/Inventory";
import MarketPlace from "../screens/MarketPlace";
import Colors from "../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { addUser, authSelector } from "../redux/slices/auth.slice";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useVerifyCompanyQuery } from "../ApiServices/company.service";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {
    const { user } = useSelector(authSelector);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const { dashboard, inventory, marketplace, settings } =
        user?.permissions || {};
    const { data, refetch } = useVerifyCompanyQuery(user?.company?._id, {
        skip: !user?.company?._id,
    });
    const [userRole, setUserRole] = useState(user?.company?.license_type);
    // useEffect(() => {
    //     refetch();
    //     // console.log("screen tab switched");
    //     if (data?.company) {
    //         dispatch(addUser(data));
    //     } else {
    //         // dispa
    //     }
    // }, [navigation?.getState()?.routes[0]?.state?.index]);
    // useEffect(() => {
    //     refetch();
    //     console.log("screen tab switched");
    // }, [
    //     navigation?.getState()?.routes[0]?.state?.index,
    //     navigation?.getState()?.routes[1]?.name,
    // ]);
    useEffect(() => {
        setUserRole(user?.company?.license_type);
    }, [user]);
    return (
        <BottomTab.Navigator
            screenOptions={({ route, navigation }) => {
                return {
                    // tabBarLabel: navigation.isFocused() ? route.name : "",
                    headerShown: false,
                    tabBarStyle: {
                        height: 65,
                        //paddingVertical: 14,
                        //paddingTop: 14,
                        paddingBottom: 12,
                        marginBottom: 0,
                    },
                    tabBarIconStyle: {
                        // width: 20,
                        // height: 20,
                        // borderWidth: 1,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        //lineHeight: 18,
                        fontWeight: "500",
                        //marginBottom: 14,
                    },
                    tabBarItemStyle: {
                        borderTopWidth: navigation.isFocused() ? 2 : 0,
                        borderTopColor: Colors.green500,
                    },
                    tabBarActiveTintColor: "#4CAF50",
                };
            }}
        >
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    name="home"
                                    size={24}
                                    color="#4CAF50"
                                />
                            );
                        } else {
                            return (
                                <Ionicons
                                    name="home-outline"
                                    size={24}
                                    color="#808080"
                                />
                            );
                        }
                    },
                }}
                name="Home"
                component={Dashbaord}
            />
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <MaterialIcons
                                    name="inventory"
                                    size={24}
                                    color="#4CAF50"
                                />
                            );
                        } else {
                            return (
                                <MaterialIcons
                                    name="inventory"
                                    size={24}
                                    color="#808080"
                                />
                            );
                        }
                    },
                }}
                name="Inventory"
                component={Inventory}
            />

            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <Entypo name="shop" size={24} color="#4CAF50" />
                            );
                        } else {
                            return (
                                <Entypo name="shop" size={24} color="#808080" />
                            );
                        }
                    },
                }}
                name="Market Place"
                component={MarketPlace}
            />
            {userRole === "grower" && (
                <BottomTab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (
                                    <Ionicons
                                        name="settings"
                                        size={24}
                                        color="#4CAF50"
                                    />
                                );
                            } else {
                                return (
                                    <Ionicons
                                        name="settings-outline"
                                        size={24}
                                        color="#808080"
                                    />
                                );
                            }
                        },
                    }}
                    name="Settings"
                    component={SettingsScreen}
                />
            )}
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;

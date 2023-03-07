import React, { useEffect, useLayoutEffect } from "react";
import {
    useIsFocused,
    useNavigation,
    useNavigationState,
    useRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import DrawerNavigator from "./DrawerNavigator";
import AllAuctionScreen from "../screens/auction/AllAuctionScreen";
import MyAuctionScreen from "../screens/auction/MyAuctionScreen";
import ProposalScreen from "../screens/auction/ProposalScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignupFormScreen from "../screens/SignupFormScreen";
import ProductDetails from "../screens/ProductDetails";
import CategoriesScreen from "../screens/categories/CategoriesScreen";
import ReceivedOrdersScreen from "../screens/orders/ReceivedOrdersScreen";
import MyOrdersScreen from "../screens/orders/MyOrdersScreen";
import ProposalList from "../screens/transports/ProposalList";
import CreateProposal from "../screens/transports/CreateProposal";
import ManageEvent from "../screens/events/ManageEvent";
import CreateEvent from "../screens/events/CreateEvent";
import PostAJobScreen from "../screens/job/PostAJobScreen";
import TalentScreen from "../screens/job/TalentScreen";
import DevicesScreen from "../screens/tracker/DevicesScreen";
import RealTimeScreen from "../screens/tracker/RealTimeScreen";
import { useDispatch, useSelector } from "react-redux";
import { addUser, authSelector, logout } from "../redux/slices/auth.slice";
import {
    useSwitchCompanyQuery,
    useVerifyCompanyQuery,
} from "../ApiServices/company.service";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import InventoryProductDetailsScreen from "../screens/InventoryProductDetailsScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    const { user } = useSelector(authSelector) || {};
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const navigationState = useNavigationState((state) => state);
    const currentRouteName =
        navigationState?.routes[navigationState?.index]?.name;

    //verify company query
    const { data, refetch } = useVerifyCompanyQuery(
        user?.company?._id ?? skipToken
    );
    useEffect(() => {
        if (user?.company._id) {
            refetch();
        }

        // console.log(`Screen changed to ${currentRouteName}`);
    }, [currentRouteName, navigation?.getState()]);
    useEffect(() => {
        if (data?.company) {
            dispatch(addUser);
        } else {
            dispatch(logout);
        }
    }, [data?.company]);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUpFormScreen"
                component={SignupFormScreen}
                options={{ title: "" }}
            />
            <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AllAuctionsScreen"
                component={AllAuctionScreen}
                options={({ navigation }) => ({
                    title: "All Auctions",
                })}
            />
            <Stack.Screen
                name="MyAuctionsScreen"
                component={MyAuctionScreen}
                options={{
                    title: "My Auctions",
                }}
            />
            <Stack.Screen
                name="ProposalScreen"
                component={ProposalScreen}
                options={{
                    title: "Proposal",
                }}
            />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen
                name="CategoriesScreen"
                component={CategoriesScreen}
            />
            <Stack.Screen
                name="ReceivedOrdersScreen"
                component={ReceivedOrdersScreen}
                options={{
                    title: "Received Orders",
                }}
            />
            <Stack.Screen
                name="MyOrdersScreen"
                component={MyOrdersScreen}
                options={{
                    title: "My Orders",
                }}
            />
            <Stack.Screen
                name="ProposalList"
                component={ProposalList}
                options={{
                    title: "Proposal List",
                }}
            />
            <Stack.Screen
                name="CreateProposal"
                component={CreateProposal}
                options={{
                    title: "Create Proposal",
                }}
            />
            <Stack.Screen
                name="ManageEvent"
                component={ManageEvent}
                options={{
                    title: "Manage Event",
                }}
            />
            <Stack.Screen
                name="CreateEvent"
                component={CreateEvent}
                options={{
                    title: "Create Event",
                }}
            />
            <Stack.Screen
                name="PostAJobScreen"
                component={PostAJobScreen}
                options={{
                    title: "Post Job",
                }}
            />
            <Stack.Screen
                name="TalentScreen"
                component={TalentScreen}
                options={{
                    title: "Talent",
                }}
            />
            <Stack.Screen
                name="DevicesScreen"
                component={DevicesScreen}
                options={{
                    title: "Devices",
                }}
            />
            <Stack.Screen
                name="RealTimeScreen"
                component={RealTimeScreen}
                options={{
                    title: "Real Time",
                }}
            />
            <Stack.Screen
                name="InventoryProductDetailsScreen"
                component={InventoryProductDetailsScreen}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;

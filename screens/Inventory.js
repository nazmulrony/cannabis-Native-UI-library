import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import React, { useEffect } from "react";
import Colors from "../constants/Colors";
import AddProduct from "../components/Inventory/AddProduct";
import InfoCards from "../components/Inventory/InfoCards";
import ProductsandBundleTable from "../components/Inventory/ProductsandBundleTable";
import { useGetProductsQuery } from "../ApiServices/inventory.service";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../redux/slices/auth.slice";
import {
    inventorySelector,
    setInventoryProduct,
} from "../redux/slices/inventory.slice";

const Inventory = () => {
    const { user } = useSelector(authSelector);
    const dispatch = useDispatch();
    const { data, isLoading } = useGetProductsQuery(
        user?.company?.license_type,
        {
            skip: !user?.company?.license_type,
        }
    );
    // console.log(user?.company?.license_type);
    useEffect(() => {
        // console.log(data);
        if (data?.status) {
            dispatch(setInventoryProduct(data?.products));
        }
    }, [data]);
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
            >
                <Text style={styles.titleText}>Inventory</Text>
                <AddProduct />
                <InfoCards />
                <ProductsandBundleTable />
            </ScrollView>
            <StatusBar barStyle={"dark-content"} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        //marginTop: StatusBar.currentHeight,
    },
    titleText: {
        textAlign: "center",
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
        color: Colors.dark600,
        marginBottom: 17,
    },
});

export default Inventory;

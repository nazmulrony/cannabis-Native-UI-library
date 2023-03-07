import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import ProductsTable from "./ProductsTable";
import BundleTable from "./BundleTable";
import { useSelector } from "react-redux";
import { inventorySelector } from "../../redux/slices/inventory.slice";

const ProductsandBundleTable = () => {
    const { inventoryProduct } = useSelector(inventorySelector);
    // console.log(inventoryProduct);
    const menu = [
        { name: "Products", notifications: inventoryProduct?.length },
        { name: "Bundle", notifications: 6 },
    ];
    const [active, setActive] = useState(menu[0].name);
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", flex: 1 }}>
                {menu.map((m, index) => (
                    <Pressable
                        onPress={() => setActive(m.name)}
                        key={index}
                        style={
                            active === m.name ? styles.active : styles.inactive
                        }
                    >
                        <Text
                            style={
                                active === m.name
                                    ? styles.activeText
                                    : styles.inactiveText
                            }
                        >
                            {m.name}
                        </Text>
                        <View style={styles.notificationContainer}>
                            <Text style={styles.notifications}>
                                {m.notifications}
                            </Text>
                        </View>
                    </Pressable>
                ))}
                <View
                    style={{
                        borderBottomWidth: 2,
                        flex: 1 - menu.length * 0.3,
                        borderBottomColor: "#D9D9D9",
                    }}
                />
            </View>
            {active === menu[0].name && <ProductsTable />}
            {active === menu[1].name && <BundleTable />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        backgroundColor: "white",
        marginBottom: 20,
    },
    inactive: {
        padding: 14,
        borderBottomWidth: 2,
        borderBottomColor: "#D9D9D9",
        flex: 0.3,
        flexDirection: "row",
    },
    active: {
        padding: 14,
        borderBottomWidth: 2,
        borderBottomColor: Colors.green500,
        flex: 0.3,
        flexDirection: "row",
    },
    inactiveText: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: "500",
        color: Colors.dark300,
        marginRight: 6,
    },
    activeText: {
        fontSize: 16,
        lineHeight: 19,
        fontWeight: "500",
        color: Colors.green500,
        marginRight: 6,
    },
    notificationContainer: {
        width: 24,
        height: 24,
        backgroundColor: Colors.green500,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    notifications: {
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 14.5,
        color: "white",
    },
});

export default ProductsandBundleTable;

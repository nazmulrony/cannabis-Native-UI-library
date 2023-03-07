import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../../constants/style";
import {
    AntDesign,
    Entypo,
    FontAwesome5,
    FontAwesome,
} from "@expo/vector-icons";
import RadioButtons from "../../ui/RadioButtons";

const ProductInfo = ({ product }) => {
    const [unit, setUnit] = useState("lb");
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{product?.title}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign
                    name="checkcircle"
                    size={14}
                    color={GlobalStyles.colors.primary500}
                />
                <Text style={styles.company}>{product?.company?.name}</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <View style={styles.stockContainer}>
                    <Text style={styles.stock}>Total Stock</Text>
                    <Text style={styles.stockAmount}>
                        {product?.variants[0].quantity} lb
                    </Text>
                </View>
                <View style={styles.ratingContainer}>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <FontAwesome name="star" size={16} color="#FDCC0D" />
                        <FontAwesome name="star" size={16} color="#FDCC0D" />
                        <FontAwesome name="star" size={16} color="#FDCC0D" />
                        <FontAwesome name="star" size={16} color="#FDCC0D" />
                        <FontAwesome
                            name="star-half-full"
                            size={16}
                            color="#FDCC0D"
                        />
                    </View>
                    <Text style={{ color: GlobalStyles.colors.gray300 }}>
                        4.9(1900 reviews)
                    </Text>
                </View>
            </View>
            <View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Entypo
                        name="shop"
                        size={16}
                        color={GlobalStyles.colors.primary500}
                    />
                    <Text style={[styles.subtitle, { marginLeft: 4 }]}>
                        Marketplace
                    </Text>
                </View>
                <Text style={{ marginVertical: 8 }}>Available Units</Text>
                <RadioButtons
                    items={[
                        { label: "lb", value: "lb" },
                        { label: "g", value: "g" },
                    ]}
                    initial={unit}
                    color={GlobalStyles.colors.primary500}
                    direction="row"
                    gap={32}
                    onPress={setUnit}
                />
                <View style={styles.marketplaceInfoContainer}>
                    <View
                        style={{
                            alignItems: "center",
                            flex: 0.33,
                        }}
                    >
                        <AntDesign
                            name="piechart"
                            size={16}
                            color={GlobalStyles.colors.gray200}
                        />
                        <Text style={styles.smallText}>Allocated</Text>
                        <Text style={styles.darkSubtitle}>
                            {product?.allocations?.marketplace?.quantity} lb
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            flex: 0.33,
                        }}
                    >
                        <Entypo
                            name="arrow-with-circle-down"
                            size={16}
                            color={GlobalStyles.colors.gray200}
                        />
                        <Text style={styles.smallText}>Min Qty</Text>
                        <Text style={styles.darkSubtitle}>
                            {unit === "lb"
                                ? `${product?.allocations?.marketplace?.min_qty_lb} lb`
                                : `${product?.allocations?.marketplace?.min_qty_g} g`}
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            flex: 0.33,
                        }}
                    >
                        <FontAwesome5
                            name="dollar-sign"
                            size={16}
                            color={GlobalStyles.colors.gray200}
                        />
                        <Text style={styles.smallText}>Price</Text>
                        <Text style={styles.darkSubtitle}>
                            {unit === "lb"
                                ? `${product?.allocations?.marketplace?.price_per_lb} lb`
                                : `${product?.allocations?.marketplace?.price_per_g} g`}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProductInfo;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: GlobalStyles.colors.primary500,
    },
    company: {
        color: GlobalStyles.colors.gray300,
        marginLeft: 6,
    },
    stockContainer: {
        backgroundColor: GlobalStyles.colors.primary500,
        borderRadius: 6,
        padding: 12,
        marginVertical: 8,
        width: "50%",
        alignItems: "center",
    },
    ratingContainer: {
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 40,
    },
    stock: {
        color: "white",
    },
    stockAmount: {
        fontSize: 18,
        fontWeight: "500",
        color: "white",
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "500",
        color: GlobalStyles.colors.primary500,
    },
    marketplaceInfoContainer: {
        flexDirection: "row",
        // justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.primary50,
        marginVertical: 8,
        marginHorizontal: -12,
        padding: 12,
    },
    smallText: {
        fontSize: 10,
        color: GlobalStyles.colors.gray300,
    },
    darkSubtitle: {
        fontSize: 16,
        fontWeight: "500",
        color: GlobalStyles.colors.gray700,
    },
});

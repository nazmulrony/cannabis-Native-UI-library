import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Pressable,
    Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../DashBoard/SearchBar";
import Colors from "../../constants/Colors";
import { useSelector } from "react-redux";
import { inventorySelector } from "../../redux/slices/inventory.slice";
import { GlobalStyles } from "../../constants/style";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const ProductsTable = () => {
    const { inventoryProduct } = useSelector(inventorySelector);
    //const inventoryProduct = [];
    const navigation = useNavigation();

    const [data, setData] = useState(inventoryProduct?.slice(0, 4));

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setData(inventoryProduct?.slice(0, 4));
    }, [inventoryProduct]);

    const handleShowMore = () => {
        if (toggle) {
            setData(inventoryProduct?.slice(0, 4));
        } else {
            setData(inventoryProduct);
        }
        setToggle(!toggle);
    };
    const handleDetails = (product) => {
        // console.log(product);
        navigation.navigate("InventoryProductDetailsScreen", product);
    };
    return (
        <View style={styles.container}>
            <SearchBar style={{ marginBottom: 14 }} />
            <View
                style={styles.tableContainer}
                horizontal={true}
                nestedScrollEnabled
            >
                <View>
                    <View
                        style={[styles.tableHeaderContainer, { width: "100%" }]}
                    >
                        <Text style={[styles.tableHeader, { flex: 0.7 }]}>
                            Product Name
                        </Text>
                        <Text style={[styles.tableHeader, { flex: 0.3 }]}>
                            Stock
                        </Text>
                    </View>
                    {data?.map((product) => (
                        <Pressable
                            onPress={() => handleDetails(product)}
                            key={product?._id}
                            style={({ pressed }) =>
                                pressed
                                    ? [styles.row, styles.pressed]
                                    : styles.row
                            }
                        >
                            <View
                                style={[
                                    styles.dataField,
                                    {
                                        // width: 250,
                                        flex: 1,
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        paddingLeft: 16,
                                    },
                                ]}
                            >
                                <Image
                                    style={{
                                        width: 50,
                                        height: 50,
                                        marginRight: 16,
                                    }}
                                    source={
                                        product?.images[0]
                                            ? { uri: product?.images[0] }
                                            : require("../../assets/images/image_thumb.png")
                                    }
                                />
                                <View
                                    style={{ marginTop: 19, marginBottom: 20 }}
                                >
                                    <Text
                                        style={{
                                            color: Colors.dark600,
                                            fontSize: 13,
                                            fontWeight: "500",
                                            lineHeight: 15,
                                            marginBottom: 6,
                                        }}
                                    >
                                        {product.title.length > 20
                                            ? `${product.title.slice(0, 17)}...`
                                            : product.title}
                                    </Text>
                                    <Text
                                        style={{
                                            color: Colors.dark300,
                                            fontSize: 12,
                                            lineHeight: 18,
                                            fontWeight: "400",
                                        }}
                                    >
                                        {product.category}
                                    </Text>
                                </View>
                            </View>
                            <View style={[styles.dataField, { width: 123 }]}>
                                <Text style={styles.text}>
                                    Total - {product?.variants[0]?.quantity} lb
                                </Text>
                                <Text>
                                    Sold -{" "}
                                    {
                                        product?.specifications
                                            ?.total_cannabinoids
                                    }{" "}
                                    lb
                                </Text>
                            </View>
                        </Pressable>
                    ))}
                </View>
            </View>
            <Button
                mode="contained"
                style={{ borderRadius: 8 }}
                onPress={handleShowMore}
            >
                {toggle ? "View less" : "View more"}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 14,
    },
    tableContainer: {
        paddingBottom: 14,
    },
    tableHeaderContainer: {
        backgroundColor: "#EEF8F1",
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
    },
    tableHeader: {
        color: Colors.dark400,
        fontSize: 12,
        borderRightColor: Colors.dark400,
        textAlign: "center",
    },
    row: {
        borderBottomWidth: 1,
        borderBottomColor: "#DADAD9",
        flexDirection: "row",
        alignItems: "center",
    },
    pressed: {
        opacity: 0.7,
        backgroundColor: GlobalStyles.colors.gray100,
    },
    text: {
        fontSize: 13,
        lineHeight: 19.5,
        color: Colors.dark600,
        fontWeight: "400",
    },
    dataField: {
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        marginHorizontal: 14,
        marginTop: 10,
        marginBottom: 24,
        paddingHorizontal: 40,
        paddingVertical: 12,
        backgroundColor: Colors.green500,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    btnText: {
        color: "white",
        lineHeight: 21,
        fontSize: 14,
        fontWeight: "600",
    },
});

export default ProductsTable;

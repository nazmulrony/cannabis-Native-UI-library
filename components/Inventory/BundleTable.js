import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Pressable,
    Image,
} from "react-native";
import React, { useState } from "react";
import SearchBar from "../DashBoard/SearchBar";
import Colors from "../../constants/Colors";

const BundleTable = () => {
    const demo = [
        {
            id: "001",
            totalStock: 200,
            event: "Transporter Payment",
            amount: 300.0,
            date: "29/01/2023",
        },
        {
            id: "001",
            totalStock: 200,
            event: "Transporter Payment",
            amount: 300.0,
            date: "29/01/2023",
        },
        {
            id: "001",
            totalStock: 200,
            event: "Transporter Payment",
            amount: 300.0,
            date: "29/01/2023",
        },
        {
            id: "001",
            totalStock: 200,
            event: "Transporter Payment",
            amount: 300.0,
            date: "29/01/2023",
        },
        {
            id: "001",
            totalStock: 200,
            event: "Transporter Payment",
            amount: 300.0,
            date: "29/01/2023",
        },
        {
            id: "001",
            totalStock: 200,
            event: "Transporter Payment",
            amount: 300.0,
            date: "29/01/2023",
        },
    ];

    const newData = demo.slice(0, 4);

    const [data, setData] = useState(newData);

    const [toggle, setToggle] = useState(false);

    const handleShowMore = () => {
        if (toggle) {
            setData(newData);
        } else {
            setData(demo);
        }
        setToggle(!toggle);
    };

    return (
        <View style={styles.container}>
            <SearchBar style={{ marginBottom: 14 }} />
            <ScrollView
                style={styles.tableContainer}
                horizontal={true}
                nestedScrollEnabled
            >
                <View>
                    <View style={styles.tableHeaderContainer}>
                        <Text style={[styles.tableHeader, { width: 170 }]}>
                            Product Name
                        </Text>
                        <Text style={[styles.tableHeader, { width: 123 }]}>
                            Total Stock
                        </Text>
                        <Text style={[styles.tableHeader, { width: 173 }]}>
                            Event
                        </Text>
                        <Text style={[styles.tableHeader, { width: 80 }]}>
                            Amount
                        </Text>
                        <Text
                            style={[
                                styles.tableHeader,
                                { borderRightWidth: 0, width: 100 },
                            ]}
                        >
                            Date
                        </Text>
                    </View>
                    {data.map((d, index) => (
                        <View key={index} style={styles.row}>
                            <View
                                style={[
                                    styles.dataField,
                                    {
                                        width: 170,
                                        alignItems: "center",
                                        flexDirection: "row",
                                    },
                                ]}
                            >
                                <Image
                                    style={{
                                        width: 50,
                                        height: 43,
                                        marginRight: 8,
                                    }}
                                    source={require("../../assets/flowers.png")}
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
                                        Royal Flower
                                    </Text>
                                    <Text
                                        style={{
                                            color: Colors.dark300,
                                            fontSize: 12,
                                            lineHeight: 18,
                                            fontWeight: "400",
                                        }}
                                    >
                                        Flowers
                                    </Text>
                                </View>
                            </View>
                            <View style={[styles.dataField, { width: 123 }]}>
                                <Text style={styles.text}>
                                    {d.totalStock} lb
                                </Text>
                            </View>
                            <View style={[styles.dataField, { width: 173 }]}>
                                <Text style={styles.text}>{d.event}</Text>
                            </View>
                            <View style={[styles.dataField, { width: 80 }]}>
                                <Text style={styles.text}>${d.amount}</Text>
                            </View>
                            <View style={[styles.dataField, { width: 100 }]}>
                                <Text style={styles.text}>{d.date}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <Pressable onPress={handleShowMore} style={styles.btn}>
                <Text style={styles.btnText}>
                    {toggle ? "View less" : "View more"}
                </Text>
            </Pressable>
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

export default BundleTable;

import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Card from "../MarketPlace/Card";

const RelatedProducts = () => {
    const navigation = useNavigation();
    const data = [
        {
            image: require("../../assets/items/pre-roll.png"),
            type: "Infused Pre Rol",
            quantity: 1,
            title: "Original Galaxy Preroll-OK",
            brand: "Galaxy",
            ratings: "4.6 (81)",
            price: 20.0,
            quantityEach: "Each",
        },
        {
            image: require("../../assets/items/moon-rock.png"),
            type: "Flower",
            quantity: 24,
            title: "KAVIAR MOONROCKS",
            brand: "Kaviar",
            ratings: "4.6 (81)",
            price: 25.0,
            thc: "22.35% THC",
            quantityEach: "1/8 oz",
        },
    ];
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.sectionTitle}>Related Products</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.viewAll}>View all</Text>
                    <AntDesign
                        name="arrowright"
                        size={16}
                        color={Colors.dark600}
                    />
                </View>
            </View>
            <View style={styles.container}>
                {/* card started */}
                {data.map((d, index) => (
                    <Pressable
                        key={index}
                        onPress={() =>
                            navigation.navigate("ProductDetails", {
                                product: d,
                            })
                        }
                    >
                        <Card product={d} />
                    </Pressable>
                ))}
                {/* card ended */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
        color: Colors.dark600,
    },
    viewAll: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "400",
        color: Colors.dark600,
        marginRight: 5,
    },
});
export default RelatedProducts;

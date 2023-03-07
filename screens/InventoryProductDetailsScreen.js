import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { GlobalStyles } from "../constants/style";
import ProductInfo from "../components/InventoryProductDetails/ProductInfo";
import Specifications from "../components/InventoryProductDetails/Specifications";

const InventoryProductDetailsScreen = ({ navigation, route }) => {
    const product = route.params;
    const [imageUrl, setImageUrl] = useState(product?.images[0]);
    useLayoutEffect(() => {
        navigation.setOptions({ title: product.title });
    }, []);

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={styles.headerImageContainer}>
                            {imageUrl ? (
                                <Image
                                    source={{ uri: imageUrl }}
                                    style={styles.headerImage}
                                />
                            ) : (
                                <Image
                                    source={require("../assets/images/image_thumb.png")}
                                    style={styles.headerImage}
                                />
                            )}
                        </View>
                        <View style={styles.imagesContainer}>
                            {product?.images?.map((url, index) => {
                                return (
                                    <Pressable
                                        key={index}
                                        onPress={() => setImageUrl(url)}
                                    >
                                        <Image
                                            source={{ uri: url }}
                                            style={styles.thumbImage}
                                        />
                                    </Pressable>
                                );
                            })}
                        </View>
                    </View>
                    <ProductInfo product={product} />
                    <Specifications product={product} />
                </ScrollView>
            </View>
        </View>
    );
};

export default InventoryProductDetailsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        width: "100%",
    },
    headerImageContainer: {
        overflow: "hidden",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: GlobalStyles.colors.gray100,
        // backgroundColor: "red",
    },
    headerImage: {
        width: "100%",
        height: 220,
        borderEndWidth: 1,
        resizeMode: "contain",
    },

    imagesContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 8,
    },
    thumbImage: {
        height: 70,
        width: 70,
        marginHorizontal: 8,
    },
});

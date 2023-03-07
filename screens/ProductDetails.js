import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalStyles } from "../constants/style";
import DetailsContainer from "../components/productDetails/DetailsContainer";
import ProductDescription from "../components/productDetails/ProductDescription";
import Specifications from "../components/productDetails/Specifications";
import ProductRatings from "../components/productDetails/ProductRatings";
import BottomButtons from "../ui/BottomButtons";
import RelatedProducts from "../components/productDetails/RelatedProducts";
import { ImageBackground } from "react-native";
// import CarouselDemo from "../components/productDetails/CarouselDemo";

const ProductDetails = ({ navigation, route }) => {
    const product = route.params.product;
    // console.log(product);
    useLayoutEffect(() => {
        navigation.setOptions({
            title:
                product?.title.length < 20
                    ? product?.title
                    : `${product?.title.slice(0, 18)}...`,
        });
    }, []);
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={
                                product?.image
                                    ? product.image
                                    : {
                                          uri: product?.images[0],
                                      }
                            }
                            style={styles.image}
                        />
                    </View>
                    {/* <CarouselDemo /> */}
                    <DetailsContainer data={product} />
                    <ProductDescription />
                    <Specifications product={product} />
                    <ProductRatings ratings={"4.6 (81)"} />
                    <RelatedProducts />
                </ScrollView>
            </View>
            <View style={styles.bottomBar}>
                <BottomButtons />
            </View>
        </View>
    );
};

export default ProductDetails;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    imageContainer: {
        width: "100%",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    image: {
        width: "100%",
        height: 250,
        borderWidth: 1,
        borderRadius: 6,
    },
    container: {
        flex: 1,
        paddingBottom: 16,
    },
    bottomBar: {
        height: 75,
        marginHorizontal: -20,
        paddingHorizontal: 30,
        //backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        elevation: 20,
        backgroundColor: "white",
    },
});

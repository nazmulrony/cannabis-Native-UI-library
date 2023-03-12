import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/style";
import Skeleton from "./Skeleton";
import { Image } from "react-native";

const CardSkeleton = ({ height, width, style }) => {
    return (
        <View
            style={[styles.container, { height: height, width: width }, style]}
        >
            <Skeleton
                height={height * 0.45}
                width={width - 2}
                // style={{ borderRadius: 8 }}
            >
                <Image
                    source={require("../assets/images/image_thumb.png")}
                    style={styles.image}
                />
            </Skeleton>
            <View
                style={{
                    flex: 1,
                    justifyContent: "space-between",
                    paddingHorizontal: 8,
                    paddingVertical: 16,
                }}
            >
                <Skeleton
                    height={height * 0.06}
                    width={width - 18}
                    style={{ borderRadius: 8 }}
                />
                <Skeleton
                    height={height * 0.06}
                    width={width * 0.8}
                    style={{ borderRadius: 8 }}
                />
                <Skeleton
                    height={height * 0.06}
                    width={width * 0.7}
                    style={{ borderRadius: 8 }}
                />
                <Skeleton
                    height={height * 0.06}
                    width={width * 0.6}
                    style={{ borderRadius: 8 }}
                />
                <Skeleton
                    height={height * 0.06}
                    width={width * 0.75}
                    style={{ borderRadius: 8 }}
                />
            </View>
        </View>
    );
};

export default CardSkeleton;

const styles = StyleSheet.create({
    container: {
        // padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        overflow: "hidden",
    },
    image: {
        height: 50,
        width: 50,
    },
});

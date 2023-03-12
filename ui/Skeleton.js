import { Animated, Easing, StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

const Skeleton = ({ height, width, style, children }) => {
    const translateX = useRef(new Animated.Value(-width)).current;
    useEffect(() => {
        Animated.loop(
            Animated.timing(translateX, {
                toValue: width,
                useNativeDriver: true,
                duration: 1000,
                easing: Easing.linear,
            })
        ).start();
    }, []);
    return (
        <View
            style={[
                {
                    height: height,
                    width: width,
                    backgroundColor: "rgba(0,0,0,0.12)",
                    overflow: "hidden",
                },
                style,
            ]}
        >
            {children ? (
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: "100%",

                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {children}
                </View>
            ) : null}
            <Animated.View
                style={{
                    width: "100%",
                    height: "100%",
                    transform: [{ translateX: translateX }],
                }}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={[
                        "transparent",
                        "rgba(0,0,0,0.05)",
                        "rgba(0,0,0,0.05)",
                        "transparent",
                    ]}
                    style={{ width: "100%", height: "100%" }}
                />
            </Animated.View>
        </View>
    );
};

export default Skeleton;

const styles = StyleSheet.create({});

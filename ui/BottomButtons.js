import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import IconTextButton from "./IconTextButton";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const BottomButtons = ({ quantity }) => {
    const [num, setNum] = useState(quantity || 1);
    return (
        <>
            <View
                style={{
                    flex: 0.45,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 5,
                    borderColor: Colors.light500,
                    borderWidth: 1,
                    backgroundColor: "#F5F5F5",
                }}
            >
                <Pressable
                    android_ripple={{
                        color: "#cccccc",
                    }}
                    onPress={() => {
                        if (num <= 1) {
                            return;
                        }
                        setNum(num - 1);
                    }}
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: 5,
                        borderRightWidth: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        borderColor: Colors.light500,
                        backgroundColor: "white",
                    }}
                >
                    <AntDesign name="minus" size={24} color="#6D6D6D" />
                </Pressable>
                <Text
                    style={{
                        fontSize: 14,
                        lineHeight: 22,
                        fontWeight: "500",
                        color: Colors.dark600,
                    }}
                >
                    {num}
                </Text>
                <Pressable
                    android_ripple={{
                        color: "#cccccc",
                    }}
                    onPress={() => {
                        setNum(num + 1);
                    }}
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: 5,
                        borderLeftWidth: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        borderColor: Colors.light500,
                        backgroundColor: "white",
                    }}
                >
                    <AntDesign name="plus" size={24} color="#6D6D6D" />
                </Pressable>
            </View>
            <IconTextButton
                style={{
                    flex: 0.45,
                }}
                icon={<AntDesign name="shoppingcart" size={20} color="white" />}
            >
                Add to cart
            </IconTextButton>
        </>
    );
};

export default BottomButtons;

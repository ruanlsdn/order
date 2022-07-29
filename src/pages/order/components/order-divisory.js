import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const OrderDivisory = ({ text }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "95%",
        alignSelf: "center",
        height: 50,
      }}
    >
      <View
        style={{
          backgroundColor: "black",
          height: 2,
          flex: 1,
          alignSelf: "center",
        }}
      />
      <Text style={{ alignSelf: "center", paddingHorizontal: 5, fontSize: 15 }}>
        {text}
      </Text>
      <View
        style={{
          backgroundColor: "black",
          height: 2,
          flex: 1,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

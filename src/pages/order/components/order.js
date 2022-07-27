import React from "react";
import { View, StyleSheet } from "react-native";
import { OrderHeader } from "./order-header";
import { OrderBody } from "./order-body";
import { OrderBodySummary } from "./order-body-summary";
import { OrderFooter } from "./order-footer";
import { OrderDivisory } from "./order-divisory";

export const Order = ({ index }) => {
  return (
    <>
      <OrderDivisory text={"COMANDA " + index + ""} />
      <View style={styles.container}>
        <OrderHeader />
        <OrderBody />
        <OrderBodySummary />
        <OrderFooter />
      </View>
      <OrderDivisory text="FIM" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 650,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#ffff",
  },
});

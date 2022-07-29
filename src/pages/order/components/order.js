import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { OrderHeader } from "./order-header";
import { OrderBody } from "./order-body";
import { OrderBodySummary } from "./order-body-summary";
import { OrderFooter } from "./order-footer";
import { OrderDivisory } from "./order-divisory";

export const Order = ({ comanda, index }) => {
  return (
    <>
      <OrderDivisory text={`COMANDA ${index} - ${comanda.cliente}`} />
      <View style={styles.container}>
        <OrderHeader id={comanda.id} />
        <OrderBody pedidos={comanda.pedidos} />
        <OrderBodySummary id={comanda.id} />
        <OrderFooter comanda={comanda} />
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

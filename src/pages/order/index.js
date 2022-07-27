import React from "react";
import { ScrollView } from "react-native";
import { Order } from "./components/order";
import { OrderDivisory } from "./components/order-divisory";

export const OrderScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Order index={1} />
    </ScrollView>
  );
};

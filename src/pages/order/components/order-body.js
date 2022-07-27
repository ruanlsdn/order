import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { OrderBodyRow } from "./order-body-row";
import { Divider } from "react-native-paper";

export const OrderBody = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <OrderBodyRow />
          <OrderBodyRow />
          <OrderBodyRow />
          <OrderBodyRow />
          <OrderBodyRow />
          <OrderBodyRow />
          <OrderBodyRow />
          <OrderBodyRow />
          <OrderBodyRow />
          <OrderBodyRow />
          <OrderBodyRow />
        </ScrollView>
      </View>
      <Divider style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "65%",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#ececec",
    alignSelf: "center",
    alignItems: "center",
  },
  divider: { height: 3, width: "95%", alignSelf: "center" },
});

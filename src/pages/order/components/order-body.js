import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { OrderBodyRow } from "./order-body-row";
import { Divider } from "react-native-paper";

export const OrderBody = ({ pedidos }) => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {pedidos.length == 0 ? (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>Não há pedidos.</Text>
            </View>
          ) : (
            pedidos.map((item) => <OrderBodyRow item={item} />)
          )}
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

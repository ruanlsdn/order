import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import { calcularComanda } from "../../../services/api";

export const OrderBodySummary = ({ id }) => {
  const [total, setTotal] = useState(0.0);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const request = async () => setTotal(await calcularComanda(id));
      request();
    }
  }, [isFocused]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.total_container}>
          <Text>Total: </Text>
        </View>
        <View style={styles.sum_container}>
          <Text>R$ {total.toFixed(2)}</Text>
        </View>
      </View>
      <Divider style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "95%",
    height: "3%",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  total_container: {
    width: "10%",
    alignItems: "flex-end",
  },
  sum_container: {
    width: "90%",
    alignItems: "flex-end",
  },
  divider: { height: 3, width: "95%", alignSelf: "center" },
});

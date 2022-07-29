import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const OrderBodyRow = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content_container}>
        <View style={styles.icon_container}>
          <Icon name="tapas" size={30} />
        </View>
        <View style={styles.table_name}>
          <Text style={{ fontSize: 18 }}>{item.produto.descricao} </Text>
          <Text style={{ color: "#828282" }}>
            {item.produto.Categoria.descricao}
          </Text>
        </View>
        <View style={styles.table_description}>
          <Text style={{ fontSize: 15 }}>Quant.</Text>
          <Text style={{ color: "#828282" }}>x{item.quantidade}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: "#ffff",
    marginTop: 10,
    borderRadius: 7,
  },
  content_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  icon_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ececec",
    height: 60,
    width: 60,
    elevation: 7,
    borderRadius: 7,
    marginHorizontal: 10,
  },
  table_name: {
    display: "flex",
    flexDirection: "column",
    width: "63%",
  },
  table_description: {
    display: "flex",
    alignItems: "flex-end",
  },
});

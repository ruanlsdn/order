import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export const OrderBodyRow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content_container}>
        <View style={styles.icon_container}>
          <Icon name="tapas" size={18} />
        </View>
        <View style={styles.table_name}>
          <Text>Espetinho </Text>
          <Text>Comida </Text>
        </View>
        <View style={styles.table_description}>
          <Text>Qtd: 1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "12%",
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
    height: "50%",
    width: "10%",
    elevation: 7,
    borderRadius: 7,
    marginHorizontal: 20,
  },
  table_name: {
    display: "flex",
    flexDirection: "column",
    width: "65%",
  },
  table_description: {
    display: "flex",
    alignItems: "flex-end",
  },
});

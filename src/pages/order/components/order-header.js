import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

export const OrderHeader = ({ id }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.icon_container}>
          <Icon name="list" size={40} />
        </View>
        <View style={styles.description_container}>
          <Text style={styles.description}>ID: {id}</Text>
        </View>
      </View>
      <Divider style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "8%",
    display: "flex",
    flexDirection: "row",
  },
  icon_container: {
    width: "15%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  description_container: {
    width: "85%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  description: {
    fontSize: 15,
  },
  divider: { height: 3, width: "95%", alignSelf: "center" },
});

import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ComandaContext } from "../../../contexts/comanda";

export const OrderHeaderRight = () => {
  const { criar } = useContext(ComandaContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          criar("data");
        }}
      >
        <Icon name="add" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginHorizontal: 15 }}>
        <Icon name="group" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});

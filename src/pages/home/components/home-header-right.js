import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RestauranteContext } from "../../../contexts/restaurante";

export const HomeHeaderRight = () => {
  const { novaMesa } = useContext(RestauranteContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          novaMesa();
        }}
      >
        <Icon name="add" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginRight: 10,
  },
});

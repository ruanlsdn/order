import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export const MenuHeaderCategories = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ color: "#ffff" }}>CERVEJAS</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 150,
    marginTop: 25,
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: "#3a6dff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ProdutoContext } from "../../../contexts/produto";
import { RestauranteContext } from "../../../contexts/restaurante";

export const MenuHeaderCategories = ({ categoria }) => {
  const { restaurante } = useContext(RestauranteContext);
  const { buscarPelaCategoria } = useContext(ProdutoContext);

  return (
    <TouchableOpacity
      onPress={() => buscarPelaCategoria(restaurante.id, categoria.descricao)}
      style={styles.container}
    >
      <Text style={{ color: "#ffff" }}>{categoria.descricao}</Text>
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

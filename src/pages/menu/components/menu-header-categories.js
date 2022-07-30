import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ProdutoContext } from "../../../contexts/produto";
import { RestauranteContext } from "../../../contexts/restaurante";

export const MenuHeaderCategories = ({ categoria }) => {
  const { restaurante } = useContext(RestauranteContext);
  const { buscar, buscarPelaCategoria } = useContext(ProdutoContext);

  return (
    <TouchableOpacity
      onPress={() => {
        if (categoria.descricao != "TODOS")
          buscarPelaCategoria(restaurante.id, categoria.descricao);
        else buscar(restaurante.id);
      }}
      style={styles.container}
    >
      <Text style={{ fontSize: 10, color: "#ffff" }}>
        {categoria.descricao}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 120,
    marginTop: 20,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor: "#3a6dff",
    alignItems: "center",
    justifyContent: "center",
  },
});

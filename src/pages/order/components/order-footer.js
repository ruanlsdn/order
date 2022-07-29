import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ComandaContext } from "../../../contexts/comanda";
import { ProdutoContext } from "../../../contexts/produto";
import { RestauranteContext } from "../../../contexts/restaurante";
import { finalizarComanda } from "../../../services/api";

export const OrderFooter = ({ comanda }) => {
  const navigation = useNavigation();
  const { setComandaId, setFinalizar } = useContext(ComandaContext);
  const { restaurante } = useContext(RestauranteContext);
  const { buscar, buscarTodasCategorias } = useContext(ProdutoContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn_add}
        onPress={() => {
          setComandaId(comanda.id);
          buscar(restaurante.id);
          buscarTodasCategorias();
          navigation.navigate("MenuScreen");
        }}
      >
        <Text style={styles.text}>ADICIONAR PRODUTO</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFinalizar(true);
          finalizarComanda(comanda.id);
        }}
        style={styles.btn_close}
      >
        <Text style={styles.text}>FINALIZAR COMANDA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "14%",
    marginTop: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  btn_add: {
    width: "100%",
    height: "40%",
    marginBottom: 10,
    backgroundColor: "#3a6dff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  btn_close: {
    backgroundColor: "#3a6dff",
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  text: {
    color: "#ffff",
  },
});

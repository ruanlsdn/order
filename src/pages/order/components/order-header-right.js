import React, { useContext } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ComandaContext } from "../../../contexts/comanda";

export const OrderHeaderRight = () => {
  const {
    setShowDividirComandaModal,
    setDividirCriar,
    setShowNovaComandaModal,
  } = useContext(ComandaContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setShowNovaComandaModal(true);
        }}
      >
        <Icon name="add" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginHorizontal: 15 }}
        onPress={() =>
          Alert.alert(
            "Como deseja dividir a comanda?",
            "Toque no botão correspondente.",
            [
              {
                text: "APENAS DIVIDIR O VALOR",
                style: "default",
                onPress: () => {
                  setShowDividirComandaModal(true);
                  setDividirCriar(false);
                },
              },
              {
                text: "DIVIDIR E GERAR COMANDA NOVA",
                style: "default",
                onPress: () => {
                  setShowDividirComandaModal(true);
                  setDividirCriar(true);
                },
              },
              {
                text: "VOLTAR",
                style: "default",
                onPress: () => {},
              },
            ]
          )
        }
      >
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

import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  AlertButton,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ComandaContext } from "../../../../contexts/comanda";
import { RestauranteContext } from "../../../../contexts/restaurante";

export const TableChart = ({ mesa }) => {
  const navigation = useNavigation();
  const { apagar, atualizar } = useContext(RestauranteContext);
  const { buscar, setMesaId, setQtdeComanda } = useContext(ComandaContext);
  let mesaStatus;

  if (mesa.agregada) {
    mesaStatus = "AGREGADA";
  } else if (mesa._count.comandas > 0) {
    mesaStatus = "OCUPADA";
  } else {
    mesaStatus = "DISPONÍVEL";
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (!mesa.agregada) {
          buscar(mesa.id);
          setMesaId(mesa.id);
          setQtdeComanda(mesa._count.comandas);
          navigation.navigate("OrderScreen");
        }
      }}
      onLongPress={() => {
        Alert.alert(
          "Informe a ação que deseja executar.",
          "Toque no botão correspondente.",
          [
            mesa._count.comandas == 0
              ? {
                  text: mesa.agregada ? "SEPARAR MESA" : "AGREGAR MESA",
                  style: "destructive",
                  onPress: () =>
                    mesa.agregada
                      ? atualizar(mesa.id, { agregada: false })
                      : atualizar(mesa.id, { agregada: true }),
                }
              : null,
            {
              text: "APAGAR MESA",
              style: "destructive",
              onPress: () => {
                apagar(mesa.id);
              },
            },
            {
              text: "CANCELAR",
              style: "destructive",
              onPress: () => {},
            },
          ]
        );
      }}
    >
      <View style={styles.content_container}>
        <View style={styles.icon_container}>
          <Icon name="deck" size={30} />
        </View>
        <View style={styles.table_container}>
          <Text style={{ fontSize: 15 }}>MESA {mesa.numero}</Text>
          <Text
            style={{
              fontSize: 10,
              color:
                mesa._count.comandas == 0 && !mesa.agregada ? "green" : "red",
            }}
          >
            {mesaStatus}
          </Text>
        </View>
        <View style={styles.table_description_container}>
          <Icon name="description" size={25} />
          <Text>{mesa._count.comandas}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#ffff",
    marginTop: 10,
    borderRadius: 7,
  },
  content_container: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    padding: 10,
  },
  icon_container: {
    height: "100%",
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    elevation: 5,
    backgroundColor: "#ececec",
  },
  table_container: {
    height: "100%",
    width: "80%",
    justifyContent: "center",
    padding: 10,
  },
  table_description_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

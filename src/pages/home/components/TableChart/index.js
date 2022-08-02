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

export const TableChart = ({ mesa, index }) => {
  const navigation = useNavigation();
  const { apagar } = useContext(RestauranteContext);
  const { buscar, setMesaId, setQtdeComanda } = useContext(ComandaContext);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        buscar(mesa.id);
        setMesaId(mesa.id);
        setQtdeComanda(mesa._count.comandas);
        navigation.navigate("OrderScreen");
      }}
      onLongPress={() =>
        Alert.alert(
          "Deseja apagar essa mesa?",
          "Todas as informações serão perdidas.",
          [
            { text: "NÃO", style: "cancel", onPress: () => {} },
            {
              text: "APAGAR",
              style: "destructive",
              onPress: () => {
                apagar(mesa.id);
              },
            },
          ]
        )
      }
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
              color: mesa._count.comandas == 0 ? "green" : "red",
            }}
          >
            {mesa._count.comandas == 0 ? "DISPONÍVEL" : "OCUPADO"}
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

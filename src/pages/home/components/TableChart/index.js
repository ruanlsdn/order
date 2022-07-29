import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { ComandaContext } from "../../../../contexts/comanda";

export const TableChart = ({ id, numero }) => {
  const navigation = useNavigation();
  const { buscar, setMesaId } = useContext(ComandaContext);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        buscar(id);
        setMesaId(id);
        navigation.navigate("OrderScreen");
      }}
    >
      <View style={styles.content_container}>
        <View style={styles.icon_container}>
          <Icon name="tapas" size={30} />
        </View>
        <View style={styles.table_container}>
          <Text>Mesa {numero}</Text>
          <Text>Disponível</Text>
        </View>
        <View style={styles.table_description_container}>
          <Icon name="description" size={25} />
          <Text>1</Text>
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

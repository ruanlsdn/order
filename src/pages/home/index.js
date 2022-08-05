import { useIsFocused } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext } from "../../contexts/auth";
import { RestauranteContext } from "../../contexts/restaurante";
import { MySnackbar } from "./components/snackbar";
import { TableChart } from "./components/TableChart";

export const Home = () => {
  const { user } = useContext(AuthContext);
  const {
    restaurante,
    buscar,
    flag,
    setFlag,
    text,
    visibility,
    setVisibility,
  } = useContext(RestauranteContext);
  const isFocused = useIsFocused();
  const [filter, setFilter] = useState(0);

  const mesasFiltradas = () => {
    if (restaurante != null) {
      switch (filter) {
        case 0:
          return restaurante.mesas;
        case 1:
          return restaurante.mesas.filter((mesa) => mesa._count.comandas == 0);
        case 2:
          return restaurante.mesas.filter((mesa) => mesa._count.comandas > 0);
        default:
          return [];
      }
    }
    return [];
  };

  useEffect(() => {
    buscar(user.restaurante_id);
  }, []);

  useEffect(() => {
    if (isFocused && flag) buscar(user.restaurante_id);
    setFlag(false);
  }, [isFocused, flag]);

  return restaurante == null ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Não há mesas.</Text>
    </View>
  ) : (
    <>
      <View style={styles.categories_container}>
        <TouchableOpacity
          style={styles.categories}
          onPress={() => setFilter(0)}
        >
          <Text style={styles.categories_text}>TODAS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categories}
          onPress={() => setFilter(1)}
        >
          <Text style={styles.categories_text}>DISPONÍVEL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categories}
          onPress={() => setFilter(2)}
        >
          <Text style={styles.categories_text}>OCUPADO</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {mesasFiltradas().map((mesa, i) => (
          <TableChart key={mesa.id} mesa={mesa} index={i} />
        ))}
      </ScrollView>

      <MySnackbar
        text={text}
        visible={visibility}
        setVisibility={setVisibility}
      />
    </>
  );
};

const styles = StyleSheet.create({
  categories_container: {
    height: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  categories: {
    height: 40,
    width: 120,
    borderRadius: 5,
    backgroundColor: "#3a6dff",
    alignItems: "center",
    justifyContent: "center",
  },
  categories_text: {
    color: "#ffff",
  },
});

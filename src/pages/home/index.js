import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
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
  const navigation = useNavigation();

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

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        const action = e.data.action;

        e.preventDefault();

        Alert.alert(
          "Deseja sair de sua conta?",
          "Você será redirecionado para a tela de login.",
          [
            {
              text: "Não",
              style: "cancel",
              onPress: () => {},
            },
            {
              text: "Sair",
              style: "destructive",
              onPress: () => {
                navigation.dispatch(action);
                const promise = async () => {
                  await AsyncStorage.setItem("@isLoggedIn", "false");
                  await AsyncStorage.multiRemove(["@nome", "@senha"]);
                };
                promise();
              },
            },
          ]
        );
      }),
    [navigation]
  );

  useEffect(() => {
    if (isFocused || flag) buscar(user.restaurante_id);
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
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  categories: {
    height: 30,
    width: 100,
    borderRadius: 5,
    backgroundColor: "#3a6dff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 7,
  },
  categories_text: {
    fontSize: 11,
    color: "#ffff",
  },
});

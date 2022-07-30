import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { ProdutoContext } from "../../../contexts/produto";
import { RestauranteContext } from "../../../contexts/restaurante";
import { MenuHeaderCategories } from "./menu-header-categories";

export const MenuHeader = () => {
  const [text, setText] = useState("");
  const { restaurante } = useContext(RestauranteContext);
  const { categorias, buscarPeloNome } = useContext(ProdutoContext);

  return (
    <View style={styles.container}>
      <View style={styles.search_bar_container}>
        <TextInput
          activeOutlineColor="black"
          placeholder="Pesquisar..."
          style={styles.text_input}
          mode="outlined"
          value={text}
          onChangeText={(text) => setText(text)}
          right={
            <TextInput.Icon
              style={{ marginTop: 15 }}
              onPress={() => buscarPeloNome(text, restaurante.id)}
              name="magnify"
            />
          }
        />
      </View>
      <View style={{ height: 100, padding: 5 }}>
        <ScrollView horizontal>
          <MenuHeaderCategories categoria={{ descricao: "TODOS" }} />
          {categorias.map((categoria, i) => (
            <MenuHeaderCategories key={i} categoria={categoria} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginTop: 10,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#ffff",
    borderRadius: 5,
  },
  search_bar_container: {
    marginTop: 5,
    height: 50,
    width: "95%",
    display: "flex",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
  },
  text_input: {
    width: "100%",
    height: 40,
  },
  button: {
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});

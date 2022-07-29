import React, { useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ProdutoContext } from "../../../contexts/produto";
import { MenuBodyRow } from "./menu-body-row";

export const MenuBody = () => {
  const { produtos } = useContext(ProdutoContext);
  return (
    <ScrollView
      style={{ flex: 1, width: "95%", alignSelf: "center" }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {produtos.map((produto) => (
        <MenuBodyRow key={produto.id} produto={produto} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#ffff",
  },
  content_container: {
    backgroundColor: "#ececec",
    marginVertical: 10,
    width: "95%",
    alignSelf: "center",
  },
});

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MenuBodyRowModal } from "./modal";

export const MenuBodyRow = ({ produto }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <>
        <TouchableOpacity
          style={styles.container}
          onPress={() => setShowModal(true)}
        >
          <View style={styles.content_container}>
            <View style={styles.icon_container}>
              <Icon name="tapas" size={25} />
            </View>
            <View style={styles.product_description}>
              <Text style={{ fontSize: 14 }}>{produto.descricao} </Text>
              <Text style={{ fontSize: 10, color: "#828282" }}>
                {produto.Categoria.descricao}{" "}
              </Text>
            </View>
            <View style={styles.form}>
              <Text style={{ fontSize: 15 }}>Preço</Text>
              <Text style={{ fontSize: 12, color: "#828282" }}>
                R$ {Number(produto.preco).toFixed(2)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
      <MenuBodyRowModal
        show={showModal}
        produto={produto}
        setShowModal={setShowModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "#ffff",
    marginTop: 10,
    borderRadius: 7,
  },
  content_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  icon_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ececec",
    height: 40,
    width: 40,
    marginHorizontal: 10,
    elevation: 7,
    borderRadius: 5,
  },
  product_description: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },
  form: {
    display: "flex",
    alignItems: "flex-end",
  },
});

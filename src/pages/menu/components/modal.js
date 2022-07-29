import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import React, { useContext, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { PedidoContext } from "../../../contexts/pedido";
import { buscarComanda } from "../../../services/api";
import { ComandaContext } from "../../../contexts/comanda";

export const MenuBodyRowModal = ({ show, setShowModal, produto }) => {
  const [text, setText] = useState("1");
  const { novo } = useContext(PedidoContext);
  const { mesaId } = useContext(ComandaContext);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        setShowModal(!show);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>ADICIONAR PRODUTO</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              setShowModal(!show);
              setText("1");
            }}
          >
            <Text style={styles.textStyle}>X</Text>
          </Pressable>
          <View style={styles.modalBody}>
            <View style={styles.description}>
              <Icon name="grading" size={50} />
              <View
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <View style={{ width: "80%" }}>
                  <Text>{produto.descricao}</Text>
                  <Text>{produto.Categoria.descricao}</Text>
                </View>
                <View
                  style={{
                    width: "20%",
                    justifyContent: "center",
                  }}
                >
                  <Text>Unidade</Text>
                  <Text>R$ {Number(produto.preco).toFixed(2)}</Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "flex-end",
                  marginLeft: 15,
                }}
              >
                <Text>Quant.</Text>
                <Text>{text}</Text>
              </View>
            </View>
            <View
              style={{
                height: "30%",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={styles.btn_qtd}
                onPress={() => setText((Number(text) - 1).toString())}
              >
                <Text
                  style={{
                    color: "#ffff",
                    fontSize: 20,
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>
              <TextInput
                activeOutlineColor="black"
                value={text}
                mode="outlined"
                style={{ height: 30, width: 50 }}
                disabled
              />
              <TouchableOpacity
                style={styles.btn_qtd}
                onPress={() => setText((Number(text) + 1).toString())}
              >
                <Text style={{ color: "#ffff", fontSize: 20 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btn_add}
            onPress={() => {
              novo(text, produto.id);
              setShowModal(!show);
              setText("1");
              buscarComanda(mesaId);
            }}
          >
            <Text style={{ color: "#ffff" }}>CONFIRMAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: 300,
    width: "95%",
    margin: 20,
    backgroundColor: "#ffff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    position: "absolute",
    top: 1,
    right: 1,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 20,
    textAlign: "center",
  },
  modalBody: {
    display: "flex",
    flexDirection: "column",
    height: "95%",
    width: 375,
    alignItems: "center",
  },
  description: {
    marginTop: 30,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  btn_add: {
    position: "absolute",
    bottom: 30,
    height: "15%",
    width: "100%",
    backgroundColor: "#3a6dff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btn_qtd: {
    marginHorizontal: 10,
    backgroundColor: "#3a6dff",
    height: 30,
    width: 30,
    borderRadius: 100,
    alignItems: "center",
  },
});

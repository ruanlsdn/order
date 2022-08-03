import React, { useContext, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import { ComandaContext } from "../../../contexts/comanda";

export const NovaComandaModal = ({ show }) => {
  const [text, setText] = useState("");
  const { criar, setShowNovaComandaModal } = useContext(ComandaContext);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        setShowNovaComandaModal(!show);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>NOVA COMANDA</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              setShowNovaComandaModal(false);
            }}
          >
            <Text style={styles.textStyle}>X</Text>
          </Pressable>
          <View style={styles.modalBody}>
            <View style={styles.description}>
              <View
                style={{
                  height: 70,
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>Informe o nome do novo cliente:</Text>
                <TextInput
                  activeOutlineColor="black"
                  value={text}
                  mode="outlined"
                  onChangeText={(text) => {
                    setText(text);
                  }}
                  style={{ height: 30, width: "100%" }}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btn_add}
            onPress={() => {
              criar(text);
              setShowNovaComandaModal(false);
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
    height: 200,
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
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  btn_add: {
    position: "absolute",
    bottom: 30,
    height: "25%",
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

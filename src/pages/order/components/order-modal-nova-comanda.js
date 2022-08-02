import React, { useContext, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Checkbox,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/Feather";
import { ComandaContext } from "../../../contexts/comanda";
import { TextInput } from "react-native-paper";

export const ComandaModal = ({ show }) => {
  const { comandas, calcular, setShowComandaModal, dividirCriar } =
    useContext(ComandaContext);
  const [comanda, setComanda] = useState(null);
  const [text, setText] = useState("1");
  const [total, setTotal] = useState(Number("0").toFixed(2));

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        setShowComandaModal(!show);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>DIVIDIR COMANDA</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              setShowComandaModal(!show);
            }}
          >
            <Text style={styles.textStyle}>X</Text>
          </Pressable>
          <View style={styles.modalBody}>
            <View style={{ backgroundColor: "red" }}>
              <Text>Selecione qual comanda será dividida:</Text>
              <SelectDropdown
                data={comandas}
                buttonStyle={{
                  height: 35,
                  width: "90%",
                  borderRadius: 5,
                  borderWidth: 1,
                }}
                buttonTextStyle={{ fontSize: 15 }}
                rowStyle={{ height: 40 }}
                rowTextStyle={{ fontSize: 15, alignContent: "flex-start" }}
                dropdownStyle={{ borderRadius: 5 }}
                renderDropdownIcon={(isOpened) =>
                  isOpened ? (
                    <Icon name="chevron-up" size={25} />
                  ) : (
                    <Icon name="chevron-down" size={25} />
                  )
                }
                onSelect={(comanda, i) => setComanda(comanda)}
                rowTextForSelection={(comanda, i) =>
                  `COMANDA ${i + 1} - ${comanda.cliente}`
                }
                buttonTextAfterSelection={(comanda, i) =>
                  `COMANDA ${i + 1} - ${comanda.cliente}`
                }
              />
            </View>
            <ScrollView style={{ width: "100%" }}>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: "#ececec",
                  height: 510,
                  width: "100%",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                {dividirCriar ? (
                  <Text>Body</Text>
                ) : (
                  <>
                    <Text>
                      Informe para quantas pessoas a comanda será dividida:{" "}
                    </Text>
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <TouchableOpacity
                        style={styles.btn_qtd}
                        onPress={async () => {
                          setText((Number(text) - 1).toString());
                          setTotal(
                            Number((await calcular(comanda.id)) / text).toFixed(
                              2
                            )
                          );
                        }}
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
                        onPress={async () => {
                          setText((Number(text) + 1).toString());
                          setTotal(
                            Number((await calcular(comanda.id)) / text).toFixed(
                              2
                            )
                          );
                        }}
                      >
                        <Text style={{ color: "#ffff", fontSize: 20 }}>+</Text>
                      </TouchableOpacity>
                    </View>
                    <Text>{`O valor dessa comanda dividido para ${text} pessoas é de R$ ${total} para cada.`}</Text>
                  </>
                )}
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.btn_add} onPress={() => {}}>
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
    height: "90%",
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
    height: "100%",
    width: 375,
    alignItems: "center",

    // backgroundColor: "red",
  },
  description: {
    marginTop: 30,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "blue",
  },

  btn_add: {
    position: "absolute",
    bottom: 30,
    height: 40,
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

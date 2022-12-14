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
import { OrderModalRow } from "./order-modal-row";

export const DividirComandaModal = ({ show }) => {
  const {
    comandaId,
    setComandaId,
    comandas,
    setShowDividirComandaModal,
    dividirCriar,
    dividir,
    finalizar,
  } = useContext(ComandaContext);
  const [comanda, setComanda] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const [text, setText] = useState("1");
  const [cliente, setCliente] = useState("");
  let sum = comanda ? Number(comanda.total / text).toFixed(2) : "0.00";

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        setShowDividirComandaModal(!show);
        setComanda(null);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>DIVIDIR COMANDA</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              setShowDividirComandaModal(!show);
              setComanda(null);
              setText("1");
              setCliente("");
              setPedidos([]);
            }}
          >
            <Text style={styles.textStyle}>X</Text>
          </Pressable>
          <View style={styles.modalBody}>
            <View style={{ marginTop: 10, alignItems: "center" }}>
              {dividirCriar ? (
                <>
                  <Text style={{ fontSize: 15, textAlign: "center" }}>
                    Informe o nome do novo cliente:
                  </Text>
                  <TextInput
                    activeOutlineColor="black"
                    value={cliente}
                    mode="outlined"
                    onChangeText={(text) => {
                      setCliente(text);
                    }}
                    style={{
                      height: 30,
                      width: 330,
                      textAlign: "center",
                      marginBottom: 5,
                    }}
                  />
                </>
              ) : null}
              <Text style={{ fontSize: 15, textAlign: "center" }}>
                Selecione qual comanda ser?? dividida:
              </Text>
              <SelectDropdown
                data={comandas}
                buttonStyle={{
                  height: 35,
                  width: "90%",
                  borderRadius: 5,
                  borderWidth: 1,
                }}
                buttonTextStyle={{ fontSize: 15 }}
                defaultButtonText={"Toque para ver as comandas"}
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
                onSelect={async (comanda, i) => {
                  setPedidos(comanda.pedidos);
                  setComandaId(comanda.id);
                  setComanda(comanda);
                }}
                rowTextForSelection={(comanda, i) =>
                  `COMANDA ${i + 1} - ${comanda.cliente}`
                }
                buttonTextAfterSelection={(comanda, i) =>
                  `COMANDA ${i + 1} - ${comanda.cliente}`
                }
              />
              {dividirCriar ? null : (
                <>
                  <Text
                    style={{ fontSize: 15, textAlign: "center", marginTop: 10 }}
                  >
                    Informe para quantas pessoas a comanda ser?? dividida:
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
                      onPress={() => {
                        setText((Number(text) - 1).toString());
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
                      style={{ height: 30, width: 50, textAlign: "center" }}
                      disabled
                    />
                    <TouchableOpacity
                      style={styles.btn_qtd}
                      onPress={() => {
                        setText((Number(text) + 1).toString());
                      }}
                    >
                      <Text style={{ color: "#ffff", fontSize: 20 }}>+</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
            <ScrollView style={{ width: "100%", marginTop: 15 }}>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: "#ececec",
                  height: !dividirCriar ? 180 : 210,
                  width: "100%",
                  alignSelf: "center",
                  justifyContent: !dividirCriar ? "center" : null,
                }}
              >
                {dividirCriar ? (
                  pedidos.map((pedido) => (
                    <OrderModalRow key={pedido.id} item={pedido} />
                  ))
                ) : (
                  <>
                    {comanda ? (
                      <>
                        <Text
                          style={{ textAlign: "center", fontSize: 18 }}
                        >{`O valor dessa comanda dividido para ${text} pessoas ?? de R$ ${sum} para cada.`}</Text>
                      </>
                    ) : null}
                  </>
                )}
              </View>
            </ScrollView>
          </View>
          {dividirCriar ? (
            <TouchableOpacity
              style={styles.btn_add}
              onPress={() => {
                dividir(cliente);
                setShowDividirComandaModal(!show);
                setComanda(null);
                setCliente("");
                setPedidos([]);
                setText("1");
              }}
            >
              <Text style={{ color: "#ffff" }}>CONFIRMAR</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.btn_add}
              onPress={() => {
                finalizar(comandaId);
                setShowDividirComandaModal(!show);
                setComanda(null);
                setCliente("");
                setPedidos([]);
                setText("1");
              }}
            >
              <Text style={{ color: "#ffff" }}>FINALIZAR</Text>
            </TouchableOpacity>
          )}
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
    height: 500,
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

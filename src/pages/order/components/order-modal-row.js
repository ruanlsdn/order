import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ComandaContext } from "../../../contexts/comanda";
import { TextInput, Checkbox, Divider } from "react-native-paper";

export const OrderModalRow = ({ item }) => {
  const { pedidos } = useContext(ComandaContext);
  const [text, setText] = useState("0");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      for (const row of pedidos) {
        if (row.pedidos.pedido_id == item.id) {
          row.pedidos.quantidade = text;
        }
      }
    }
  }, [text]);

  return (
    <>
      <View style={styles.row}>
        <View style={{ marginLeft: 5 }}>
          <Checkbox
            disabled={text == 0 ? true : false}
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
              if (!checked) {
                pedidos.push({
                  quantidade: Number(text),
                  pedido_id: item.id,
                });
              } else {
                for (let index = 0; index < pedidos.length; index++) {
                  if (pedidos[index].pedidos.pedido_id == item.id) {
                    pedidos.splice(index);
                  }
                }
              }
            }}
          />
        </View>

        <View style={{ width: "60%", alignItems: "center" }}>
          <Text>{item.produto.descricao}</Text>
        </View>
        <View
          style={{
            height: "30%",
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {text == 0 ? null : (
            <TouchableOpacity
              style={styles.btn_qtd}
              onPress={() => setText((Number(text) - 1).toString())}
            >
              <Text
                style={{
                  color: "#ffff",
                  fontSize: 18,
                }}
              >
                {"<"}
              </Text>
            </TouchableOpacity>
          )}

          <TextInput
            activeOutlineColor="black"
            value={text}
            mode="outlined"
            style={{ height: 25, width: 35, marginBottom: 6 }}
            disabled
          />
          {text == item.quantidade ? null : (
            <TouchableOpacity
              style={styles.btn_qtd}
              onPress={() => setText((Number(text) + 1).toString())}
            >
              <Text style={{ color: "#ffff", fontSize: 18 }}>{">"}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Divider style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  btn_qtd: {
    marginHorizontal: 10,
    backgroundColor: "#3a6dff",
    height: 25,
    width: 25,
    borderRadius: 100,
    alignItems: "center",
  },
  divider: { height: 3, width: "95%", alignSelf: "center" },
});

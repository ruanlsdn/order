import React, { useContext, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { Order } from "./components/order";
import { ComandaContext } from "../../contexts/comanda";
import { useIsFocused } from "@react-navigation/native";

export const OrderScreen = () => {
  const { comandas, buscar, mesaId, qtdeComanda, flag, setFlag } =
    useContext(ComandaContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused || flag) {
      buscar(mesaId);
    }
    setFlag(false);
  }, [isFocused, flag]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {qtdeComanda == 0 ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 20 }}>Não há comandas.</Text>
        </View>
      ) : (
        comandas.map((comanda, i) => (
          <Order key={comanda.id} comanda={comanda} index={i + 1} />
        ))
      )}
    </ScrollView>
  );
};

import { useIsFocused } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { ComandaContext } from "../../contexts/comanda";
import { MySnackbar } from "../home/components/snackbar";
import { Order } from "./components/order";
import { DividirComandaModal } from "./components/order-modal-dividir-comanda";
import { NovaComandaModal } from "./components/order-modal-nova-comanda";

export const OrderScreen = () => {
  const {
    comandas,
    buscar,
    mesaId,
    qtdeComanda,
    flag,
    setFlag,
    text,
    visibility,
    setVisibility,
    showDividirComandaModal,
    showNovaComandaModal,
  } = useContext(ComandaContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && flag) {
      buscar(mesaId);
      setFlag(false);
    }
  }, [isFocused, flag]);

  return (
    <>
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
      <MySnackbar
        text={text}
        visible={visibility}
        setVisibility={setVisibility}
      />
      <DividirComandaModal show={showDividirComandaModal} />
      <NovaComandaModal show={showNovaComandaModal} />
    </>
  );
};

import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { MenuHeader } from "./menu-header";
import { MenuBody } from "./menu-body";
import { MySnackbar } from "../../home/components/snackbar";
import { PedidoContext } from "../../../contexts/pedido";

export const Menu = () => {
  const { text, visibility, setVisibility } = useContext(PedidoContext);
  return (
    <>
      <MenuHeader />
      <MenuBody />
      <MySnackbar
        text={text}
        visible={visibility}
        setVisibility={setVisibility}
      />
    </>
  );
};

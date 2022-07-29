import { View, Text, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import { Menu } from "./components/menu";
import { ProdutoContext } from "../../contexts/produto";

export const MenuScreen = () => {
  return <Menu />;
};

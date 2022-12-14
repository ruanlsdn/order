import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./src/contexts/auth";
import { ComandaProvider } from "./src/contexts/comanda";
import { PedidoProvider } from "./src/contexts/pedido";
import { ProdutoProvider } from "./src/contexts/produto";
import { RestauranteProvider } from "./src/contexts/restaurante";
import MainStackNavigator from "./src/routes/MainStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RestauranteProvider>
          <ComandaProvider>
            <ProdutoProvider>
              <PedidoProvider>
                <MainStackNavigator />
              </PedidoProvider>
            </ProdutoProvider>
          </ComandaProvider>
        </RestauranteProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

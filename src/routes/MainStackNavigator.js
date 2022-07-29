import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/home";
import { OrderScreen } from "../pages/order";
import { MenuScreen } from "../pages/menu";
import { OrderHeaderRight } from "../pages/order/components/order-header-right";

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: "Mesas" }} />
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{ title: "Comandas", headerRight: OrderHeaderRight }}
      />
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ title: "Cardápio" }}
      />
    </Stack.Navigator>
  );
}

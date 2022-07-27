import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/home";
import { OrderScreen } from "../pages/order";
import { MenuScreen } from "../pages/menu";

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
    </Stack.Navigator>
  );
}

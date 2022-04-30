// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/login";
import Products from "./screens/products";
import Product from "./screens/product";
import Menu from "./screens/menu";
import SignIn from "./screens/signIn";
import InsertProduct from "./screens/insertProduct";

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{ headerBackTitle: "Voltar", title: "Produtos" }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ headerBackTitle: "Voltar", title: "Detalhes do produto" }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerBackTitle: "Voltar", title: "Cadastra-se" }}
        />
        <Stack.Screen
          name="InsertProduct"
          component={InsertProduct}
          options={{ headerBackTitle: "Voltar", title: "Novo Produto" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;

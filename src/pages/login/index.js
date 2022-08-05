import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";
import { AuthContext } from "../../contexts/auth";
import { MySnackbar } from "../home/components/snackbar";

export const Login = () => {
  const { login, text, setVisibility, visibility } = useContext(AuthContext);
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    const promise = async () => {
      console.log(await AsyncStorage.getAllKeys());
      const response = await AsyncStorage.getItem("@isLoggedIn");
      if (response.length == 4) {
        const biometricsResponse = await LocalAuthentication.authenticateAsync({
          promptMessage: "Order",
          disableDeviceFallback: false,
        });
        if (biometricsResponse.success) {
          login(
            await AsyncStorage.getItem("@nome"),
            await AsyncStorage.getItem("@senha")
          );
        }
      }
    };
    promise();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.login_container}>
        <Text style={styles.title}>Bem-vindo de volta</Text>
        <Text>Preencha os campos abaixo para acessar</Text>
        <View
          style={{
            height: 200,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <TextInput
            activeOutlineColor={"black"}
            style={styles.input}
            label={"Nome"}
            mode="outlined"
            onChangeText={(text) => {
              setNome(text);
            }}
          />
          <TextInput
            activeOutlineColor={"black"}
            style={styles.input}
            label={"Senha"}
            mode="outlined"
            onChangeText={(text) => {
              setSenha(text);
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            login(nome, senha);
          }}
        >
          <Text style={styles.button_text}>ACESSAR</Text>
        </TouchableOpacity>
      </View>
      <MySnackbar
        visible={visibility}
        text={text}
        setVisibility={setVisibility}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ececec",
  },
  login_container: {
    padding: 10,
    height: 350,
    width: "95%",
    backgroundColor: "#ffff",
    borderRadius: 7,
    elevation: 7,
  },
  title: { fontSize: 20, fontWeight: "bold" },
  input: {
    height: 40,
  },
  button_text: {
    color: "#ffff",
    fontSize: 15,
  },
  button: {
    width: "95%",
    backgroundColor: "#3a6dff",
    height: 35,
    borderRadius: 5,
    elevation: 7,
    position: "absolute",
    bottom: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

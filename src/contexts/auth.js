import { createContext, useState } from "react";
import { efetuarLogin } from "../services/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [text, setText] = useState("");
  const [visibility, setVisibility] = useState(false);
  const navigation = useNavigation();

  async function login(nome, senha) {
    let funcionario;

    try {
      funcionario = await efetuarLogin({ nome: nome, senha: senha });
      setUser(funcionario);
      const promise = async () => {
        await AsyncStorage.setItem("@isLoggedIn", "true");
        await AsyncStorage.setItem("@nome", nome);
        await AsyncStorage.setItem("@senha", senha);
      };
      promise();
      navigation.navigate("Home");
    } catch (error) {
      setText(`Erro: ${error.message}`);
      setVisibility(true);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: user,
        login,
        text: text,
        visibility: visibility,
        setVisibility,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//  Alert.alert(
//    "Deseja sair de sua conta?",
//    "Você será redirecionado para a tela de login.",
//    [
//      {
//        text: "Não",
//        style: "cancel",
//        onPress: () => {},
//      },
//      {
//        text: "Sair",
//        style: "destructive",
//        onPress: () => {
//          navigation.dispatch(action);
//          reset();
//          const promise = async () => {
//            await AsyncStorage.setItem("@isLoggedIn", "false");
//            await AsyncStorage.multiRemove(["@username", "@password"]);
//          };
//          promise();
//        },
//      },
//    ]
//  );

import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";
 
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
 
  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preencha todos os campos.");
    } else {
      navigation.navigate("HomeScreen");
    }
  };   
 
  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text style={styles.title}>Página de Login</Text>
        <TextInput
          mode="outlined"
          label={"Email"}
          placeholder={"Digite seu e-mail"}
          value={email}
          onChangeText={setEmail}
          style={{ marginBottom: 16 }}
        />
        <TextInput
          mode="outlined"
          label={"Senha"}
          placeholder={"Digite sua senha"}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={{ marginBottom: 16 }}
        />
        {error ? <Text style={styles.text_error}>{error}</Text> : null}
        <Button
          mode={"outlined"}
          onPress={handleLogin}
          style={{ marginBottom: 16 }}
        >
          Login
        </Button>
        <Button
          mode={"contained"}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          Fazer Cadastro
        </Button>
      </View>
    </View>
  );
}
 
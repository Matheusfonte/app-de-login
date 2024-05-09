import { View } from "react-native";
import { styles } from "../config/styles";
import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
 
export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
 
  const handleRegister = () => {
    if (!email || !senha || !repetirSenha) {
      setError("Preencha todos os campos.");
    } else {
      if (senha.length < 8) {
        setError("Senha muito curta.");
      } else {
        if (senha !== repetirSenha) {
          setError("Repita a senha corretamente.");
        } else {
          navigation.navigate("HomeScreen");
        }
      }
    }
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text style={styles.title}>Página de Registro</Text>
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
          placeholder={"Digite sua Senha"}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={{ marginBottom: 16 }}
        />
        <TextInput
          mode="outlined"
          label={"Repetir senha"}
          placeholder={"Repita sua senha"}
          value={repetirSenha}
          onChangeText={setRepetirSenha}
          secureTextEntry
          style={{ marginBottom: 16 }}
        />
        {error ? <Text style={styles.text_error}>{error}</Text> : null}
        <Button
          onPress={handleRegister}
          mode="outlined"
          style={{ marginBottom: 16 }}
        >
          Cadastrar
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Fazer Login
        </Button>
      </View>
    </View>
  );
}
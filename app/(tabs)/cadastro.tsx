import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export default function CadastroScreen() {
  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [senha, setSenha] = useState("");
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");

  const router = useRouter();

  const handleRegister = () => {
    const dadosCadastro = {
      codigo,
      nome,
      sobrenome,
      senha,
      nascimento: `${dia}/${mes}/${ano}`,
    };

    console.log("Dados do usuário:", dadosCadastro);
    router.push("/");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("@/assets/images/freaky.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>
        Agora, vamos fazer de você um membro da Freaky Sneakers.
      </Text>
      <Text style={styles.subtitle}>
        Enviamos um código para seu e-mail cadastrado
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Código*"
        placeholderTextColor="#999"
        value={codigo}
        onChangeText={setCodigo}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.inputHalf]}
          placeholder="Nome*"
          placeholderTextColor="#999"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={[styles.input, styles.inputHalf]}
          placeholder="Sobrenome*"
          placeholderTextColor="#999"
          value={sobrenome}
          onChangeText={setSobrenome}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Senha*"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Text style={styles.passwordRules}>
        • Mínimo de 8 caracteres {"\n"}
        • Deve conter letras maiúsculas, minúsculas e um número
      </Text>

      <Text style={styles.label}>Data de Nascimento</Text>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.inputThird]}
          placeholder="Dia*"
          placeholderTextColor="#999"
          value={dia}
          onChangeText={setDia}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.inputThird]}
          placeholder="Mês*"
          placeholderTextColor="#999"
          value={mes}
          onChangeText={setMes}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.inputThird]}
          placeholder="Ano*"
          placeholderTextColor="#999"
          value={ano}
          onChangeText={setAno}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
    alignItems: "center",
    padding: 20,
    paddingBottom: 40,
  },
  logo: {
    width: 180,
    height: 90,
    marginBottom: 25,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 10,
    width: "90%",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
    width: "90%",
  },
  input: {
    width: "91%",
    maxWidth: 400,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    maxWidth: 400,
  },
  inputHalf: {
    width: "48%",
  },
  inputThird: {
    width: "30%",
  },
  passwordRules: {
    fontSize: 12,
    color: "#fff",
    textAlign: "left",
    width: "90%",
    maxWidth: 400,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center", 
    width: "100%",
    marginTop: 5,
    marginBottom: 10,
  },
  
  button: {
    width: "100%",
    maxWidth: 400,
    height: 50,
    backgroundColor: "#7D26CD",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

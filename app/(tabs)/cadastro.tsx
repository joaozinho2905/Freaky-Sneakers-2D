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

export default function CadastroScreen() {
  // Estados para armazenar dados do formulário
  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [senha, setSenha] = useState("");
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");

  // Função chamada ao clicar em "Cadastrar"
  const handleRegister = () => {
    const dadosCadastro = {
      codigo,
      nome,
      sobrenome,
      senha,
      nascimento: `${dia}/${mes}/${ano}`,
    };

    console.log("Dados do usuário:", dadosCadastro);
    // Aqui você poderia enviar os dados para sua API
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image
        source={require("@/assets/images/freaky.png")}
        style={styles.logo}
      />

      {/* Título e subtítulo */}
      <Text style={styles.title}>
        Agora, vamos fazer de você um membro da Freaky Sneakers.
      </Text>
      <Text style={styles.subtitle}>
        Enviamos um código para seu e-mail cadastrado
      </Text>

      {/* Campo de código */}
      <TextInput
        style={styles.input}
        placeholder="Código*"
        placeholderTextColor="#999"
        value={codigo}
        onChangeText={setCodigo}
      />

      {/* Nome e Sobrenome lado a lado */}
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

      {/* Campo de senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha*"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Regras de senha */}
      <Text style={styles.passwordRules}>
        • Mínimo de 8 caracteres {"\n"}
        • Deve conter letras maiúsculas, minúsculas e um número
      </Text>

      {/* Data de nascimento */}
      <Text style={styles.label}>Data de nascimento</Text>
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

      {/* Botão de cadastro */}
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
  },

  // Logo
  logo: {
    width: 150,
    height: 80,
    marginBottom: 20,
    resizeMode: "contain",
  },

  // Textos principais
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },

  // Inputs
  input: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
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
  },
  inputHalf: {
    width: "48%",
  },
  inputThird: {
    width: "30%",
  },

  //regras da senha
  passwordRules: {
    fontSize: 12,
    color: "#fff",
    textAlign: "left",
    width: "90%",
    marginBottom: 20,
  },

  //data de nascimento
  label: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginBottom: 10,
    color: "#000",
  },

  // Botão
  button: {
    width: "20%",
    height: 50,
    backgroundColor: "#7D26CD",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 700,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

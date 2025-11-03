import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Dimensions } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push("/cadastro");
  };

  const openPrivacy = () => {
    router.push("/politicaprivacidade");
  };

  const openTerms = () => {
    router.push("/termos");
  };

  return (
    <View style={styles.container}>
      {/* Logo da Freaky Sneakers */}
      <Image
        source={require("@/assets/images/freaky.png")}
        style={styles.logo}
      />

      <Text style={styles.subtitle}>
        Insira seu e-mail para se inscrever 
      </Text>
      <Text style={styles.subtitle}>
        ou entrar.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      {/* Termos e privacidade */}
      <Text style={styles.infoText}>
        Ao continuar, afirmo que concordo com a{" "}
        <Text style={styles.link} onPress={openPrivacy}>
          Política de privacidade
        </Text>{" "}
        e os{" "}
        <Text style={styles.link} onPress={openTerms}>
          Termos de uso
        </Text>{" "}
        da Freaky Sneakers.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // fundo
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  // logo da Freaky
  logo: {
    width: 250,
    height: 100,
    marginBottom: 30,
    resizeMode: "contain",
  },

  // inserir email ou entrar
  subtitle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },

  // email
  input: {
    width: "90%",
    maxWidth: 400,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginTop: 20,
    fontSize: 16,
  },

  // botão continuar
  button: {
    width: "90%",
    maxWidth: 400,
    height: 50,
    backgroundColor: "#7D26CD",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },

  // texto do botão
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  // ao continuar
  infoText: {
    color: "#ccc",
    fontSize: 14,
    textAlign: "center",
    marginTop: 30,
    width: "85%",
  },

  // termos e uso
  link: {
    color: "#fff",
    textDecorationLine: "underline",
  },
});

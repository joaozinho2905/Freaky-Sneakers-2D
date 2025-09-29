import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Linking } from "react-native";
import { Image } from "expo-image";

export default function LoginScreen() {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
  };

  const openPrivacy = () => {
    Linking.openURL(""); //link da página de privacidade//
  };

  const openTerms = () => {
    Linking.openURL("termos.tsx"); //link da pçagina de termos//
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

  //fundo
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  //logo da Freaky//
  logo: {
    width: 300,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
    padding: 100,
  },

  //inseriri email ou entrar//
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },

//email//
  input: {
    width: "40%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  //botão continuar//
  button: {
    width: "10%",
    height: 50,
    backgroundColor: "#7D26CD",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 350,
    marginBottom: 30,
  },

//texto do botão//
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  //ao continuar//
  infoText: {
    color: "#ccc",
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
    width: "80%",
  },

  //termos e uso//
  link: {
    color: "#fff",
    textDecorationLine: "underline",
  },
});

import { View, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function PagamentoScreen() {
  const router = useRouter();
  const { produto } = useLocalSearchParams();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ThemedView style={styles.container}>
        
        {/* Voltar */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ThemedText style={styles.backText}>← Voltar</ThemedText>
        </TouchableOpacity>

        {/* Título */}
        <ThemedText type="title" style={styles.title}>
          Informações de Pagamento
        </ThemedText>

        {/* Produto */}
        <ThemedText style={styles.subtitle}>
          Produto selecionado:
        </ThemedText>

        <ThemedText style={styles.productName}>
          {produto}
        </ThemedText>

        {/* Formulário */}
        <View style={styles.formContainer}>
          
          <ThemedText style={styles.label}>Nome completo</ThemedText>
          <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor="#999" />

          <ThemedText style={styles.label}>Email</ThemedText>
          <TextInput style={styles.input} placeholder="Digite seu email" placeholderTextColor="#999" keyboardType="email-address" />

          <ThemedText style={styles.label}>CPF</ThemedText>
          <TextInput style={styles.input} placeholder="000.000.000-00" placeholderTextColor="#999" keyboardType="numeric" />

          <ThemedText style={styles.label}>Endereço</ThemedText>
          <TextInput style={styles.input} placeholder="Rua, Nº, Bairro" placeholderTextColor="#999" />

          <ThemedText style={styles.label}>Forma de pagamento</ThemedText>
          <TextInput style={styles.input} placeholder="Ex: Cartão, PIX, Boleto" placeholderTextColor="#999" />
        </View>

        {/* Botão Finalizar */}
        <TouchableOpacity style={styles.finishButton}>
          <ThemedText style={styles.finishButtonText}>Finalizar Compra</ThemedText>
        </TouchableOpacity>

      </ThemedView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  backButton: {
    marginTop: 10,
    marginBottom: 10,
  },
  
  backText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  title: {
    fontSize: 26,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    opacity: 0.8,
  },

  productName: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 25,
  },

  formContainer: {
    width: "100%",
  },

  label: {
    fontSize: 16,
    marginTop: 12,
    marginBottom: 5,
  },

  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    color: "#000",
  },

  finishButton: {
    backgroundColor: "#7D26CD",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 30,
  },

  finishButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
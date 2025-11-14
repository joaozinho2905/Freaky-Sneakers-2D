import { View, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function PagamentoScreen() {
  const router = useRouter();
  const { produto, marca } = useLocalSearchParams();

  const [step, setStep] = useState(3); // Agora estamos no passo "Pagamento"
  const [selectedPayment, setSelectedPayment] = useState("");

  // 🔥 Finaliza o pagamento
  function finalizarPagamento() {
    if (!selectedPayment) {
      Alert.alert("Selecione uma forma de pagamento.");
      return;
    }

    // Aqui você pode integrar API, gerar PIX, boleto etc.
    Alert.alert("Pagamento Finalizado!", "Seu pedido foi concluído com sucesso.");

    router.push("/confirmacao"); // << redireciona para tela de confirmação
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ThemedView style={styles.container}>
        
        {/* Botão Voltar - agora ROXO */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ThemedText style={styles.backText}>← Voltar</ThemedText>
        </TouchableOpacity>

        {/* PASSO A PASSO */}
        <View style={styles.stepsContainer}>
          <Step title="Carrinho" active={step >= 1} />
          <Step title="Entrega" active={step >= 2} />
          <Step title="Pagamento" active={step >= 3} />
          <Step title="Revisão" active={step >= 4} />
        </View>

        {/* TÍTULO */}
        <ThemedText type="title" style={styles.title}>
          Pagamento
        </ThemedText>

        {/* PRODUTO */}
        <View style={styles.productBox}>
          <ThemedText style={styles.productTitle}>Produto:</ThemedText>
          <ThemedText style={styles.productName}>
            {produto} {marca ? `- ${marca.toUpperCase()}` : ""}
          </ThemedText>
        </View>

        {/* OPÇÕES DE PAGAMENTO */}
        <ThemedText style={styles.subtitle}>Escolha o método de pagamento</ThemedText>

        <View style={styles.paymentOptions}>

          <PaymentOption
            name="Cartão de Crédito"
            selected={selectedPayment}
            onPress={() => setSelectedPayment("cartao")}
            id="cartao"
          />

          <PaymentOption
            name="PIX"
            selected={selectedPayment}
            onPress={() => setSelectedPayment("pix")}
            id="pix"
          />

          <PaymentOption
            name="Boleto Bancário"
            selected={selectedPayment}
            onPress={() => setSelectedPayment("boleto")}
            id="boleto"
          />
        </View>

        {/* CAMPOS DINÂMICOS */}
        {selectedPayment === "cartao" && (
          <View>
            <ThemedText style={styles.label}>Número do cartão</ThemedText>
            <TextInput style={styles.input} placeholder="XXXX XXXX XXXX XXXX" />

            <ThemedText style={styles.label}>Nome no cartão</ThemedText>
            <TextInput style={styles.input} placeholder="Nome completo" />

            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={{ flex: 1 }}>
                <ThemedText style={styles.label}>Validade</ThemedText>
                <TextInput style={styles.input} placeholder="MM/AA" />
              </View>
              <View style={{ flex: 1 }}>
                <ThemedText style={styles.label}>CVV</ThemedText>
                <TextInput style={styles.input} placeholder="123" />
              </View>
            </View>
          </View>
        )}

        {selectedPayment === "pix" && (
          <View style={styles.pixBox}>
            <ThemedText style={styles.pixText}>
              Um QR Code será gerado para pagamento imediato.
            </ThemedText>
          </View>
        )}

        {selectedPayment === "boleto" && (
          <View style={styles.pixBox}>
            <ThemedText style={styles.pixText}>
              O boleto terá vencimento de 2 dias úteis.
            </ThemedText>
          </View>
        )}

        {/* FINALIZAR PAGAMENTO */}
        <TouchableOpacity
          disabled={!selectedPayment}
          onPress={finalizarPagamento}
          style={[styles.finishButton, { opacity: selectedPayment ? 1 : 0.4 }]}
        >
          <ThemedText style={styles.finishButtonText}>Finalizar Pagamento</ThemedText>
        </TouchableOpacity>

      </ThemedView>
    </KeyboardAvoidingView>
  );
}


/* COMPONENTES */
function Step({ title, active }: { title: string, active: boolean }) {
  return (
    <View style={styles.step}>
      <View style={[styles.stepCircle, active && styles.stepCircleActive]} />
      <ThemedText style={[styles.stepText, active && styles.stepTextActive]}>
        {title}
      </ThemedText>
    </View>
  );
}

function PaymentOption({ name, selected, onPress, id }: any) {
  const active = selected === id;
  return (
    <TouchableOpacity
      style={[styles.paymentOption, active && styles.paymentOptionActive]}
      onPress={onPress}
    >
      <ThemedText style={[styles.paymentOptionText, active && styles.paymentOptionTextActive]}>
        {name}
      </ThemedText>
    </TouchableOpacity>
  );
}


/* ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  /* Botão Voltar */
  backButton: {
    marginVertical: 10,
    backgroundColor: "#7D26CD",
    padding: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  backText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  /* PASSOS */
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  step: { alignItems: "center" },
  stepCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#aaa",
    marginBottom: 5,
  },
  stepCircleActive: { backgroundColor: "#7D26CD" },
  stepText: { fontSize: 12, color: "#777" },
  stepTextActive: { color: "#7D26CD", fontWeight: "bold" },

  title: { fontSize: 26, marginBottom: 20 },

  productBox: { marginBottom: 20 },
  productTitle: { fontSize: 16, opacity: 0.7 },
  productName: { fontSize: 18, fontWeight: "bold" },

  subtitle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },

  paymentOptions: { gap: 12 },

  paymentOption: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 10,
  },
  paymentOptionActive: {
    backgroundColor: "#7D26CD",
    borderColor: "#7D26CD",
  },
  paymentOptionText: { fontSize: 16 },
  paymentOptionTextActive: { color: "#fff", fontWeight: "bold" },

  label: { fontSize: 16, marginTop: 12, marginBottom: 5 },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    marginBottom: 5,
  },

  pixBox: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  pixText: { opacity: 0.8 },

  finishButton: {
    backgroundColor: "#7D26CD",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 30,
  },
  finishButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

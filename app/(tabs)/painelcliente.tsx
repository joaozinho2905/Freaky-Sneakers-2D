import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7D26CD', dark: '#7D26CD' }}
      headerImage={
        <Image
          source={require('@/assets/images/freaky.png')}
          style={styles.Logo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Painel cliente</ThemedText>
      </ThemedView>

      {/* Collapsible para 'Minha Informações' */}
      <Collapsible title="Minha informações" titleColor="#fff">
        <ThemedText>Atualize suas informações pessoais.</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#ccc"
        />
        <CustomButton
          title="Salvar informações"
          onPress={() => alert("Informações salvas")}
          buttonColor="#9C27B0"
          textColor="#fff"
        />
      </Collapsible>

      {/* Collapsible para 'Histórico de pedidos' */}
      <Collapsible title="Histórico de pedidos" titleColor="#fff">
        <ThemedText>Confira os detalhes dos seus pedidos anteriores.</ThemedText>
        <View style={styles.historyContainer}>
          <ThemedText>Pedido #123 - Status: Enviado</ThemedText>
          <ExternalLink title="Ver detalhes" href="https://www.exemplo.com/pedido/123" />
        </View>
        <View style={styles.historyContainer}>
          <ThemedText>Pedido #124 - Status: Entregue</ThemedText>
          <ExternalLink title="Ver detalhes" href="https://www.exemplo.com/pedido/124" />
        </View>
      </Collapsible>

      {/* Collapsible para 'Formas de pagamento' */}
      <Collapsible title="Formas de pagamento" titleColor="#fff">
        <ThemedText>Gerencie suas formas de pagamento preferidas.</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Digite o número do cartão"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a data de validade"
          placeholderTextColor="#ccc"
        />
        <CustomButton
          title="Adicionar cartão"
          onPress={() => alert("Cartão adicionado")}
          buttonColor="#9C27B0" // Cor de fundo laranja
          textColor="#fff" // Cor do texto branco
        />
      </Collapsible>

      {/* Collapsible para 'Notificações e alertas' */}
      <Collapsible title="Notificações e alertas" titleColor="#fff">
        <ThemedText>Gerencie as notificações e alertas que você deseja receber.</ThemedText>
        <View style={styles.notificationContainer}>
          <CustomButton
            title="Ativar notificações de promoções"
            onPress={() => alert("Promoções ativadas")}
            buttonColor="#9C27B0" // Cor de fundo azul
            textColor="#fff" // Cor do texto branco
          />
          <CustomButton
            title="Ativar alertas de pedidos"
            onPress={() => alert("Alertas de pedidos ativados")}
            buttonColor="#9C27B0" // Cor de fundo amarelo
            textColor="#fff" // Cor do texto branco
          />
        </View>
      </Collapsible>

      {/* Collapsible para 'Suporte ao cliente' */}
      <Collapsible title="Suporte ao cliente" titleColor="#fff">
        <ThemedText>Entre em contato com nossa equipe de suporte.</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Digite sua dúvida ou problema"
          placeholderTextColor="#ccc"
        />
        <CustomButton
          title="Enviar mensagem"
          onPress={() => alert("Mensagem enviada ao suporte")}
          buttonColor="#9C27B0" // Cor de fundo rosa
          textColor="#fff" // Cor do texto branco
        />
      </Collapsible>

      {/* Collapsible para 'Sair' */}
      <Collapsible title="Sair" headerBackgroundColor="#FF0000" titleColor="#fff">
        <ThemedText>Deseja sair da sua conta?</ThemedText>
        <CustomButton
          title="Sair"
          onPress={() => alert("Você foi desconectado")}
          buttonColor="#9C27B0" // Cor de fundo vermelho
          textColor="#fff" // Cor do texto branco
        />
      </Collapsible>

    </ParallaxScrollView>
  );
}

// Componente customizado de botão
const CustomButton = ({ title, onPress, buttonColor, textColor }) => {
  return (
    <TouchableOpacity
      style={[styles.customButton, { backgroundColor: buttonColor }]}
      onPress={onPress}
    >
      <Text style={[styles.customButtonText, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: 'white',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  Logo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingLeft: 10,
    color: '#333',
  },
  historyContainer: {
    marginBottom: 12,
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
  },
  notificationContainer: {
    marginTop: 12,
    gap: 10,
  },
  customButton: {
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  customButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

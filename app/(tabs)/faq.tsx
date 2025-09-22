import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Anton: require('@/assets/fonts/Anton-Regular.ttf'), // caminho para sua fonte
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7D26CD', dark: '#7D26CD' }}
      headerImage={
        <Image
          source={require('@/assets/images/freaky.png')}
          style={styles.reactLogo}
        />
      }
      style={styles.container}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.streetFont}>
          Perguntas Frequentes - Freaky Sneakers
        </ThemedText>
      </ThemedView>

      <ThemedText type="title" style={[styles.question, styles.streetFont]}>
        Produtos são originais?
      </ThemedText>
      <ThemedText style={styles.answer}>
        Sim! Temos 26 anos no mercado e vendemos só produtos 100% originais.
      </ThemedText>

      <ThemedText type="title" style={[styles.question, styles.streetFont]}>
        Posso comprar online e retirar na loja?
      </ThemedText>
      <ThemedText style={styles.answer}>
        Não. Compras online são enviadas só pelos Correios.
      </ThemedText>

      <ThemedText type="title" style={[styles.question, styles.streetFont]}>
        Formas de pagamento?
      </ThemedText>
      <ThemedText style={styles.answer}>Apenas cartão de crédito online.</ThemedText>

      <ThemedText type="title" style={[styles.question, styles.streetFont]}>
        Como trocar ou devolver?
      </ThemedText>
      <ThemedText style={styles.answer}>
        Contato por e-mail vendas@freakysneakers.com ou WhatsApp (41) 1234-5678 com motivo e número do pedido.
      </ThemedText>

      <ThemedText type="title" style={[styles.question, styles.streetFont]}>
        Troca de compra online na loja?
      </ThemedText>
      <ThemedText style={styles.answer}>
        Sim, se o produto estiver sem uso, com embalagem e etiquetas.
      </ThemedText>

      <ThemedText type="title" style={[styles.question, styles.streetFont]}>
        Como acompanhar o pedido?
      </ThemedText>
      <ThemedText style={styles.answer}>Pelo site e notificações por e-mail.</ThemedText>

      <ThemedText type="title" style={[styles.question, styles.streetFont]}>
        Produto não aparece no site, tem na loja?
      </ThemedText>
      <ThemedText style={styles.answer}>
        Se não está no site, está esgotado no estoque online, mas pode ter em lojas físicas.
      </ThemedText>

      <ThemedText type="title" style={[styles.question, styles.streetFont]}>
        Preços no site e lojas são iguais?
      </ThemedText>
      <ThemedText style={styles.answer}>Sim, mesmo preço.</ThemedText>

      <ThemedText type="title" style={[styles.question, styles.streetFont]}>
        Valor cobrado, mas pedido não atualizado?
      </ThemedText>
      <ThemedText style={styles.answer}>
        Análise de segurança pode levar até 72 horas, valor fica reservado.
      </ThemedText>

      <ThemedText type="title" style={[styles.question, styles.streetFont]}>
        Ligação para confirmar dados é segura?
      </ThemedText>
      <ThemedText style={styles.answer}>Sim, é nosso sistema de segurança.</ThemedText>

      <ThemedText type="title" style={[styles.question, styles.streetFont]}>
        Por que meu pedido foi cancelado?
      </ThemedText>
      <ThemedText type="defaultSemiBold" style={styles.answer}>
        Falha na validação de segurança. Revise os dados e tente novamente.
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  question: {
    marginTop: 12,
    color: '#fff',
  },
  answer: {
    marginBottom: 12,
    color: '#ccc',
  },
  streetFont: {
    fontFamily: 'Anton',
  },
});

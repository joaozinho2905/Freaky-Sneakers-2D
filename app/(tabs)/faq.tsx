import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7D26CD', dark: '#7D26CD' }}
      headerImage={
        <Image
          source={require('@/assets/images/freaky.png')}
          style={styles.Logo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>Perguntas Frequentes - Freaky Sneakers</ThemedText>
      </ThemedView>

      <View style={styles.container}>
        <ThemedText style={styles.subtitle}>Produtos são originais?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Sim! Temos 26 anos no mercado e vendemos só produtos 100% originais.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Posso comprar online e retirar na loja?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Não. Compras online são enviadas só pelos Correios.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Formas de pagamento?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Apenas cartão de crédito online.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Como trocar ou devolver?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Contato por e-mail vendas@freakysneakers.com ou WhatsApp (41) 1234-5678 com motivo e número do pedido.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Troca de compra online na loja?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Sim, se o produto estiver sem uso, com embalagem e etiquetas.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Como acompanhar o pedido?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Pelo site e notificações por e-mail.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Produto não aparece no site, tem na loja?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Se não está no site, está esgotado no estoque online, mas pode ter em lojas físicas.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Preços no site e lojas são iguais?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Sim, mesmo preço.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Valor cobrado, mas pedido não atualizado?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Análise de segurança pode levar até 72 horas, valor fica reservado.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Ligação para confirmar dados é segura?</ThemedText>
        <ThemedText style={styles.paragraph}>
          Sim, é nosso sistema de segurança.
        </ThemedText>

        <ThemedText style={styles.subtitle}>Por que meu pedido foi cancelado?</ThemedText>
        <ThemedText style={[styles.paragraph, styles.bold]}>
          Falha na validação de segurança. Revise os dados e tente novamente.
        </ThemedText>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  Logo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#FFFFFF',
  },
  paragraph: {
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  bold: {
    fontWeight: '600',
  },
  container: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
  },
});

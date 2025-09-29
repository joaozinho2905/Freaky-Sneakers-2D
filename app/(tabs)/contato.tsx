import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ContactScreen() {
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
        <ThemedText style={styles.title}>Contato Freaky Sneakers</ThemedText>
      </ThemedView>

      <View style={styles.container}>
        <ThemedText style={styles.subtitle}>Nome</ThemedText>
        <TextInput
          placeholder="Seu nome"
          placeholderTextColor="#ddd"
          style={styles.input}
        />

        <ThemedText style={styles.subtitle}>E-mail</ThemedText>
        <TextInput
          placeholder="seu@email.com"
          placeholderTextColor="#ddd"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <ThemedText style={styles.subtitle}>Mensagem</ThemedText>
        <TextInput
          placeholder="Escreva sua mensagem aqui..."
          placeholderTextColor="#ddd"
          multiline
          numberOfLines={4}
          style={[styles.input, styles.textArea]}
        />

        <TouchableOpacity style={styles.button}>
          <ThemedText style={styles.buttonText}>Enviar</ThemedText>
        </TouchableOpacity>
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
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 18,
    color: '#fff',
    marginTop: 8,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#363636',
    marginTop: 24,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7D26CD',
  },
  container: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
  },
});

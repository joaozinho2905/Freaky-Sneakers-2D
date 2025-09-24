import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
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
          style={styles.reactLogo}
        />
      }>
      
      <ThemedView style={styles.heroContainer}>
        <Text style={styles.slogan}>FreakySneakers</Text>
        <Text style={styles.tagline}>
          Veja nossos catalogos.
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaText}>Comprar</Text>
        </TouchableOpacity>
      </ThemedView>
      

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  heroContainer: {
    padding: 32,
    alignItems: 'center',
    backgroundColor: '#7D26CD',
  },
  slogan: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 12,
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 24,
    lineHeight: 22,
  },
  ctaButton: {
    backgroundColor: '#000',
    paddingHorizontal: 36,
    paddingVertical: 14,
    borderRadius: 30,
  },
  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  gridImage: {
    width: 140,
    height: 180,
    borderRadius: 8,
  },
});
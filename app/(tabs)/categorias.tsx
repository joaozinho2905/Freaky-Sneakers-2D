import { Image } from 'expo-image';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7D26CD', dark: '#7D26CD' }}
      headerImage={
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/freaky.png')}
            style={styles.logo}
          />
        </View>
      }
    >
      <ThemedView style={styles.heroContainer}>
        <Text style={styles.slogan}>Nossas categorias</Text>
      </ThemedView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
        {[
          { name: 'Nike', img: require('@/assets/images/download (3).png') },
          { name: 'New Balance', img: require('@/assets/images/download (2).png') },
          { name: 'Puma', img: require('@/assets/images/download (4).png') },
          { name: 'Adidas', img: require('@/assets/images/download (1).png') },
          { name: 'Olympikus', img: require('@/assets/images/download.png') },
          { name: 'Reebok', img: require('@/assets/images/download (5).png') },
          { name: 'Asics', img: require('@/assets/images/download (6).png') },
          { name: 'Converse', img: require('@/assets/images/download (7).png') },
          { name: 'Vans', img: require('@/assets/images/download (8).png') },
          { name: 'Fila', img: require('@/assets/images/download (9).png') },
        ].map((category, index) => (
          <View key={index} style={styles.categoryCard}>
            <Image
              source={category.img}
              style={styles.categoryImage}
              contentFit="contain"
            />
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>{category.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7D26CD',
    paddingVertical: 20,
    width: '100%',
    height: 200,
  },
  logo: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
  },
  heroContainer: {
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#7D26CD',
    marginBottom: 20,
  },
  slogan: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 12,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
  },
  categoryCard: {
    width: 80,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#fff', // fundo branco para melhor contraste com logos
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButton: {
    backgroundColor: '#7D26CD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
});
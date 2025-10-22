import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

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
        ].map((category, index) => (
          <View key={index} style={styles.categoryCard}>
            <Image
              source={category.img}
              style={styles.categoryImage}
              contentFit="cover"
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
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
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

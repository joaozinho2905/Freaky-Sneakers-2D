import { Image, TouchableOpacity, View } from 'react-native';
import { StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router'; 

export default function TabTwoScreen() {
  const router = useRouter(); 
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 400; // 1 coluna em telas pequenas

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7D26CD', dark: '#7D26CD' }}
      headerImage={
        <Image
          source={require('@/assets/images/freaky.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      }
    >
      {/* Botão de Voltar */}
      <TouchableOpacity
        onPress={() => router.push('/categorias')}
        style={styles.backButton}
      >
        <ThemedText style={styles.backButtonText}>← Voltar</ThemedText>
      </TouchableOpacity>

      {/* Cards de Produtos */}
      <ScrollView
        contentContainerStyle={[
          styles.cardsWrapper,
          { flexDirection: isSmallScreen ? 'column' : 'row' },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {[
          {
            title: 'Puma 180 Branco/Preto',
            image: require('@/assets/images/puma180.png'),
            description: 'R$649,00 Tênis Puma-180 em Branco/Azul Horizon.',
          },
          {
            title: 'Puma Suede XL',
            image: require('@/assets/images/suedexl.png'),
            description: 'R$549,00 Puma Suede XL — ideal para diversas ocasiões.',
          },
          {
            title: 'Puma Skyrocket',
            image: require('@/assets/images/pumasky.png'),
            description: 'R$332,60 Tênis Puma Skyrocket Lite Preto.',
          },
          {
            title: 'Puma Suede Classic',
            image: require('@/assets/images/suedeclassic.png'),
            description: 'R$388,90 Puma Suede Classic ECO Black/White.',
          },
          {
            title: 'Puma Speedcat',
            image: require('@/assets/images/speed.png'),
            description: 'R$799,99 Puma Speedcat Faded Feminino Haute Tropic.',
          },
          {
            title: 'Puma Park Lifestyle',
            image: require('@/assets/images/pumapark.png'),
            description: 'R$499,99 Puma Park Lifestyle Easy Sd BDP em Preto.',
          },
        ].map((product, index) => (
          <ThemedView
            key={index}
            style={[styles.card, { width: isSmallScreen ? '90%' : '48%' }]}
          >
            <View style={styles.imageContainer}>
              <Image source={product.image} style={styles.shoeImage} resizeMode="contain" />
            </View>

            <ThemedText type="subtitle" style={styles.productTitle}>
              {product.title}
            </ThemedText>

            <ThemedText style={styles.productDescription}>
              {product.description}
            </ThemedText>

            <TouchableOpacity style={styles.buyButton}>
              <ThemedText style={styles.buttonText}>Comprar</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        ))}
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  cardsWrapper: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  logo: {
    height: 200,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },

  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
    overflow: 'hidden',
  },

  imageContainer: {
    width: '100%',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  shoeImage: {
    width: '90%',
    height: '100%',
  },

  productTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
    color: '#fff',
  },

  productDescription: {
    fontSize: 14,
    color: '#eee',
    textAlign: 'center',
  },

  buyButton: {
    backgroundColor: '#9C27B0',
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 16,
    width: '80%',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  backButton: {
    backgroundColor: '#7D26CD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
    margin: 16,
  },

  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

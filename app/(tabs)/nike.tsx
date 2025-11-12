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
            title: 'Nike Air Max 90',
            image: require('@/assets/images/airmax90.png'),
            description: 'R$712,90 Tênis Nike Air Max 90 Masculino.',
          },
          {
            title: 'Air Force 1',
            image: require('@/assets/images/AirForce1.png'),
            description: 'R$549,00 Ideal para corrida, com amortecimento responsivo.',
          },
          {
            title: 'Air Max TN',
            image: require('@/assets/images/AirMaxTN.png'),
            description: 'R$664,00 Conforto e estilo para o seu dia a dia.',
          },
          {
            title: 'Air Court Vision',
            image: require('@/assets/images/CourtVision.png'),
            description: 'R$649,90 Tênis Nike Air Max DN para ocasiões especiais.',
          },
          {
            title: 'Nike Dunk Low Preto',
            image: require('@/assets/images/Nikedunk.png'),
            description: 'R$699,90 Nike Dunk Low Preto, feito para seu rolê de semana.',
          },
          {
            title: 'Nike Air Max DN',
            image: require('@/assets/images/NikeDN.png'),
            description: 'R$1.324,90 Tenis Nike Air Max DN SE Masculino.',
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

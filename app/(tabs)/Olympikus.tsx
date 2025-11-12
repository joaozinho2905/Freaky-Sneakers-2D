import { Image, TouchableOpacity } from 'react-native';
import { StyleSheet, ScrollView, useWindowDimensions, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';  

export default function TabTwoScreen() {
  const router = useRouter();  
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 400; // define quando muda para 1 coluna

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
      <TouchableOpacity
        onPress={() => router.push('/categorias')}
        style={styles.backButton}
      >
        <ThemedText style={styles.backButtonText}>← Voltar</ThemedText>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={[
          styles.cardsWrapper,
          { flexDirection: isSmallScreen ? 'column' : 'row' },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {[
          {
            title: 'Olympikus Reflect',
            image: require('@/assets/images/reflect.png'),
            description: 'R$359,90 Tênis Olympikus Reflect Masculino Cinza Preto.',
          },
          {
            title: 'Olympikus Acqua',
            image: require('@/assets/images/acqua.png'),
            description: 'R$299,90 Tênis Olympikus Acqua Feminino.',
          },
          {
            title: 'Olympikus Diffuse 5',
            image: require('@/assets/images/diffuse.png'),
            description: 'R$329,60 Tênis Olympikus Diffuse 5 Masculino.',
          },
          {
            title: 'Olympikus Dynamic',
            image: require('@/assets/images/dynamic.png'),
            description: 'R$299,90 Tênis Masculino Olympikus Dynamic Marinho.',
          },
          {
            title: 'Olympikus Ultraleve',
            image: require('@/assets/images/ultraleve.png'),
            description: 'R$299,29 Tênis Olympikus Ultraleve 130 G Feminino Preto / Rosa.',
          },
          {
            title: 'Olympikus Estilo 2',
            image: require('@/assets/images/estilo.png'),
            description: 'R$229,90 Tênis Olympikus Estilo 2 Feminino.',
          },
        ].map((product, index) => (
          <ThemedView
            key={index}
            style={[
              styles.card,
              { width: isSmallScreen ? '90%' : '48%' },
            ]}
          >
            <View style={styles.imageContainer}>
              <Image source={product.image} style={styles.shoeImage} resizeMode="contain" />
            </View>
            <ThemedText type="subtitle" style={styles.productTitle}>
              {product.title}
            </ThemedText>
            <ThemedText style={styles.productDescription}>{product.description}</ThemedText>
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
    height: 140, // altura fixa agradável e consistente
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

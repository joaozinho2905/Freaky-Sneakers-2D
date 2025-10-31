import { Image, TouchableOpacity } from 'react-native';
import { StyleSheet, ScrollView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const router = useRouter(); 

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

      <ScrollView contentContainerStyle={styles.cardsWrapper} showsVerticalScrollIndicator={false}>
        {[
          {
            title: 'Vans Knu Skool',
            image: require('@/assets/images/KNU.png'),
            description: 'R$549,90 Tênis Vans Knu Skool Navy True White - Retrô',
          },
          {
            title: 'Vans Hylane',
            image: require('@/assets/images/hylane.png'),
            description: 'R$649,90 Tênis Hylane Black White Gum .',
          },
          {
            title: 'Vans Classics Old Skoool',
            image: require('@/assets/images/classics.png'),
            description: 'Classics Old Skool  BLACK/WHITE 1P0S|.',
          },
          {
            title: 'Vans SK8 ',
            image: require('@/assets/images/SK8.png'),
            description: 'R$399,99 Tênis Vans Sk8 Hi Black',
          },
          {
            title: 'Vans Knu Skool',
            image: require('@/assets/images/skool.png'),
            description: 'R$599,90 Tênis Knu Skool Stack Black White.',
          },
          {
            title: 'Vans Skate Estazzo',
            image: require('@/assets/images/estazzo.png'),
            description: 'R$649,90    Tênis Vans Skate Estazzo Black/White.',
          },
        ].map((product, index) => (
          <ThemedView key={index} style={[styles.card]}>
            <Image source={product.image} style={styles.shoeImage} resizeMode="contain" />
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 24,
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
    width: '48%',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },

  shoeImage: {
    width: 200,
    height: 170,
    marginBottom: 12,
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
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 16,
    alignSelf: 'stretch',
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

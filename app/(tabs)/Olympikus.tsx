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
            title: 'Olympikus Reflect ',
            image: require('@/assets/images/reflect.png'),
            description: 'R$359,90 Tênis Olympikus Reflect Masculino Cinza Preto. ',
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
            title: 'Olympikus Dynamic ',
            image: require('@/assets/images/dynamic.png'),
            description: 'R$299,90 Tênis Masculino Olympikus Dynamic Marinho. ',
          },
          {
            title: 'Olympikus Ultraleve ',
            image: require('@/assets/images/ultraleve.png'),
            description: 'R$299,29 Tênis Olympikus Ultraleve 130 G Feminino Preto / Rosa.',
          },
          {
            title: 'Olympikus Estilo 2',
            image: require('@/assets/images/estilo.png'),
            description: 'R$229,90 Tênis Olympikus Estilo 2 Feminino.',
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

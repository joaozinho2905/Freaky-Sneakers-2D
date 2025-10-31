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
            title: 'Fila Recovery',
            image: require('@/assets/images/recovery.png'),
            description: 'Tênis FILA Recovery Feminino Branco, Salmão e Cobre.',
          },
          {
            title: 'Fila Progress',
            image: require('@/assets/images/progress.png'),
            description: 'R$249,90 Tênis Fila Progress Lite Masculino em Promoção.',
          },
          {
            title: 'Fila ACD Classic',
            image: require('@/assets/images/ACD.png'),
            description: 'R$229,29 Tênis FILA ACD Classic Feminino Branco e Azul.',
          },
          {
            title: 'Fila Float Maxxi    ',
            image: require('@/assets/images/Float.png'),
            description: 'R$559,90 Tênis Fila Float Maxxi 2 Masculino Azul / Preto.',
          },
          {
            title: 'Fila Cano Alto',
            image: require('@/assets/images/canoalto.png'),
            description: 'R$399,90 Tênis Branco Cano Alto Unisex M-Squad.',
          },
          {
            title: 'Fila Tormo Classic',
            image: require('@/assets/images/tormo.png'),
            description: 'R$299,90 Tênis Fila Tormo Classic - Polissport.',
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

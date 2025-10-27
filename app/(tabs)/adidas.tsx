import { Image, TouchableOpacity } from 'react-native';
import { StyleSheet, ScrollView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
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
      <ScrollView contentContainerStyle={styles.cardsWrapper} showsVerticalScrollIndicator={false}>
        {[
          {
            title: 'Adidas Superstar',
            image: require('@/assets/images/superstar.png'),
            description: 'R$ 649,00 - Clássico com conforto para o dia a dia.',
          },
          {
            title: 'Adidas Samba',
            image: require('@/assets/images/samba.png'),
            description: 'R$ 549,00 - Ideal para corrida, com amortecimento responsivo.',
          },
          {
            title: 'Adidas Forum Low CI',
            image: require('@/assets/images/Forum.png'),
            description: 'R$ 664,00 - Conforto e estilo para o seu dia a dia.',
          },
          {
            title: 'Adidas ADI2000',
            image: require('@/assets/images/adi2000.png'),
            description: 'R$799,90 Adidas estiloso para saídas e ocasiões especiais e únicas.',
          },
          {
            title: 'Adidas Ultraboost 5',
            image: require('@/assets/images/ultraboost.png'),
            description: 'Tênis Nike Dunk low preto, feito para seu rolê de semana.',
          },
          {
            title: 'Adidas Campus',
            image: require('@/assets/images/campus.png'),
            description: 'R$699,99 Adidas campos feitos para aquelas saídas do dia a dia',
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
    width: 200  ,
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
    backgroundColor: '#7D26CD',
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
});
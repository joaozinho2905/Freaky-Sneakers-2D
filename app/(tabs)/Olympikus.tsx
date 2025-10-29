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
            title: 'Puma 180 Branco/Preto',
            image: require('@/assets/images/puma180.png'),
            description: 'R$ 649,00 Tênis Puma-180 Em Branco/Azul Horizon',
          },
          {
            title: 'Puma Suede Xl',
            image: require('@/assets/images/suedexl.png'),
            description: 'R$ 549,00 - Puma para estar te auxiliando nos suas ocasiões.',
          },
          {
            title: 'Puma Skyrocket',
            image: require('@/assets/images/pumasky.png'),
            description: 'R$332,60 Tênis Puma Skyrocket Lite Preto  .',
          },
          {
            title: 'Puma Suede Classic  ',
            image: require('@/assets/images/suedeclassic.png'),
            description: 'R$388,90 Tênis Puma Suede Classic ECO BLACK/WHITE.',
          },
          {
            title: 'Puma Speedcat ',
            image: require('@/assets/images/speed.png'),
            description: 'R$799,99  Puma Tênis Speedcat Faded Feminino Em Haute Tropic/Alpine Snow.',
          },
          {
            title: 'Puma Park Lifestyle',
            image: require('@/assets/images/pumapark.png'),
            description: ' R$499,99 Puma Tênis Park Lifestyle Easy Sd BDP Em Preto.',
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
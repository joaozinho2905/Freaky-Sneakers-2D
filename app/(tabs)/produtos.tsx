import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7D26CD', dark: '#7D26CD' }}
      headerImage={
        <Image source={require('@/assets/images/freaky.png')} style={styles.reactLogo} />
      }
    >
      <ThemedView style={styles.titleContainer}>
      
      </ThemedView>

      <ThemedView style={[styles.stepContainer, styles.card]}>
        <ThemedText type="subtitle">Tênis em Destaque</ThemedText>
        <ThemedText>
          Confira nossos modelos Nike e Puma com os melhores preços e qualidade.
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.stepContainer, styles.card]}>
        <ThemedText type="subtitle">Nike Air Max 90</ThemedText>

        <Image
          source={require('@/assets/images/airmax90.png')}
          style={styles.shoeImage}
          contentFit="contain"
        />

        <ThemedText>
          R$ 299,00 - Clássico com conforto para o dia a dia.
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.stepContainer, styles.card]}>
        <ThemedText type="subtitle">Adidas Ultraboost 21</ThemedText>
        <ThemedText>
          R$ 349,00 - Ideal para corrida, com amortecimento responsivo.
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.stepContainer, styles.card]}>
        <ThemedText type="subtitle">Puma Runner Pro</ThemedText>
        <ThemedText>
          R$ 279,00 - Leveza e design moderno para suas corridas e treinos.
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.stepContainer, styles.card]}>
        <ThemedText type="subtitle">Super Promoção</ThemedText>
        <ThemedText>
          Tênis Nike Air Max por R$ 299,00! Oferta válida até o fim do estoque.
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.stepContainer, styles.card]}>
        <ThemedText type="subtitle">Depoimentos</ThemedText>
        <ThemedText>
          "Comprei o Nike Air Max e estou apaixonado pelo conforto!" - João
        </ThemedText>
        <ThemedText>
          "Entrega rápida e produto de qualidade, recomendo!" - Maria
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.stepContainer, styles.card]}>
        <ThemedText type="subtitle">Fale Conosco</ThemedText>
        <ThemedText>
          Quer o melhor tênis? Tire suas dúvidas com nossa equipe especializada.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,  
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  card: {
    backgroundColor: '#f9f9f9', 
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, 
  },
  shoeImage: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    marginVertical: 20,
    

  
  },
});

import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7D26CD', dark: '#1D3D47' }}
      headerImage={
        <Image source={require('@/assets/images/freaky.png')} style={styles.reactLogo} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        {/* Pode adicionar título aqui se quiser */}
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Tênis em Destaque</ThemedText>
        <ThemedText>
          Confira nossos modelos Nike e Puma com os melhores preços e qualidade.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Nike Air Max 90</ThemedText>
        <ThemedText>
          R$ 299,00 - Clássico com conforto para o dia a dia.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Adidas Ultraboost 21</ThemedText>
        <ThemedText>
          R$ 349,00 - Ideal para corrida, com amortecimento responsivo.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Puma Runner Pro</ThemedText>
        <ThemedText>
          R$ 279,00 - Leveza e design moderno para suas corridas e treinos.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Super Promoção</ThemedText>
        <ThemedText>
          Tênis Nike Air Max por R$ 299,00! Oferta válida até o fim do estoque.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Depoimentos</ThemedText>
        <ThemedText>
          "Comprei o Nike Air Max e estou apaixonado pelo conforto!" - João
        </ThemedText>
        <ThemedText>
          "Entrega rápida e produto de qualidade, recomendo!" - Maria
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
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
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

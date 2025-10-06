import { Image } from 'expo-image';
import { Platform, StyleSheet, ScrollView } from 'react-native';
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
      <ScrollView contentContainerStyle={styles.cardsWrapper} showsVerticalScrollIndicator={false}>
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
          <ThemedText>R$ 299,00 - Clássico com conforto para o dia a dia.</ThemedText>
        </ThemedView>

        <ThemedView style={[styles.stepContainer, styles.card]}>
          <ThemedText type="subtitle">Adidas Ultraboost 21</ThemedText>
          <Image
            source={require('@/assets/images/adidasultraboost21.png')}
            style={styles.shoeImage}
            contentFit="contain"
          />
          <ThemedText>R$ 549,00 - Ideal para corrida, com amortecimento responsivo.</ThemedText>
        </ThemedView>

        <ThemedView style={[styles.stepContainer, styles.card]}>
          <Image
            source={require('@/assets/images/puma180.png')}
            style={styles.shoeImage}
            contentFit="contain"
          />
          <ThemedText type="subtitle">Puma 180</ThemedText>
          <ThemedText>R$ 664,00 - Conforto e estilo para o seu dia a dia.</ThemedText>
        </ThemedView>

        <ThemedView style={[styles.stepContainer, styles.card]}>
          <Image
            source={require('@/assets/images/AirMaxDN.png')}
            style={styles.shoeImage}
            contentFit="contain"
          />
          <ThemedText type="subtitle">Air Max DN</ThemedText>
          <ThemedText>Tênis Nike Air Max DN perfeito para ocasiões especiais.</ThemedText>
        </ThemedView>

        <ThemedView style={[styles.stepContainer, styles.card]}>
          <Image
            source={require('@/assets/images/Nikedunk.png')}
            style={styles.shoeImage}
            contentFit="contain"
          />
          <ThemedText type="subtitle">Nike Dunk Low Preto</ThemedText>
          <ThemedText>Tênis Nike Dunk low preto, feito para seu rolê de semana.</ThemedText>
        </ThemedView>

        <ThemedView style={[styles.stepContainer, styles.card]}>
          <ThemedText type="subtitle">Fale Conosco</ThemedText>
          <ThemedText>Quer o melhor tênis? Tire suas dúvidas com nossa equipe especializada.</ThemedText>
        </ThemedView>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  cardsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 16,
  },

  stepContainer: {
    gap: 6,
    marginBottom: 16,
  },

  card: {
    flexBasis: '48%', // permite 2 cards por linha em telas menores
    maxWidth: '48%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 6,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 16,
  },

  // Para telas maiores, ajuste o flexBasis para 31% via media query ou outra lógica (se suportar)

  shoeImage: {
    width: '100%',
    aspectRatio: 1.6, // manter proporção largura:altura, exemplo 16:10
    borderRadius: 10,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});

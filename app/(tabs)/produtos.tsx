import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
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
        {/* Conteúdo do título, se necessário */}
      </ThemedView>

      <ThemedView style={[styles.stepContainer, styles.card]}>
        <ThemedText style={styles.text} type="subtitle">Tênis em Destaque</ThemedText>
        <ThemedText style={styles.text}>
          Confira nossos modelos Nike e Puma com os melhores preços e qualidade.
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.stepContainer, styles.card]}>
        <ThemedText style={styles.text} type="subtitle">Nike Air Max 90</ThemedText>

        <Image
          source={require('@/assets/images/airmax90.png')} // Substitua por imagem de fundo transparente ou melhor qualidade
          style={styles.shoeImage}
          contentFit="contain"
        />

        <ThemedText style={styles.text}>
          R$ 299,00 - Clássico com conforto para o dia a dia.
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.stepContainer, styles.card]}>
        <ThemedText style={styles.text} type="subtitle">Adidas Ultraboost 21</ThemedText>

        <Image
          source={require('@/assets/images/adidasultraboost21.png')} // Atualize se necessário
          style={styles.shoeImage}
          contentFit="contain"
        />

        <ThemedText style={styles.text}>
          R$ 349,00 - Ideal para corrida, com amortecimento responsivo.
        </ThemedText>
      </ThemedView>

      <ThemedView style={[styles.stepContainer, styles.card]}>
        <Image
          source={require('@/assets/images/puma180.png')} // Atualize se necessário
          style={styles.shoeImage}
          contentFit="contain"
        />
        <ThemedText style={styles.text} type="subtitle">Puma 180</ThemedText>
        <ThemedText style={styles.text}>
          R$ 664,00 - Conforto e estilo para o seu dia a dia.
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

  text: {
    color: "#FFFFFF",
    fontSize: 16,
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
    backgroundColor: '#363636', 
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  shoeImage: {
    width: '100%',
    height: 500,
    borderRadius: 10,
    marginVertical: 20,
  },
});

import { Image, TouchableOpacity } from 'react-native';
import { Platform, StyleSheet, ScrollView } from 'react-native';
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
                  style={styles.Logo}
              />
          }>
      <ScrollView contentContainerStyle={styles.cardsWrapper} showsVerticalScrollIndicator={false}>
        
        <ThemedView style={[styles.stepContainer, styles.card]}>
          <ThemedText type="subtitle">Nike Air Max 90</ThemedText>
          <Image
            source={require('@/assets/images/airmax90.png')}
            style={styles.shoeImage}
            
          />
          <ThemedText>R$ 299,00 - Clássico com conforto para o dia a dia.</ThemedText>
          <TouchableOpacity style={styles.buyButton}>
            <ThemedText style={styles.buttonText}>Comprar</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={[styles.stepContainer, styles.card]}>
          <ThemedText type="subtitle">Air Force 1</ThemedText>
          <Image
            source={require('@/assets/images/AirForce1.png')}
            style={styles.shoeImage}
           
          />
          <ThemedText>R$ 549,00 - Ideal para corrida, com amortecimento responsivo.</ThemedText>
          <TouchableOpacity style={styles.buyButton}>
            <ThemedText style={styles.buttonText}>Comprar</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={[styles.stepContainer, styles.card]}>
          <Image
            source={require('@/assets/images/AirMaxTN.png')}
            style={styles.shoeImage}
           
          />
          <ThemedText type="subtitle">Air Max TN</ThemedText>
          <ThemedText>R$ 664,00 - Conforto e estilo para o seu dia a dia.</ThemedText>
          <TouchableOpacity style={styles.buyButton}>
            <ThemedText style={styles.buttonText}>Comprar</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={[styles.stepContainer, styles.card]}>
          <Image
            source={require('@/assets/images/AirMaxDN.png')}
            style={styles.shoeImage}

          />
          <ThemedText type="subtitle">Air Max DN</ThemedText>
          <ThemedText>Tênis Nike Air Max DN perfeito para ocasiões especiais.</ThemedText>
          <TouchableOpacity style={styles.buyButton}>
            <ThemedText style={styles.buttonText}>Comprar</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={[styles.stepContainer, styles.card]}>
          <Image
            source={require('@/assets/images/Nikedunk.png')}
            style={styles.shoeImage}

          />
          <ThemedText type="subtitle">Nike Dunk Low Preto</ThemedText>
          <ThemedText>Tênis Nike Dunk low preto, feito para seu rolê de semana.</ThemedText>
          <TouchableOpacity style={styles.buyButton}>
            <ThemedText style={styles.buttonText}>Comprar</ThemedText>
          </TouchableOpacity>
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

  Logo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },  

  
  stepContainer: {
    gap: 6,
    marginBottom: 16,
  },

  card: {
    flexBasis: '48%', 
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

    shoeImage: {
      width: '100%',
      aspectRatio: 1.6,
      borderRadius: 10,
      resizeMode: 'contain',
      marginVertical: 10,
    },

    buyButton: {
      backgroundColor: '#7D26CD', 
      paddingVertical: 10,
      paddingHorizontal: 24,
      borderRadius: 30,
      alignItems: 'center',
      marginTop: 12,
    },

    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });


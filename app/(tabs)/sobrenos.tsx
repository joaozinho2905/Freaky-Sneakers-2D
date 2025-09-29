import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';

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
                <ThemedView style={styles.titleContainer}>
                    <ThemedText style={styles.title}>Sobre Nós</ThemedText>
                </ThemedView>
                <View style={styles.container}>
                    <ThemedText style={styles.paragraph}>
                        A Freaky Sneakers é uma marca brasileira fundada em 1999 pelos sócios Eduardo, Jeferson, João, Luiz e Nathan. 
                        Nascemos com a missão de transformar tênis em verdadeiras obras de arte, trazendo modelos personalizados e pintados à mão, cada um feito sob medida para quem valoriza estilo e originalidade.
                    </ThemedText>

                    <ThemedText style={styles.paragraph}>
                        Inspirados pela cultura pop, arte urbana e referências geek, criamos pares exclusivos que carregam identidade e autenticidade. 
                        Nosso diferencial está em oferecer uma experiência única, permitindo que nossos clientes participem do processo criativo, dando vida a tênis que contam histórias e expressam personalidade.
                    </ThemedText>

                    <ThemedText style={styles.paragraph}>
                        Mas não paramos por aí. Além da linha autoral, nossa loja também reúne uma seleção especial das maiores marcas do mercado sneaker, 
                        como <ThemedText style={{ fontWeight: 'bold' }}>Nike, Adidas, Puma, New Balance, Converse, Vans</ThemedText> e muitas outras. 
                        Assim, você encontra desde clássicos atemporais até lançamentos limitados e colaborações exclusivas, tudo em um só lugar.
                    </ThemedText>

                    <ThemedText style={styles.paragraph}>
                        Na Freaky Sneakers, unimos arte, moda e lifestyle urbano para entregar mais do que produtos: entregamos experiências únicas para colecionadores, 
                        fashionistas e todos os amantes da cultura sneaker.
                    </ThemedText>
                </View>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    Logo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    titleContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#7D26CD',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    paragraph: {
        fontSize: 20,
        lineHeight: 28,
        color: '#FFFFFF',
        marginBottom: 16,
    },
    container: {
        padding: 20,
        margin: 10,
        borderWidth: 1, 
        borderColor: 'white', 
        borderRadius: 8, 
    },
});

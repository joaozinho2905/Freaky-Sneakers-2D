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
<ThemedText style={styles.title}>Informações da Loja</ThemedText>
</ThemedView>
<View style={styles.container}>
  <ThemedText style={styles.paragraph}>
    Bem-vindo à nossa loja! Aqui, você encontrará os tênis mais exclusivos e personalizados, feitos sob medida para o seu estilo.
  </ThemedText>

  <ThemedText style={styles.paragraph}>
    Nossa missão é proporcionar uma experiência única, unindo arte, moda e cultura sneaker. Fique à vontade para explorar nossas coleções e entre em contato para mais informações.
  </ThemedText>

  <ThemedText style={styles.paragraph}>
    Caso tenha dúvidas, nossa equipe está sempre disponível para ajudar.
  </ThemedText>

  <ThemedText style={styles.subHeading}>Seleção Exclusiva de Tênis</ThemedText>
  <ThemedText style={styles.paragraph}>
    Na nossa loja, você encontra uma vasta gama de modelos de tênis das marcas mais renomadas e inovadoras. Trabalhamos com lançamentos exclusivos, modelos limitados e edições especiais, tudo pensado para oferecer o melhor do universo sneaker.
  </ThemedText>

  <ThemedText style={styles.subHeading}>Marcas e Estilos</ThemedText>
  <ThemedText style={styles.paragraph}>
    Temos parcerias com grandes marcas como Nike, Adidas, Puma, New Balance, Vans, e muitas outras. Nossa curadoria é feita com base nas últimas tendências do mercado e nas preferências dos nossos clientes.
  </ThemedText>

  <ThemedText style={styles.subHeading}>Atendimento ao Cliente</ThemedText>
  <ThemedText style={styles.paragraph}>
    Nosso time de atendimento está sempre pronto para te ajudar! Se você tiver qualquer dúvida sobre os produtos, tamanhos, formas de pagamento ou precisar de ajuda para escolher o modelo ideal, estamos à disposição.
  </ThemedText>
  <ThemedText style={styles.paragraph}>
    Você pode entrar em contato conosco via chat ao vivo, e-mail ou pelas nossas redes sociais. Além disso, nossa central de atendimento por telefone também está disponível de segunda a sexta-feira, das 9h às 18h.
  </ThemedText>

  <ThemedText style={styles.subHeading}>Política de Trocas e Devoluções</ThemedText>
  <ThemedText style={styles.paragraph}>
    Queremos que você fique completamente satisfeito com sua compra. Caso precise trocar ou devolver um produto, basta seguir nossa política de devolução:
  </ThemedText>
  <ThemedText style={styles.paragraph}>
    - Você tem 7 dias corridos após o recebimento do pedido para realizar a troca ou devolução.
  </ThemedText>
  <ThemedText style={styles.paragraph}>
    - O produto deve estar sem uso, com as etiquetas intactas e em sua embalagem original.
  </ThemedText>
  <ThemedText style={styles.paragraph}>
    - A devolução do valor será realizada conforme a forma de pagamento escolhida na compra.
  </ThemedText>

  <ThemedText style={styles.subHeading}>Frete e Entrega</ThemedText>
  <ThemedText style={styles.paragraph}>
    Oferecemos frete grátis para compras acima de um valor mínimo (especificar valor). Para compras abaixo desse valor, cobramos uma taxa de envio, que varia de acordo com a sua localização.
  </ThemedText>
  <ThemedText style={styles.paragraph}>
    O prazo de entrega pode variar entre 2 a 7 dias úteis, dependendo da sua região. Além disso, você pode acompanhar o status do seu pedido diretamente no nosso site, com o número de rastreio fornecido no momento do envio.
  </ThemedText>

  <ThemedText style={styles.subHeading}>Formas de Pagamento</ThemedText>
  <ThemedText style={styles.paragraph}>
    Aceitamos diversos métodos de pagamento para facilitar a sua compra, incluindo cartão de crédito, boleto bancário, Pix, e transferência bancária. Oferecemos também a opção de parcelamento em até 12 vezes sem juros, (dependendo do valor da compra).
  </ThemedText>

  <ThemedText style={styles.subHeading}>Promoções e Ofertas Especiais</ThemedText>
  <ThemedText style={styles.paragraph}>
    Não deixe de conferir nossas promoções! Temos descontos especiais em modelos selecionados e condições imperdíveis durante datas comemorativas e eventos exclusivos da loja.
  </ThemedText>
  <ThemedText style={styles.paragraph}>
    Fique de olho nas nossas redes sociais para não perder nenhuma novidade!
  </ThemedText>

  <ThemedText style={styles.subHeading}>Contatos</ThemedText>
  <ThemedText style={styles.paragraph}>
    - Endereço físico: Rua Jussara 123
  </ThemedText>
  <ThemedText style={styles.paragraph}>
    - E-mail: FreakySneakers@gmail.com
  </ThemedText>
  <ThemedText style={styles.paragraph}>
    - Telefone: 1234-5678
  </ThemedText>
  <ThemedText style={styles.paragraph}>
    - Redes sociais: Freaky_Sneakers
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
        borderRadius: 10,
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



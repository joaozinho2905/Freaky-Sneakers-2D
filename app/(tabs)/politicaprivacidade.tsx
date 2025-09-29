import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView2';
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
            <ThemedView>
                <ThemedText style={styles.title}>Política de Privacidade da Freaky Sneakers</ThemedText>
            </ThemedView>
            <ThemedText style={styles.subtitle}>Data de última revisão: 29 de setembro de 2025</ThemedText>
            <View style={styles.container}>
                <ThemedText style={styles.paragraph}>
                    A sua privacidade é importante para a Freaky Sneakers. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas
                    informações pessoais quando você acessa e realiza compras em nossa loja online.
                    Ao utilizar nossos serviços, você concorda com os termos descritos nesta Política de Privacidade.
                </ThemedText>
                <ThemedText style={styles.subtitle}>1. Coleta de Informações</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Coletamos informações pessoais para processar suas compras, melhorar nossos serviços e garantir a melhor experiência de compra possível.
                    As informações coletadas podem incluir:
                    1.Informações de Identificação Pessoal: nome, endereço de e-mail, endereço de entrega, número de telefone e dados de pagamento.
                    2.Informações de Navegação: informações sobre como você interage com nosso site, incluindo endereços IP, tipo de dispositivo, navegador, localização
                    geográfica e dados de navegação.
                    3.Cookies: Utilizamos cookies para melhorar sua experiência de navegação, personalizar conteúdos e anúncios, e analisar o tráfego do site.
                </ThemedText>
                <ThemedText style={styles.subtitle}>2. Uso das Informações</ThemedText>
                <ThemedText style={styles.paragraph}>
                    As informações que coletamos são usadas para:
                    1.Processar e gerenciar seus pedidos de compra.
                    2.Melhorar a funcionalidade do nosso site e personalizar sua experiência de navegação.
                    3.Enviar atualizações sobre o status dos seus pedidos, promoções, ofertas e novidades da Freaky Sneakers.
                    4.Prevenir fraudes e proteger a segurança do site e dos dados dos usuários.
                </ThemedText>
                <ThemedText style={styles.subtitle}>3. Compartilhamento de Informações</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:
                    1.Para Processamento de Pagamento: Podemos compartilhar suas informações com empresas de processamento de pagamento para concluir sua compra.
                    2.Para Prestadores de Serviços: Podemos compartilhar informações com prestadores de serviços terceiros que nos auxiliam na operação do nosso site e no envio
                    dos seus pedidos.
                    3.Exigências Legais: Podemos compartilhar suas informações se for necessário para cumprir com uma obrigação legal ou uma solicitação de autoridade competente.
                </ThemedText>
                <ThemedText style={styles.subtitle}>4. Armazenamento e Segurança das Informações</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Adotamos medidas de segurança para proteger as suas informações pessoais contra acesso não autorizado, divulgação, alteração ou destruição.
                    No entanto, nenhum método de transmissão de dados pela internet é 100% seguro, e não podemos garantir a segurança absoluta das informações enviadas.
                </ThemedText>
                <ThemedText style={styles.subtitle}>5. Direitos do Usuário</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Você tem o direito de:
                    1.Acessar seus dados pessoais.
                    2.Corrigir informações incorretas.
                    3.Excluir suas informações.
                    4.Cancelar a inscrição em comunicações promocionais.
                </ThemedText>
                <ThemedText style={styles.subtitle}>6. Cookies</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Os cookies são arquivos que armazenam informações sobre a navegação no site. Nós utilizamos cookies para:
                    1.Identificar e lembrar suas preferências de navegação.
                    2.Monitorar a eficácia de campanhas de marketing.
                    3.Melhorar a funcionalidade do nosso site.
                </ThemedText>
                <ThemedText style={styles.subtitle}>7. Alterações nesta Política de Privacidade</ThemedText>
                <ThemedText style={styles.paragraph}>
                    A Freaky Sneakers pode alterar esta Política de Privacidade de tempos em tempos. Quaisquer modificações serão publicadas nesta página com a data da
                    última atualização.
                    Recomendamos que você revise nossa Política de Privacidade regularmente.
                </ThemedText>
                <ThemedText style={styles.subtitle}>8. Contato</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Se você tiver dúvidas ou preocupações sobre nossa Política de Privacidade ou sobre o tratamento de suas informações pessoais, entre em contato conosco:
                    Freaky Sneakers
                    E-mail: contato@freakysneakers.com
                    Telefone: (12) 3456-7891
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
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 20,
        lineHeight: 24,
        color: '#FFFFFF',
        marginTop: 10,
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

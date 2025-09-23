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
                    <ThemedText style={styles.title}>Termos de uso da Freaky Sneakers</ThemedText>
                </ThemedView>
                <View style={styles.container}>
                <ThemedText style={styles.subtitle}>1. Aceitação dos Termos</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Ao acessar ou utilizar os serviços da Freaky Sneakers, você concorda com os termos e
                    condições descritos neste documento. Caso não concorde com os termos, pedimos que não utilize nossos serviços.
                </ThemedText>
                <ThemedText style={styles.subtitle}>2. Definições</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Freaky Sneakers: Refere-se à empresa proprietária da loja online que oferece produtos de calçados.
                    Usuário: Qualquer pessoa que acesse ou utilize os serviços da Freaky Sneakers.
                    Produtos: Todos os itens comercializados pela Freaky Sneakers, incluindo, mas não se limitando a, tênis e outros produtos relacionados.
                </ThemedText>
                <ThemedText style={styles.subtitle}>3. Uso dos Serviços</ThemedText>
                <ThemedText style={styles.paragraph}>
                    O uso do site, loja online ou qualquer outro serviço da Freaky Sneakers deve ser feito exclusivamente para fins comerciais.
                    O Usuário não poderá utilizar os serviços para realizar ações fraudulentas, abusivas ou ilegais.
                </ThemedText>
                <ThemedText style={styles.subtitle}>4. Cadastro e Conta de Usuário</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Para realizar compras em nossa loja online, o Usuário deverá fornecer informações precisas e completas, conforme solicitado no processo de cadastro.
                    O Usuário é responsável por manter a confidencialidade de sua conta e senha. Qualquer uso não autorizado de sua conta deve ser imediatamente informado à Freaky Sneakers.
                </ThemedText>
                <ThemedText style={styles.subtitle}>5. Produtos e Preços</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Os preços dos produtos estão sujeitos a alterações sem aviso prévio. Todos os produtos estão sujeitos à disponibilidade no estoque.
                    A Freaky Sneakers se reserva o direito de modificar ou descontinuar qualquer produto ou serviço oferecido a qualquer momento, sem aviso prévio.
                </ThemedText>
                <ThemedText style={styles.subtitle}>6. Pagamento</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Os pagamentos devem ser feitos por meio dos métodos de pagamento disponíveis no momento da compra.
                    A Freaky Sneakers não armazena informações sensíveis de pagamento, utilizando plataformas seguras de processamento de pagamento.
                </ThemedText>
                <ThemedText style={styles.subtitle}>7. Entrega e Prazo de Envio</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Os prazos de entrega são estimativas e podem variar de acordo com a localização do Usuário, disponibilidade dos produtos e condições de transporte.
                    A Freaky Sneakers não se responsabiliza por atrasos causados por terceiros (transportadoras, fatores climáticos, etc.).
                </ThemedText>
                <ThemedText style={styles.subtitle}>8. Política de Trocas e Devoluções</ThemedText>
                <ThemedText style={styles.paragraph}>
                    O Usuário tem o direito de solicitar a troca ou devolução dos produtos adquiridos, conforme a Política de Trocas e Devoluções disponível no site.
                    Produtos devem ser devolvidos em sua embalagem original, sem indícios de uso e em perfeitas condições.
                    O prazo para solicitações de devolução ou troca é de 90 após o recebimento do produto.
                </ThemedText>
                <ThemedText style={styles.subtitle}>9. Propriedade Intelectual</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Todos os conteúdos do site da Freaky Sneakers, incluindo, mas não se limitando a, imagens, textos, logotipos, gráficos, marcas e demais materiais, são de propriedade exclusiva da
                    Freaky Sneakers ou de seus licenciadores, sendo protegidos pelas leis de propriedade intelectual. O uso indevido desses materiais é estritamente proibido.
                </ThemedText>
                <ThemedText style={styles.subtitle}>10. Responsabilidade</ThemedText>
                <ThemedText style={styles.paragraph}>
                    A Freaky Sneakers não se responsabiliza por danos indiretos, consequenciais, perda de lucros ou danos decorrentes do uso ou impossibilidade de uso de seus produtos ou serviços.
                    A responsabilidade da Freaky Sneakers está limitada ao valor pago pelo produto adquirido.
                </ThemedText>
                <ThemedText style={styles.subtitle}>11. Privacidade</ThemedText>
                <ThemedText style={styles.paragraph}>
                    A Freaky Sneakers respeita a privacidade de seus usuários.
                    Para mais informações sobre como coletamos, usamos e protegemos suas informações pessoais, consulte nossa Política de Privacidade.
                </ThemedText>
                <ThemedText style={styles.subtitle}>12. Legislação Aplicável</ThemedText>
                <ThemedText style={styles.paragraph}>
                    Este Termo de Uso será regido pelas leis do Brasil.
                    Qualquer disputa decorrente do uso do site será resolvida nos tribunais competentes da cidade de Curitiba, Estado de Paraná.
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
        marginTop: 16,
        color: '#FFFFFF',
    },
    paragraph: {
        fontSize: 20,
        lineHeight: 24,
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

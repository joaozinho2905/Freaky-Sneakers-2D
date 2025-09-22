import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#7D26CD', dark: '#7D26CD' }}
            headerImage={
                <Image
                    source={require('@/assets/images/freaky.png')}
                    style={styles.reactLogo}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Termos de uso</ThemedText>
            </ThemedView>
            <ThemedText></ThemedText>
            <ThemedText></ThemedText>
            <ThemedText type="title">1. Aceitação dos Termos</ThemedText>
            <ThemedText>Ao acessar ou utilizar os serviços da Fraky Sneakers, você concorda com os termos e
                condições descritos neste documento. Caso não concorde com os termos, pedimos que não utilize nossos serviços.</ThemedText>
            <ThemedText type="title">2. Definições</ThemedText>
            <ThemedText>Fraky Sneakers: Refere-se à empresa proprietária da loja online que oferece produtos de calçados.
                Usuário: Qualquer pessoa que acesse ou utilize os serviços da Fraky Sneakers.
                Produtos: Todos os itens comercializados pela Fraky Sneakers, incluindo, mas não se limitando a, tênis e outros produtos relacionados.</ThemedText>
            <ThemedText type="title">3. Uso dos Serviços</ThemedText>
            <ThemedText>O uso do site, loja online ou qualquer outro serviço da Fraky Sneakers deve ser feito exclusivamente para fins comerciais.
                O Usuário não poderá utilizar os serviços para realizar ações fraudulentas, abusivas ou ilegais.</ThemedText>
            <ThemedText type="title">4. Cadastro e Conta de Usuário</ThemedText>
            <ThemedText>Para realizar compras em nossa loja online, o Usuário deverá fornecer informações precisas e completas, conforme solicitado no processo de cadastro.
                O Usuário é responsável por manter a confidencialidade de sua conta e senha. Qualquer uso não autorizado de sua conta deve ser imediatamente informado à Fraky Sneakers.</ThemedText>
            <ThemedText type="title">5. Produtos e Preços</ThemedText>
            <ThemedText>Os preços dos produtos estão sujeitos a alterações sem aviso prévio. Todos os produtos estão sujeitos à disponibilidade no estoque.
                A Fraky Sneakers se reserva o direito de modificar ou descontinuar qualquer produto ou serviço oferecido a qualquer momento, sem aviso prévio.</ThemedText>
            <ThemedText type="title">6. Pagamento</ThemedText>
            <ThemedText>Os pagamentos devem ser feitos por meio dos métodos de pagamento disponíveis no momento da compra.
                A Fraky Sneakers não armazena informações sensíveis de pagamento, utilizando plataformas seguras de processamento de pagamento.</ThemedText>
            <ThemedText type="title">7. Entrega e Prazo de Envio</ThemedText>
            <ThemedText>Os prazos de entrega são estimativas e podem variar de acordo com a localização do Usuário, disponibilidade dos produtos e condições de transporte.
                A Fraky Sneakers não se responsabiliza por atrasos causados por terceiros (transportadoras, fatores climáticos, etc.).</ThemedText>
            <ThemedText type="title">8. Política de Trocas e Devoluções</ThemedText>
            <ThemedText>O Usuário tem o direito de solicitar a troca ou devolução dos produtos adquiridos, conforme a Política de Trocas e Devoluções disponível no site.
                Produtos devem ser devolvidos em sua embalagem original, sem indícios de uso e em perfeitas condições.
                O prazo para solicitações de devolução ou troca é de 90 após o recebimento do produto.</ThemedText>
            <ThemedText type="title">9. Propriedade Intelectual</ThemedText>
            <ThemedText>Todos os conteúdos do site da Fraky Sneakers, incluindo, mas não se limitando a, imagens, textos, logotipos, gráficos, marcas e demais materiais, são de propriedade exclusiva da
                Fraky Sneakers ou de seus licenciadores, sendo protegidos pelas leis de propriedade intelectual. O uso indevido desses materiais é estritamente proibido.</ThemedText>
            <ThemedText type="title">10. Responsabilidade</ThemedText>
            <ThemedText>A Fraky Sneakers não se responsabiliza por danos indiretos, consequenciais, perda de lucros ou danos decorrentes do uso ou impossibilidade de uso de seus produtos ou serviços. 
                A responsabilidade da Fraky Sneakers está limitada ao valor pago pelo produto adquirido.</ThemedText>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Ir para detalhes" onPress={() => navigation.navigate('Detalhes')} />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Detalhes da Tela</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',  // Cor de fundo da barra de navegação
          },
          headerTintColor: '#fff',  // Cor do título e ícones
          headerTitleStyle: {
            fontWeight: 'bold',  // Estilo do título
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Página Inicial' }}
        />
        <Stack.Screen 
          name="Detalhes" 
          component={DetailsScreen} 
          options={{ title: 'Tela de Detalhes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

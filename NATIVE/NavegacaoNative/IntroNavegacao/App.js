import React from 'react';
import { NavigationContainer } from '@react-navigation/native';   // o container é o elemento que vai envolver todas as navegações
import { createStackNavigator  } from '@react-navigation/stack';

//criando o tipo de navegação
const Stack = createStackNavigator();
//dentro do tipo de navegação dev-se colocar as telas
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';


export default function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen 
        name='Home' 
        component={Home}
        options={{
          title: 'inicio',//muda o nome da header
          headerStyle:{ //altera o estilo do header
            backgroundColor: '#121212'
          },
          headerTintColor: '#FFF', //mudar a cor do titulo da header
          headerShown: false,    //desabilita o header
        }}
        
        />

        <Stack.Screen name='Sobre' component={Sobre} />

        <Stack.Screen name='Contato' component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// o initialRouteName define qual a primeira rota ao aplicativo ser carregado
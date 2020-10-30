import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'; //utilizar a navegação para outra tela

export default function Home ()  {

//criando a navegação
const navigation = useNavigation();

    function irSobre () {
        
        //no primeiro parâmetro vc passa o nome da tela pra onde quer ir
        navigation.navigate('Sobre', {nome: 'vitor', email: 'vitor@vitor.com'}); //passando nome da tela e dados
        //a definição na tela app ja se enncarrega do endereço
        //alem disso é possivel passar dados no segundo parâmetro
    }
  
    return (
      <View >
          <Text>HOME</Text>

          <Button 
          title="Ir para Sobre"
          onPress={ irSobre }
           />

      </View>
    )
  }




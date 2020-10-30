import React from 'react'
import { View, Text, Button } from 'react-native';
import {useNavigation, StackActions} from  '@react-navigation/native';
//o import do stack actions é para conseguir fazer com que a página retorne diretamente para a home



export default function Contato ()  {

const navigation = useNavigation();

    

  
    return (
      <View >
          <Text>CONTATO</Text>

          <Button 
          title="Voltar tela"
          onPress={ () => navigation.goBack() }//no exemplo abaixo foi utilizado o navigatio.goBack() para retornar uma página
           />

           <Button
           title="Voltar para home"
           onPress={ () => navigation.dispatch(StackActions.popToTop)} 
           //o popToTop vai fazer voltar ao inicio da pilha, se fo fosse o pop voltaria uma página
           //ele serve principalemnte para zerar a pilha e zerar bugs (principalemnte com o botão de voltar do android)

           />

           
      </View>
    )
  }




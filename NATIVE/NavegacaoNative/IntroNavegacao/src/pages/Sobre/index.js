import React from 'react'
import { View, Text, Button } from 'react-native';
import {useNavigation} from  '@react-navigation/native';


//para recuperar os parâmetro passados pela rota em outra página, é necessário usar a propriedade  {route}
//obs: essa propriedade vale para as telas que estão dentro do navigation e do container
export default function Sobre ({route})  {

const navigation = useNavigation();
//poderia se rutilizado uma função especifica para retornar
// function voltarHome () {    
//     navigation.navigate('Home');
// }
    
//alterando o titulo da header com base nos parâmetros recebidos
navigation.setOptions({
    title: `Sobre ${route.params?.nome}`
})

  
    return (
      <View >
          <Text>SOBRE</Text>

          <Text>{route.params?.nome}</Text>
          <Text>{route.params?.email}</Text>

          {/* a interrogação após o paramas é para garantir que no caso dessa informação
          não estar vindo não ocorra um erro */}

          <Button 
          title="Voltar para Home"
          onPress={ () => navigation.goBack() }//no exemplo abaixo foi utilizado o navigatio.goBack() para retornar uma página
           />

            <Button
            title= "Contato"
            onPress={() => navigation.navigate('Contato')}
           />
      </View>
    )
  }




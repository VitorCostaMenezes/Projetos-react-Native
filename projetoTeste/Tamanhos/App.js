import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (

      <View style={styles.areaPrincipal}>

        {/* realizando um teste */}

        {/* TODAS AS VIEWS ABAIXO DIVIDIRÃO PROPOCIONALMENTE O ESPAÇO DA VIEW PRINCIPAL
        BASEADO NO NUMERO DO FLEX ESTABELECIDO   
        EX:
          flex: 1    // flex: 2   // flex:3
        */}
          <View style={styles.area1}>
              <Text>meu texto aqui</Text>
              <Text>meu texto aqui</Text>
              <Text>meu texto aqui</Text>
              <Text>meu texto aqui</Text>
              <Text>meu texto aqui</Text>
              <Text>meu texto aqui</Text>
              <Text>meu texto aqui</Text>
          </View>

          <View style={styles.area2}></View>
          <View style={styles.area3}></View>
      </View>
    )
      
  }
}

const styles = StyleSheet.create({
  areaPrincipal:{
    backgroundColor: '#222',
    flex: 1,    //faz com que a view aocupe todo o espaço da tela

  },

  //como os estilos abaixo então dentro da view principal, eles dividrião o espaço proporcionalmente
  //ao tamanho do flex establecido em cada um delas
  
//   area1:{
//     // width: 50,
//     // height: 50, 
//     backgroundColor: 'red',
//     flex:1
//   },
//   area2:{
//     backgroundColor: 'green',
//     flex:1
//   },
//   area3:{
//     backgroundColor: 'yellow',
//     flex:2
//   }
// });

 //você pode tambem especificar uma altura fixa para cada elemento , e o elemento que possuir
  //a propriedade flex se ajustará automaticamente

area1:{
  backgroundColor: '#222',
  height:65
  
},
area2:{
  backgroundColor: '#FFF',
  flex: 1
},
area3:{
  backgroundColor: '#222',
  height:65

}
});
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
          <View style={styles.area1}></View>
          <View style={styles.area2}></View>
          <View style={styles.area3}></View>
      </View>

// Vamos usar na prop justifyContent o space-between ( Fazer com tenha espaço iguais entre eles ):
      // <View style={‌{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
      //   <View style={‌{width: 50, height: 50, backgroundColor: 'green'}} />
      //   <View style={‌{width: 50, height: 50, backgroundColor: 'blue'}} />
      //   <View style={‌{width: 50, height: 50, backgroundColor: 'red'}} />
      // </View>


  // Vamos usar agora na prop justifyContent o space-around 
  // ( Fazer com tenha espaços iguais entre eles mas tambem ao redor ):
  //     <View style={‌{flex: 1, flexDirection: 'row',  justifyContent:'space-around'}}>
  //       <View style={‌{width: 50, height: 50, backgroundColor: 'green'}} />
  //       <View style={‌{width: 50, height: 50, backgroundColor: 'blue'}} />
  //       <View style={‌{width: 50, height: 50, backgroundColor: 'red'}} />
  //     </View> 

  // Vamos agora usar uma prop nova dentro do alignItems o stretch 
  // ( Para essa prop funcionar as views filhas não podem ter largura FIXA ) Vamos lá:
  //   <View style={‌{flex: 1, flexDirection: 'column', alignItems:'stretch'}}>
  //       <View style={‌{width: 100, height: 50, backgroundColor: 'green'}} />
  //       <View style={‌{ height: 50, backgroundColor: 'blue'}} />
  //       <View style={‌{ height: 50, backgroundColor: 'red'}} />
  //     </View>

    )
      
  }
}

const styles = StyleSheet.create({
  areaPrincipal:{
    backgroundColor: '#FFF',
    flex: 1,    //faz com que a view aocupe todo o espaço da tela
    flexDirection: 'row',    //faz com  que o elementos sejam dispostos em linha
    justifyContent: 'center',  //alinhamento horizontal dos conteudos  flex-start   center   flex-end
                              //  space-between,   space-around  https://reactnative.dev/docs/flexbox
    
    alignItems: 'center',      //alianhamento vertical dos elementos     https://reactnative.dev/docs/flexbox
  },
    area1:{
      backgroundColor: 'green',
      height:50,
      width: 50
      
    },
    area2:{
      backgroundColor: 'red',
      width: 50,
      height:50
    },
    area3:{
      backgroundColor: 'yellow',
      height:50,
      width: 50

    }
});
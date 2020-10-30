import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

      {/* o showsVerticalScrollIndicator oculta a barra de rolagem lateral 
      
          scrollEnabled={false, ou true} serve para bloquear o scroll, geralmente utilizado
          com alguma condição

          horizontal={true ou false}  permite que os itens dentro do scroll alinhem-se horizontalmente
          e rolem de forma horizontal     similar aos historis do instagram,   
          é necessário definir uma largura para isso
      */}
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>

          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>

        </ScrollView>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1:{
    backgroundColor: 'red',
    height: 250,
    
  },
  box2:{
    backgroundColor: 'green',
    height: 250,
 
  },
  box3:{
    backgroundColor: 'yellow',
    height: 250,
  

  },
  box4:{
    backgroundColor: 'blue',
    height: 250,
    

  }
})
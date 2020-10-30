import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Pessoa from './src/Pessoas';

//o flatList renderiza apenas os elemntos que estão aprecendo em tela para não consumir memoria
//imagine uma lista com mais de mil nomes?
// o flt list serve para evitar o sobrecarregamento de memoria


export default class App extends Component {

  constructor(props){
    super(props); 
    this.state = {
      feed: [
        {id:1, nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
        {id:2, nome: 'João', idade: 22, email: 'joao@joao.com'},
        {id:3, nome: 'Henrique', idade: 39, email: 'henrique@henrique.com'},
        {id:4, nome: 'Paulo', idade: 15, email: 'paulo@paulo.com'},
        {id:5, nome: 'José', idade: 12, email: 'jose@jose.com'},

      ]
    } 
  }


  render() {
    return (
      <View style={styles.container}>

        {/* o data recebe aonde esta localizado o conteudo 
        
        render item é o cara respoinsavel por renderizar a,lista

        */}
        <FlatList 
        data={this.state.feed}
        
        keyExtractor={(item) => item.id}   // a key é necessaria para elementos repetido ou de lista
        renderItem={ ({item}) =><Pessoa data={item}/> }
         />

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }, 
  areaPessoa:{
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  },
  textoPessoa: {
    color: '#FFF',
    fontSize: 20
  }
})



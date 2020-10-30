import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };

    this.entrar = this.entrar.bind(this);

  }

  entrar () {
    //essa condição serve para limpar o input
    if(this.state.input === '') {
      alert('Digite seu nome!');
      return; //o é para a execução para que o codigo não continue funcionando na perte de baixo
    }
    this.setState({
      nome: 'Bem vindo: ' +this.state.input
    })
  }



  render() {
    return (
        <View style={styles.container}>

          <TextInput 
          style={styles.input} 
          placeholder="Digite seu nome"
           underlineColorAndroid='transparent'
           onChangeText={ (texto) => this.setState({input: texto}) }
           />

           <Button title="Entrar" onPress={this.entrar} />

          <Text style={styles.texto}> {this.state.nome} </Text>

        </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  input:{
    height:45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 10
  },
  texto:{
    textAlign: 'center',
    fontSize: 25
  }

})
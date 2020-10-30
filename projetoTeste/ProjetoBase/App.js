import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class App extends Component {
  render() {

    let nome = 'Vitor';
    // let img = 'https://sujeitoprogramador.com/steve.png';

    return (
      <View>
        <Text>Olá mundo!!!</Text>
        <Text>Meu primeiro App</Text>
        <Text style={{color: '#ff0000', fontSize: 25, margin: 15 }}>Sujeito programador</Text>

        {/* os parâmatros source e style são obrigat´rios para as imagens , na url o link só funcionará com o https*/}
        {/* <Image
        // source={{uri: 'https://sujeitoprogramador.com/steve.png'}} 
        source={{uri: img}} 
        style={{width: 300, height: 300}}
        /> */}

        <Text style={{ fontSize: 30 }}> {nome} </Text>

        {/* passando os valores em forma de props */}
        <Jobs largura={500} altura={200} fulano={'Steve Jobs'} />

      </View>
    )
  }
}



//no exemplo abaixo, como o return só vai trazer um unico component ele pode ser utilizado
//sem precisar inserir uma view
class Jobs extends Component {
  render() {

    let img = 'https://sujeitoprogramador.com/steve.png';
    

    return (
     
      <View>
        <Image
        // source={{uri: img}} 
        // style={{width: 300, height: 300}} />
        source={{uri: img}} 
        style={{width: this.props.largura, height: this.props.altura}} />

        <Text> {this.props.fulano} </Text>

      </View>
    )
  }
}



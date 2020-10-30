import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

export default class App extends Component {
  
  constructor(props){

    super(props);
    this.state = {
      nome: 'Vitor'
    };

    //o bind permite a funções que não estão no contrutor acessar
    //o conteudo dos states
    this.entrar = this.entrar.bind(this);

  }
  
  entrar(nome) {
    //alterando o valor do state
    this.setState({
      nome: nome
    })
  }
  
  
  render() {

    return (
      <View style={{ marginTop: 20 }}>

        {/* passando um valor pela função via parâmetro
        foi criada uma função anonima no inicio da chamada função () => this.entrar.....
        para evitar um erro de loop */}
        <Button title="Entrar" onPress={ () => this.entrar('Bolo doido')}/>

        <Text style={ {fontSize: 23, color: 'red', textAlign: 'center', } }> {this.state.nome} </Text>
  
      </View>
    )
  }
}
 

// render() {

//   return (
//     <View style={{ marginTop: 20 }}>

//       <Text>  Eu sou texto 1</Text>
//       <Text>  Eu sou texto 2</Text>
//       <Text>  Eu sou texto 3</Text>
//       <Text>  Eu sou texto 4</Text>

//     </View>
//   )
// }
// }

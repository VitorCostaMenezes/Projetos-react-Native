import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Picker} from '@react-native-community/picker';


// para usar o pickker executar o comando abaixo
// npm install @react-native-community/picker

// E ai importar dessa forma:

// import {Picker} from '@react-native-community/picker';
// O restante a forma de usar é tudo igual.

export default class App extends Component {

    constructor(props){
      super(props);
      this.state ={
        pizza: 0,
        pizzas: [
          {key: 1, nome: 'Strogonof', valor: 35.90},
          {key: 2, nome: 'Brigadeiro', valor: 20.90},
          {key: 3, nome: 'Calabresa', valor: 18.90},
          {key: 4, nome: 'Quatro queijos', valor: 45.90},
        ]
      }

    }


  render() {

    let pizzasItem = this.state.pizzas.map((v, k) =>{
        return <Picker.Item key={k} value={k} label={v.nome} />
    })

    return (
      <View style={styles.container}>

          <Text style={styles.logo}>Menu Pizzas</Text>

          <Picker
            selectedValue={this.state.pizza}
            onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}

            // esse bloco de codigo acima retorna o index dos ites abaixo em {pizzasIte} e altera o state pizza
            //o state pizza nesse exmeplo age como uma variavel count para determinar qual elementos erá selecionado
          >

            {pizzasItem}

              {/* <Picker.Item key={0} value={0} label="Strogonof" />
              <Picker.Item key={1} value={1} label="Calabresa" />
              <Picker.Item key={2} value={2} label="Brigadeiro" /> */}

            </Picker>

            <Text style={styles.pizzas}>
              Você escolheu : {this.state.pizzas[this.state.pizza].nome}
            </Text>

            <Text style={styles.pizzas}>
              Valor: R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}
            </Text>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  logo:{
    textAlign: 'center',
    fontSize: 25,
  },
  pizzas: {
    marginTop: 15,
    backgroundColor: '#DDD',
    fontSize: 25,
    textAlign: 'center'

  }

})
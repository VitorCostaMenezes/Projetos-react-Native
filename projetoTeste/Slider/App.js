import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Slider from '@react-native-community/slider'



//para utilizar o slider é necessário instalar na aplicação

// npm install @react-native-community/slider --save



export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      valor: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>

          <Slider style={{margin: 10, marginTop: 100}}
          minimumValue={0} 
          maximumValue={100} 
          onValueChange={(valorselecionado) => this.setState({valor: valorselecionado}) } //ativa a fução a cada movimento
          value={this.state.valor} //valor em que ele esta

          minimumTrackTintColor="#00ff00"  //definindo a cor da barra do valor minimo
          maximumTrackTintColor="#ff0000"  //definindo a cor da barra do valor maximo
           />

        <Text style={{textAlign: 'center', fontSize: 30}}> 
           Você tem: {this.state.valor.toFixed(1)} Kg
         </Text>
      
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
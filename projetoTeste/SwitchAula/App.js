import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        status: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
          
        <Switch 
        style={{margin: 30}}
        value={this.state.status}
        onValueChange={(valorSelecionado) => this.setState({status: valorSelecionado})}
        thumbColor={(this.state.status) ?  "#00ff00" : "#ff0000"}
        />

          <Text style={{textAlign: 'center', fontSize: 30}}>
            {(this.state.status) ? "ATIVO" : "INATIVO"}
          </Text>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})
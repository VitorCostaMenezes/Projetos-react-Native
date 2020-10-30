import React, { Component } from 'react'
import {Platform ,View, Text, StyleSheet, Button, Modal } from 'react-native'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
     
    };
    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)
  }

  entrar() {
    this.setState({
      modalVisible: true
    })
  }

  sair(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  render() {
    return (
      <View style={styles.container}>

          <Button title="Entrar" onPress={this.entrar} />
          <Modal animationType= "slide" visible={this.state.modalVisible}>
            <View style={{backgroundColor: '#292929', flex: 1}}>
              <Text style={{color: '#fff', fontSize: 28}}>Seja bem vindo</Text>
              <Button title='Sair' onPress={ () => this.sair(false)}/>
            </View>
          </Modal>
          
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
  }
})
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>  
        
        <Image
            source={require("../images/Logo_PegaPa_color.png")}
            resizeMode={"contain"}
            style={{ width: 150, height: 150, marginTop: 20 }}
        />      

        <View style={[styles.BoxBotao]}>
            <TouchableOpacity style={[styles.botao]}>
                <Text style={[styles.textoBotao]}>
                    Alterar Escala
                </Text>
            </TouchableOpacity>
        </View>
        
        <View style={[styles.BoxBotao]}>
            <TouchableOpacity style={[styles.botao]}>
                <Text style={[styles.textoBotao]}>
                    Consultar Escala
                </Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity>
                <Text style={[styles.textoBotao]}>
                    Não tenho uma escala
                </Text>
            </TouchableOpacity>
        </View>
        
        <View>
            <Image
                source={require("../images/bg_ondas.png")}
                resizeMode={"contain"}
                style={{ width: 300, height: 300 }}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  BoxBotao:{
    flex:2,
    justifyContent: 'flex-end',
  },
  botao:{
    backgroundColor:'#1aa8b2',
    height:54,
    width:339,
    borderRadius: 4,
    marginBottom: 18,
    alignItems: 'center',
    justifyContent: 'center'

  },
  textoBotao:{
      color:'black',
      fontSize: 16,
      fontWeight: 'bold'
    }
});

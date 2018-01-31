import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import Inicio from "./screens/inicio";
import Formulario from "./screens/formulario";

const scenes = Actions.create(
  <Scene key="root">
      <Scene key="inicio" component={Inicio} hideNavBar={true} />

      <Scene key="tabbar">
          <Scene key="drawer" tabs={true}>
              <Scene key="formulario" component={Formulario} hideNavBar={false} title="Lasa Go" />
          </Scene>
      </Scene>
  </Scene>
);

const styles = StyleSheet.create({
  navBar: {
    backgroundColor:'#de0c0c',
    //alignItems: "center"
  },
  navBarTitle:{
      color:'#f0f0f0',
      textAlign:'left',
      fontSize:20,
    //  marginLeft:-140,
  },
  barButtonTextStyle:{
      color:'#FFFFFF'
  },
  barButtonIconStyle:{
      tintColor:'rgb(255,255,255)'
  },
});


class Index extends Component {
  render() {
      return <Router scenes={scenes}
              navigationBarStyle={styles.navBar}
              titleStyle={styles.navBarTitle}
              barButtonTextStyle={styles.barButtonTextStyle}
              barButtonIconStyle={styles.barButtonIconStyle}/>
  }
}

export default Index

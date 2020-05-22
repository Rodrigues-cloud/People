import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PeopleList from '../components/PeopleList';
//import { render } from 'react-dom';

import axios from 'axios';
//import { setLightEstimationEnabled } from 'expo/build/AR';


export default class PeoplePage extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        peoples: [],
      };
    }

    componentDidMount() {
      axios
          .get('https://randomuser.me/api/?nat=br&results=5')
          .then(response => {
              const { results } = response.data;
              this.setState({
                peoples: results,
                loading: false,
              });
          })
    }

  render() {
      //o primeiro parametro da chave da pagina
    this.props.navigation.navigate('PeopleDatail');  
    return (
        //qualquer coisa colocar dentro da view style={styles.container}
      <View>
        <PeopleList 
            peoples={this.state.peoples}
            onPressItem={() => {
                this.props.navigation.navigate('PeopleDatail');
            }}/>
      </View>
    );
  }    
}


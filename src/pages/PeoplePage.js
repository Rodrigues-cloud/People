import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import PeopleList from '../components/PeopleList';
//import { render } from 'react-dom';

import axios from 'axios';
//import { setLightEstimationEnabled } from 'expo/build/AR';


export default class PeoplePage extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        peoples: [],
        loading: false,
      };
    }

    componentDidMount() {
      this.setState({ loading: true });
      setTimeout(() => {
        axios
          .get('https://randomuser.me/api/?nat=br&results=15')
          .then(response => {
            const { results } = response.data;
            this.setState({
              peoples: results,
              loading: false,
            });
          }).catch(error => {
            this.setState({ 
              loading: false,
              error: true,
            })
          });
      }, 3500)
    }

  renderPage() {
    if (this.state.loading){
        return <ActivityIndicator size="large" color="#a742f5" />
    }
    
    if (this.state.error){
      return <Text style={styles.error}>Ops algo deu errado =(</Text>
    }   

    return (
        <PeopleList 
            peoples={this.state.peoples}
            onPressItem={pageParams => {
              this.props.navigation.navigate('PeopleDatail', pageParams);
            }} />
    );                
  }  

       //o primeiro parametro da chave da pagina
    //this.props.navigation.navigate('PeopleDatail');  
  render() {

    return (
      <View style={Styles.container}>
        { this.renderLoading() }
        {/*
          this.state.loading
            ? <ActivityIndicator size="large" color="#a742f5" />
            : this.state.error
                ? <Text style={styles.error}>Ops algo deu errado =(</Text>
                : <PeopleList 
                    peoples={this.state.peoples}
                    onPressItem={pageParams => {
                       this.props.navigation.navigate('PeopleDatail', pageParams);
                    }} />
                  */}      
      </View>

    );
  }    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18,
  }
});


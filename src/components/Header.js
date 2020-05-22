import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*const containerStyler = {
    marginTop: 25,
    backgroundColor: '#a742f5',

    alignItems: 'center',
    justifyContent: 'center',
};

const titleStyle = {
    fontSize: 50,
    color: '#fff',
}*/

const Header = props => (
    <View style={style.container}>
        <Text style={style.title}>{ props.title }</Text>
    </View>
);

/* StyleSheet */
const style = StyleSheet.create ({
    container: {
        marginTop: 25,
        backgroundColor: '#a742f5',

        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        color: '#fff',
    }
});

export default Header;
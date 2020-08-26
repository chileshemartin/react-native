import React from 'react';
import {Text,Button, View, StyleSheet} from 'react-native';

export default class LoginScreen extends React.Component{
    _login = () => {
        this.props.navigation.navigate('Main');
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>You are currently logged out</Text>
                <Button title='Press to login' onPress={this._login}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    text: {
        textAlign: 'center'
    }
});
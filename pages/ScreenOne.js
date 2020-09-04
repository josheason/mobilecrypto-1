import React from 'react'
import {Text, View, TextInput, Button, StyleSheet} from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class ScreenOne extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.input}/>
                <TextInput style={styles.input}/>
                <Button onPress={()=>this.navigate()} title="Login"></Button>
            </View>
        )
    }

    navigate(){
        Actions.list()
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    input: {
      marginTop: '25%',
        margin: 5
    }
  })
    
import React from 'react'
import {Text,View, StyleSheet, Button} from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class ScreenTwo extends React.Component{
    render(){
        return(
            <View style={styles.text}>
                <Text>Welcome Home Young Warrior</Text>
                <Button onPress={()=>this.navigate()} title="Go Back"></Button>
            </View>
        )
    }

    navigate(){
        // Actions.login()
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginTop: '40%'
    }
})
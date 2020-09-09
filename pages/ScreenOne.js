import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ScreenOne extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>HeyAPP</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>this.navigate()}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.navigate()}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    )
  }
  navigate(){
        Actions.list()
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});




/*Old:


import React from 'react'
import {Text, View, TextInput, Button, StyleSheet, StatusBar} from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class ScreenOne extends React.Component{
    render(){
        return(
            <View>
                <StatusBar barStyle="light-content" />
                    <View style={styles.container}>
                    <TextInput style={styles.input}/>
                    <TextInput style={styles.input}/>
                    <Button onPress={()=>this.navigate()} title="Login"></Button>
                </View>
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});

*/

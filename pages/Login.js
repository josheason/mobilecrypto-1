import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions  } from 'react-native'
import { Actions } from 'react-native-router-flux';



class Login extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Continue To Course',
            src: './images/continue.png',
         },
         {
            id: 1,
            name: 'FaceBook Group',
            src: './images/facebook.png'
         },
         {
            id: 2,
            name: 'Live Q&A',
            src: './images/live.png'
         },
         {
            id: 3,
            name: 'Alex&spos;s Youtube',
            src: './images/youtube.png'
         },
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   
   render() {
      const win = Dimensions.get('window');
      return (
         <ScrollView
          style = {{ backgroundColor: '#595959' }}
         >
            {     
                  <TouchableOpacity
                  style = {styles.container}
                  >
                     <Text
                     style = {styles.header}
                       >
                        {'DASHBOARD'}
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     key = {0}
                     style = {styles.container}
                     onPress={()=>this.navigate(0)}>
                       <Image 
                        source = {require('./images/arrow.png')}
                        style = {styles.img}
                        />
                     <Text style = {styles.text}>
                        {'Continue'}
                     </Text>
                  </TouchableOpacity>
                  /*<TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress={()=>this.navigate(item.id)}>
                       <Image 
                        source = {item.src}
                        />
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress={()=>this.navigate(item.id)}>
                       <Image 
                        source = {item.src}
                        />
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress={()=>this.navigate(item.id)}>
                       <Image 
                        source = {item.src}
                        />
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>*/
               /*this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress={()=>this.navigate(item.id)}>
                       <Image 
                        source = {item.src}
                        />
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))*/
            }    
         </ScrollView >
         
      )
   }
   navigate(itemid) {
      if(itemid == 0)
         Actions.StartHere();
      if(itemid == 1)
         Actions.Week1();
      if(itemid == 2)
         Actions.Week2();
      if(itemid == 3)
         Actions.Week3SS();
   }
}
export default Login


const styles = StyleSheet.create ({
   container: {
      padding: 25,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 5,
      marginRight: 5,
      backgroundColor: '#fff',
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderTopWidth: 0.5,
      borderColor: "#121212",
      borderRadius: 15,
   },
   text: {
      color: '#000000'
   },
   img: {
      width: 50,
      height: 50,
      position: 'absolute',
      left: 0,
   },
   header: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000',
   },
})







/*WORKS, UNDO
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ScreenOne extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.logo}>Fundamental Secrets</Text>
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
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#ffffff",
    marginBottom:40,
    textAlign: 'center',
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

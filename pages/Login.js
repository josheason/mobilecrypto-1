import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';



export default class ScreenOne extends React.Component {
  // state = {
  //   isLogin: false,
  //   authenticated: false
  // };
  // componentDidMount() {
  //   //  this.register("said1292@gmail.com", "123456");
  //   this.__isTheUserAuthenticated();
  // }

  // __isTheUserAuthenticated = () => {
  //   let user = firebase.auth().currentUser;
  //   if (user) {
  //     console.log(tag, user);

  //     this.setState({ authenticated: true });
  //   } else {
  //     this.setState({ authenticated: false });
  //   }
  // };

  // componentDidMount(){
  //   this.checkIfLoggedIn();
  // }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        //this.props.navigation.navigate('');
        ()=>this.navigate2();
        console.log("123")
      } else {
        //this.props.navigation.navigate('');
        ()=>this.navigate();
        console.log("123")
      }
    });
  };
  
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  SignUp = (email, password) => {
    try {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => { 
                //  console.log(user);
                console.log("Created User")
           });
          } catch (error) {
                console.log(error.toString(error));
              }
            };

  LogIn = (email, password) => {
    try {
      firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(
                  // this.navigate()
                  console.log("Sucessful login")
            );
          } catch (error) {
                console.log(error.toString(error));
              }
            };

  render(){
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.logo}>Fundamental Secrets</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#ffffff"
            onChangeText={text => this.setState({email:text})}/>
            
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#ffffff"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        {/* <TouchableOpacity style={styles.loginBtn} onPress={()=>this.navigate()}> */}
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.LogIn(this.state.email, this.state.password)}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.SignUp(this.state.email, this.state.password)}>
          <Text style={styles.loginText}>Sign Up (TEMP)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.navigate2()}>
          <Text style={styles.forgetPass}>Forgot Password?</Text>
        </TouchableOpacity>
  
      </View>
    )
  }
  navigate(){
        Actions.list()
    }
	navigate2(){
        Actions.dashboard()
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
    padding:20,
  },
  inputText:{
    height:50,
    color:"white",
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
    //marginTop:20,
    marginBottom:20
  },
  loginText:{
    color:"white"
  },
  forgetPass:{
    color:"white",
    textDecorationLine: 'underline',
  }
});

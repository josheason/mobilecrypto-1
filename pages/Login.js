import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

//import firebase from 'firebase';
import * as firebase from 'firebase';
import 'firebase/firestore';

var test = 1;

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

	
	/*LogIn = (email, password) => {
    try {
      firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(user => {
	      	const db = firebase.firestore();
   		var user = firebase.auth().currentUser;
   		const increment = firebase.firestore.FieldValue.increment(1);
   		const watchedRef = db.collection('users');
	      this.navigate2()
   		watchedRef.where('id', '==', user.uid)
      		.get()
      		.then(snapshots => {
      		if (snapshots.size == 0) {
         		watchedRef.doc(user.uid).set({
     			
         		})
         		.then(() => {
            		console.log('User added!');
          		}).catch(function (e) {
                console.log('Test2', e);
              });
      		}
   		 }).catch(function (e) {
    			console.log('Test1', e);
			
   		});
                  
              });
         	 } catch (e) {
                	console.log('Test', e);
		      }
  		};*/
  // componentDidMount(){
  //   this.checkIfLoggedIn();
  // }

  // checkIfLoggedIn = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if(user){
  //       //this.props.navigation.navigate('');
  //       ()=>this.navigate2();       //onPress={() => this.LogIn(this.state.email, this.state.password)}>
  //       console.log("loggedin").   //onPress={() => this.LogIn(this.state.email, this.state.password)}>
  //     } else {	//onPress={() => this.navigate2()}>
  //       //this.props.navigation.navigate('');
  //       ()=>this.navigate();
  //       console.log("NOT LOGGED IN")
  //     }
  //   });
  // };
  
  
  state = {
    email: "",
    password: ""
  };

  SignUp = (email, password) => {
    try {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => { 
                 //console.log(user);
                 this.navigate()
                });
        } catch (error) {
                console.log('Testing',error.toString(error));
        }
  };


LogIn = (email, password) => {
    try {
      firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(user => {
	      	const db = firebase.firestore();
   		var user = firebase.auth().currentUser;
   		const increment = firebase.firestore.FieldValue.increment(1);
   		const watchedRef = db.collection('users');
	      test = 0;
	      this.navigate2()
   		watchedRef.where('id', '==', user.uid)
      		.get()
      		.then(snapshots => {
      		if (snapshots.size == 0) {
         		watchedRef.doc(user.uid).set({
     			
         		})
         		.then(() => {
            		console.log('User added!');
          		})
			);
      		}
   		 })
	      
	      );
                  
              });
         	 } catch(function(e)) {
                	alert('Success');
		      }

  		};



  /*LogIn = (email, password) => {
    try {
      firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(user => {
                  this.navigate2()
              });
          } catch (error) {
                console.log(error.toString(error));
              }
  };*/

  forgotPassword = (Email) => {
    firebase.auth().sendPasswordResetEmail(Email)
      .then(function (user) {
        alert('Please check your email...')
      }).catch(function (e) {
        alert('abc',e)
      })
  }


  
  
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
        <TouchableOpacity style={styles.loginBtn}
	onPress={() => this.LogIn(this.state.email, this.state.password)}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.forgotPassword(this.state.email)}> 
          <Text style={styles.forgetPass}>Forgot Password?</Text>
        </TouchableOpacity>
  
      </View>
    )
  }
  navigate(){
        Actions.list();
    }
	navigate2(){
        Actions.dashboard()
    }
	  navigate3(){
	  Actions.login()
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

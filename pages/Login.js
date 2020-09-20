import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

//import firebase from 'firebase';
import * as firebase from 'firebase';
import 'firebase/firestore';

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
	      this.navigate2()
   		watchedRef.where('id', '==', user.uid)
      		.get()
      		.then(snapshots => {
      		if (snapshots.size == 0) {
         		watchedRef.doc(user.uid).set({
         		dash: false,
         		id: user.uid,
         		watched: 0,
				/*week1*/
			w1_1: false,
			w1_3: false,
			w1_4: false,
			w1_5: false,
			w1_6: false,
			w1_7: false,
			w1_8: false,
				/*week2*/
			w2_1: false,
			w2_3: false,
			w2_4: false,
			w2_5: false,
			w2_6: false,
			w2_7: false,
			w2_8: false,
			w2_9: false,
			w2_10: false,
			w2_11: false,
			w2_12: false,
				/*week3SS*/
			w3SS_1: false,
			w3SS_3: false,
			w3SS_4: false,
			w3SS_5: false,
			w3SS_6: false,
			w3SS_7: false,
			w3SS_8: false,
			w3SS_9: false,
			w3SS_10: false,
			w3SS_11: false,
			w3SS_12: false,
			w3SS_13: false,
				/*week3RF*/
			w3RF_2: false,
			w3RF_3: false,
			w3RF_4: false,
			w3RF_5: false,
			w3RF_6: false,
				/*week4*/
			w4_1: false,
			w4_3: false,
			w4_4: false,
			w4_5: false,
			w4_6: false,
			w4_7: false,
			w4_8: false,
				/*week5*/
			w5_1: false,
			w5_3: false,
			w5_4: false,
			w5_5: false,
			w5_6: false,
			w5_7: false,
				/*week6*/
			w6_1: false,
			w6_3: false,
			w6_4: false,
			w6_5: false,
			w6_6: false,
			w6_7: false,
			w6_8: false,
				/*week7*/
			w7_2: false,
			w7_3: false,
			w7_4: false,
			w7_5: false,
			w7_6: false,
			w7_7: false,
				/*week8*/
			w8_1: false,
			w8_3: false,
			w8_4: false,
			w8_5: false,
			w8_6: false,
			w8_7: false,
			w8_8: false,
			w8_9: false,
			w8_10: false,
			w8_11: false,
			w8_12: false,
				/*week9*/
			w9_1: false,
			w9_2: false,
			w9_3: false,
			w9_4: false,
			w9_5: false,
			w9_6: false,
			w9_7: false,
			w9_8: false,
			w9_9: false,
				/*week10*/
			w10_1: false,
			w10_2: false,
			w10_3: false,
			w10_4: false,
			w10_5: false,
			w10_6: false,
			w10_7: false,
				/*DEFI*/
	    DEFI_1: false,
            DEFI_2: false,
            DEFI_3: false,
            DEFI_4: false,
            DEFI_5: false,
            DEFI_6: false,
            DEFI_7: false,
            DEFI_8: false,
            DEFI_9: false,
            DEFI_10: false,
            DEFI_11: false,
            DEFI_12: false,
            DEFI_13: false,
	    DEFI_14: false,
            DEFI_15: false,
            DEFI_16: false,
            DEFI_17: false,
            DEFI_18: false,
            DEFI_19: false,
            DEFI_20: false,
            DEFI_21: false,
            DEFI_22: false,
            DEFI_23: false,
            DEFI_24: false,
            DEFI_25: false,
            DEFI_26: false,
            DEFI_27: false,				
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
        console.log('abc',e)
      })
  }

  
  componentDidCatch(error, info) {
    console.log('1234',error);
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

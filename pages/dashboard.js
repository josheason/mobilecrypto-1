import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, Linking  } from 'react-native'
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import 'firebase/firestore';
import Progress from './Progress.js'

var test = require('./images/arrow.png');

class dashboard extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Continue To Course',
            src: './images/continue.png',
            active:1,
         },
         {
            id: 1,
            name: 'FaceBook Group',
            src: './images/facebook.png',
            active: 0,
         },
         {
            id: 2,
            name: 'Live Q&A',
            src: './images/live.png',
            active: 0,
         },
         {
            id: 3,
            name: 'Alex&spos;s Youtube',
            src: './images/youtube.png',
            active: 0,
         },
      ],
   }


/*counter(){
   const db = firebase.firestore();
   const ud = firebase.auth().currentUser;
   var user = firebase.auth().currentUser;
   const increment = firebase.firestore.FieldValue.increment(1);
   const watchedRef = db.collection('users');
   const docRef = watchedRef.doc(user.uid).get()
   const doc = watchedRef.doc(user.uid).get();
   if (!doc.exists) {
  console.log('No such document!', docRef);
} else {
  console.log('Document data:', doc.data().watched);
}
   
  }
*/


   
   render() {
      
      
      return (
         <ScrollView
          //style = {{ backgroundColor: '#595959' }}#121212
         style = {{ backgroundColor: '#121212' }}
         >
         {  
                 <>
                 
                  <TouchableOpacity
                     key = {1}
                     style = {styles.container}
                     onPress={()=>this.navigate(0)}>
                       <Image 
                        source = {test}
                        style = {styles.img}
                        />
                     <Text style = {styles.text}>
                        {'Continue To Course'}
                     </Text>
                  </TouchableOpacity>
        
                 
                  <TouchableOpacity
                     key = {2}
                     style = {styles.container}
                      onPress={ ()=>{ Linking.openURL('https://www.facebook.com/groups/fundamentalsecrets')}}>
                       <Image 
                        source = {require('./images/facebook.png')}
                        style = {styles.img}
                        />
                     <Text style = {styles.text}>
                        {'Facebook Group'}
                     </Text>
                  </TouchableOpacity>
                  <>
                  </>


                  <TouchableOpacity
                     key = {3}
                     style = {styles.container}
                     onPress={ ()=>{ Linking.openURL('https://www.thefundamentalsecrets.com/calendly-setup')}}>
                       <Image 
                        source = {require('./images/live.png')}
                        style = {styles.img}
                        />
                     <Text style = {styles.text}>
                        {'Live Q&A'}
                     </Text>
                  </TouchableOpacity>
                  <>
                  </>

                  
                  <TouchableOpacity
                     key = {4}
                     style = {styles.container}
                      onPress={ ()=>{ Linking.openURL('https://www.youtube.com/channel/UCHQv-nQ2caXVvtTFa8WOJRA?view_as=subscriber')}}>
                       <Image 
                        source = {require('./images/youtube.png')}
                        style = {styles.img}
                        />
                     <Text style = {styles.text}>
                        {"Alex's Youtube"}
                     </Text>
                  </TouchableOpacity>
                  <>
                  </>

 <TouchableOpacity
                  key = {0}
                  style = {styles.containerB}
                  onPress={()=>Actions.login()}>
                     <Text
                     style = {styles.header}
                       >
                        {'Sign Out'}
                     </Text>
                  </TouchableOpacity><></>
            
                  <Progress/></>
            }
         </ScrollView >
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
      )
   }
   navigate(itemid) {
      if(itemid == 0)
         Actions.list();
      if(itemid == 1)
         Actions.Week1();
      if(itemid == 2)
         Actions.Week2();
      if(itemid == 3)
         Actions.Week3SS();
   }
}
export default dashboard


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
   containerB: {
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
      position: 'absolute',
      bottom: 100,
   },
   text: {
      color: '#000000'
   },
   img: {
      width: 50,
      height: 50,
      position: 'absolute',
      left: 10,
      top: 10,
      padding: 20,
   },
   header: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000',
   },
})

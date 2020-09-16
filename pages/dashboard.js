import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, Linking  } from 'react-native'
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';


class dashboard extends Component {
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
componentDidMount(){
   const db = firebase.firestore();
   const ud = firebase.auth().currentUser;
   const increment = firebase.firestore.FieldValue.increment(1);
   const storyRef = db.collection(‘users').doc('test');
   storyref.update({ watched: increment});
}
   
   render() {
      return (
         <ScrollView
          //style = {{ backgroundColor: '#595959' }}#121212
         style = {{ backgroundColor: '#121212' }}
         >
         {  
                 <>
                  <TouchableOpacity
                  key = {0}
                  style = {styles.container}
                  >
                     <Text
                     style = {styles.header}
                       >
                        {'DASHBOARD'}
                     </Text>
                  </TouchableOpacity>
         
         
                 
                  <TouchableOpacity
                     key = {1}
                     style = {styles.container}
                     onPress={()=>this.navigate(0)}>
                       <Image 
                        source = {require('./images/arrow.png')}
                        style = {styles.img}
                        />
                     <Text style = {styles.text}>
                        {'Continue To Course'}
                     </Text>
                  </TouchableOpacity>
                  <>
                  </>

                 
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
                  </>

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

import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('../styles');
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Intro Week 1',
         },
         {
            id: 1,
            name: 'Book List',
         },
         {
            id: 2,
            name: 'What It TRULY Takes To Win',
         },
         {
            id: 3,
            name: 'Body',
         },
         {
            id: 4,
            name: 'Time',
         },
         {
            id: 5,
            name: 'Focus',
         },
         {
            id: 6,
            name: 'The 6 Rules Of Decision Making',
         },
         {
            id: 7,
            name: '3 Ways Rewire Your Brain',
         },
         {
            id: 8,
            name: 'Assessment',
         },
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         
         <ScrollView
         style = {{ backgroundColor: '#121212' }}
         >
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {s.listcontainer}
                     onPress = {() => this.navigate(item.id)}>
                     <Image 
                        source = {{uri: 'https://firebasestorage.googleapis.com/v0/b/mobilecrypto-b1543.appspot.com/o/Images%2Fthumbnail.png?alt=media&token=ae67603e-14b8-4ac2-8ca2-0209ea08e0a2'}}
                        style = {styles.img}
                        />
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                     <Image 
                        source = {{uri: 'https://firebasestorage.googleapis.com/v0/b/mobilecrypto-b1543.appspot.com/o/Images%2Fplaybut.png?alt=media&token=e99b2580-0f6e-465c-b0dc-10edcd4e9f70'}}
                        style = {styles.imgR}
                        />
                  </TouchableOpacity>
               ))
            }    
         </ScrollView>
         
      )
   }
   navigate(itemid) {
      if(itemid == 0)
         Actions.introweek1();
      if(itemid == 1)
          Actions.booklistw12();
      if(itemid == 2)
          Actions.win3();
      if(itemid == 3)
          Actions.body4();
      if(itemid == 4)
          Actions.time5();
      if(itemid == 5)
          Actions.focus6();
      if(itemid == 6)
          Actions.sixrules7();
      if(itemid == 7)
          Actions.rewire8();
   }
}
export default List



const styles = StyleSheet.create ({
   text: {
      color: '#ffffff'
   },
   img: {
      width: 50,
      height: 50,
      position: 'absolute',
      left: 10,
      top: 10,
      padding: 20,
   },
   imgR: {
      width: 50,
      height: 50,
      position: 'absolute',
      right: 10,
      top: 10,
      padding: 20,
   },
   imgS: {
      width: 200,
      height: 95,
      position: 'absolute',
      left: 10,
      top: 10,
      margin: 20,
   },
})

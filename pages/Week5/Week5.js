import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('../styles');
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Week 5 intro',
         },
         {
            id: 1,
            name: 'Book List',
         },
         {
            id: 2,
            name: 'Main Leaders',
         },
         {
            id: 3,
            name: 'Reputation',
         },
         {
            id: 4,
            name: 'Litigations',
         },
         {
            id: 5,
            name: 'Partnerships',
         },
         {
            id: 6,
            name: 'Corporate Governance',
         },
         {
            id: 7,
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
         Actions.week5intro1();
      if(itemid == 1)
         Actions.w5booklist2();
      if(itemid == 2)
         Actions.mainleads3();
      if(itemid == 3)
         Actions.repu4();
      if(itemid == 4)
         Actions.litigations5();
      if(itemid == 5)
         Actions.partnerships6();
      if(itemid == 6)
         Actions.corpgov7();
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
})

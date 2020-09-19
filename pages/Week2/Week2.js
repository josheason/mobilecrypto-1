import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('../styles');
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Week 2 Intro',
         },
         {
            id: 1,
            name: 'Book List',
         },
         {
            id: 2,
            name: 'How Does The Internet Work?',
         },
         {
            id: 3,
            name: 'Bitcoin 101',
         },
         {
            id: 4,
            name: 'Bitcoin 102',
         },
         {
            id: 5,
            name: 'Ethereum 101',
         },
         {
            id: 6,
            name: 'Ethereum 102',
         },
         {
            id: 7,
            name: 'Market Cycles IMPORTANT',
         },
         {
            id: 8,
            name: 'Why Bitcoin Is The Best Form Of Money',
         },
         {
            id: 9,
            name: 'How much Money Should You Invest In Cryptocurrrency?',
         },
         {
            id: 10,
            name: 'Introduction To DAPPS',
         },
         {
            id: 11,
            name: 'Introduction To DEFI',
         },
         {
            id: 12,
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
         Actions.week2intro1();
      if(itemid == 1)
         Actions.booklistw2();
      if(itemid == 2)
         Actions.internetwork3();
      if(itemid == 3)
         Actions.bitcoin1014();
      if(itemid == 4)
         Actions.bitcoin1025();
      if(itemid == 5)
         Actions.eth1016();
      if(itemid == 6)
         Actions.eth1027();
      if(itemid == 7)
         Actions.mcyclesimp8();
      if(itemid == 8)
         Actions.bitbestform9();
      if(itemid == 9)
         Actions.investcrypto10();
      if(itemid == 10)
         Actions.dapps11();
      if(itemid == 11)
         Actions.defi12();
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

import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('../styles');
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Logarithmic Regression Of Total Cryptocurrency Marketcap',
         },
         {
            id: 1,
            name: 'Stock To Flow Model',
         },
         {
            id: 2,
            name: 'Stock To Flow X S2FX',
         },
         {
            id: 3,
            name: 'Willy Woo Coin Chart',
         },
         {
            id: 4,
            name: 'Bitcoin Logarithmic Regression',
         },
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         <ScrollView
         style = {{ backgroundColor: '#121212' }}>
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
         Actions.logregmarketcap1();
      if(itemid == 1)
         Actions.stock2flow2();
      if(itemid == 2)
         Actions.stockflowx3();
      if(itemid == 3)
         Actions.willywoo4();
      if(itemid == 4)
         Actions.bitlogreg5();
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

import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
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
                     <Text style = {s.listtext}>
                        {item.name}
                     </Text>
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

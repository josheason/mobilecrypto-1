import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
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
                     onPress = {() => this.alertItemName(item)}>
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
         Actions.week2intro1();
      if(itemid == 1)
         this.navigate2();
   }
}
export default List

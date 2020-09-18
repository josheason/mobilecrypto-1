import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
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


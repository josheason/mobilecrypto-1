import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('../styles');
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Book List',
         },
         {
            id: 1,
            name: 'Research List',
         },
         {
            id: 2,
            name: 'Desktop Organization',
         },
         {
            id: 3,
            name: 'Avoid FUD With Checking Credibility',
         },
         {
            id: 4,
            name: 'Whitepaper 101',
         },
         {
            id: 5,
            name: 'The Black Box and Perfectionism',
         },
         {
            id: 6,
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
         Actions.w3booklist1();
      if(itemid == 1)
         Actions.researchlist2();
      if(itemid == 2)
         Actions.deskorg3();
      if(itemid == 3)
         Actions.avoidcred4();
      if(itemid == 4)
         Actions.whitepaper1015();
      if(itemid == 5)
         Actions.blackbox6();
   }
}
export default List

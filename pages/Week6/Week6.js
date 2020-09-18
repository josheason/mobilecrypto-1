import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('../styles');
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Week 6 intro',
         },
         {
            id: 1,
            name: 'Book List',
         },
         {
            id: 2,
            name: 'Roadmap Research',
         },
         {
            id: 3,
            name: 'Product Research',
         },
         {
            id: 4,
            name: 'Decentalization',
         },
         {
            id: 5,
            name: 'Consensus Mechanism',
         },
         {
            id: 6,
            name: 'Value Proposition Of a Project',
         },
         {
            id: 7,
            name: 'More Product Questions',
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
         Actions.week6intro1();
      if(itemid == 1)
         Actions.w6booklist2();
     if(itemid == 2)
         Actions.roadmapresearch3();
      if(itemid == 3)
         Actions.productresearch4();
     if(itemid == 4)
         Actions.decent5();
      if(itemid == 5)
         Actions.conmech6();
     if(itemid == 6)
         Actions.valueprop7();
      if(itemid == 7)
         Actions.moreprodquest8();
   }
}
export default List

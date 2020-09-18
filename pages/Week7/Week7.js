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
            name: 'Top Down Fundamental Analysis',
         },
         {
            id: 2,
            name: `Key Measures Of Economy's Health`,
         },
         {
            id: 3,
            name: 'Industry Fundamentals',
         },
         {
            id: 4,
            name: 'Ecosystem Predictions',
         },
         {
            id: 5,
            name: 'Utility',
         },
         {
            id: 6,
            name: `Metcalfe's Law Network Effects`,
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
         Actions.w7booklist();
     if(itemid == 1)
         Actions.topdownfun2();
     if(itemid == 2)
         Actions.keyecohealth3();
     if(itemid == 3)
         Actions.indfun4();
     if(itemid == 4)
         Actions.ecopre5();
     if(itemid == 5)
         Actions.utility6();
     if(itemid == 6)
         Actions.metcalfe7();
     
   }
}
export default List

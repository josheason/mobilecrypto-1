import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
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
         Actions.introweek1();
      if(itemid == 2)
          Actions.win3();
      if(itemid == 3)
          Actions.body4();
   }
}
export default List

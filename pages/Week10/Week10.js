import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('../styles');
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Front End Back End Money',
         },
         {
            id: 1,
            name: 'Zoom Tutorial For Sales',
         },
         {
            id: 2,
            name: 'Canva For Professional Graphics',
         },
         {
            id: 3,
            name: 'EventBrite For Lead Generation',
         },
         {
            id: 4,
            name: 'Craigslist For Generating Leads',
         },
         {
            id: 5,
            name: 'The BIG Promise',
         },
         {
            id: 6,
            name: 'Calendly Tutorial For Sales',
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
         Actions.StartHere();
      if(itemid == 1)
         this.navigate2();
   }
}
export default List
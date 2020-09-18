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
         Actions.frontend1();
      if(itemid == 1)
         Actions.zoom2();
      if(itemid == 2)
         Actions.canva3();
      if(itemid == 3)
         Actions.eventbrite4();
      if(itemid == 4)
         Actions.craigslist5();
      if(itemid == 5)
         Actions.bigprom6();
      if(itemid == 6)
         Actions.caltutsales7();
   }
}
export default List

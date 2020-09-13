import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('./styles');
   
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
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
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

const styles = StyleSheet.create ({
   text: {
      color: '#ffffff'
   }
})

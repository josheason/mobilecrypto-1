import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('./styles');
   
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
            name: 'Key Measures Of Economy&apos;s Health',
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
            name: 'CUtility',
         },
         {
            id: 6,
            name: 'Metcalfe s Law Network Effects',
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

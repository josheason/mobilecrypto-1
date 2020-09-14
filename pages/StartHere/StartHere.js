import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('../styles');
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'How To Use',
         },
         {
            id: 1,
            name: 'Scam Submitter',
         },
         {
            id: 2,
            name: 'Essential Reading List',
         },
         {
            id: 3,
            name: 'Bookmarks',
         },
         {
            id: 4,
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
                     {/* onPress={()=> this.navigate() }> */}
                    {/* onPress={()=>this.navigate(item.id)}> */}

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
         Actions.home();
      if(itemid == 1)
         this.navigate2();
   }
}
export default List
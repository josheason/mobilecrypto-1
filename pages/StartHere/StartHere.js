import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('../styles');
   
class StartHere extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'How To Use',
         },
         {
            id: 1,
            name: 'Essential Reading List',
         },
         {
            id: 2,
            name: 'Bookmarks',
         },
         {
            id: 3,
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
         Actions.HowToUse1 ();
      if(itemid == 1)
         Actions.EssentialReadingList3b();
      if(itemid == 2)
         Actions.Bookmarks4c();
      if(itemid == 3)
         Actions.EssentialReadingList3i()
   }
}
export default StartHere

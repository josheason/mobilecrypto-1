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
            name: 'Essential Reading List',
         },
          {
            id: 2,
            name: 'Essential Reading List',
         },
          {
            id: 3,
            name: 'Essential Reading List',
         },
          {
            id: 4,
            name: 'Essential Reading List',
         },
          {
            id: 5,
            name: 'Essential Reading List',
         },
          {
            id: 6,
            name: 'Essential Reading List',
         },
          {
            id: 7,
            name: 'Essential Reading List',
         },
         {
            id: 8,
            name: 'Bookmarks',
         },
         {
            id: 9,
            name: 'Bookmarks',
         },
         {
            id: 10,
            name: 'Bookmarks',
         },
         {
            id: 11,
            name: 'Bookmarks',
         },
         {
            id: 12,
            name: 'Bookmarks',
         },
         {
            id: 13,
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
         Actions.EssentialReadlingList3b();
      if(itemid == 2)
         Actions.EssentialReadlingList3p();
      if(itemid == 3)
         Actions.EssentialReadlingList3i();
      if(itemid == 4)
         Actions.EssentialReadlingList3br();
      if(itemid == 5)
         Actions.EssentialReadlingList3c();
      if(itemid == 6)
         Actions.EssentialReadlingList3m();
      if(itemid == 7)
         Actions.Bookmarks4c();
      if(itemid == 8)
         Actions.Bookmarks4d();
      if(itemid == 9)
         Actions.Bookmarks4m();
      if(itemid == 10)
         Actions.Bookmarks4mac();
      if(itemid == 11)
         Actions.Bookmarks4mar();
      if(itemid == 12)
         Actions.home();
   }
}
export default List

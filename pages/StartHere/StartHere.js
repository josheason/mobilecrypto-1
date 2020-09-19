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
            name: 'Essential Reading List - Business',
         },
          {
            id: 2,
            name: 'Essential Reading List - Productivity',
         },
          {
            id: 3,
            name: 'Essential Reading List - Investing',
         },
          {
            id: 4,
            name: 'Essential Reading List - Brain',
         },
          {
            id: 5,
            name: 'Essential Reading List - Crypto',
         },
          {
            id: 6,
            name: 'Essential Reading List - Marketing Research',
         },
         {
            id: 7,
            name: 'Bookmarks - Crypto News',
         },
         {
            id: 8,
            name: 'Bookmarks - Data',
         },
         {
            id: 9,
            name: 'Bookmarks - Must-Read Articles',
         },
         {
            id: 10,
            name: 'Bookmarks - Macro',
         },
         {
            id: 11,
            name: 'Bookmarks - Marketing Research',
         },
         {
            id: 12,
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
         Actions.EssentialReadingList3p();
      if(itemid == 3)
         Actions.EssentialReadingList3i();
      if(itemid == 4)
         Actions.EssentialReadingList3br();
      if(itemid == 5)
         Actions.EssentialReadingList3c();
      if(itemid == 6)
         Actions.EssentialReadingList3m();
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

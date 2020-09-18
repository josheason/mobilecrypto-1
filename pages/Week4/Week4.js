import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('../styles');
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Week 4 Intro',
         },
         {
            id: 1,
            name: 'Book List',
         },
         {
            id: 2,
            name: 'Social Media Basics',
         },
         {
            id: 3,
            name: 'Google Ad-words For Cryptocurrencies',
         },
         {
            id: 4,
            name: 'Scraping YouTube for DATA',
         },
         {
            id: 5,
            name: 'Website Conversion Design',
         },
         {
            id: 6,
            name: 'Website Traffic',
         },
         {
            id: 7,
            name: 'Website Education',
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
         Actions.week4intro1();
      if(itemid == 1)
         Actions.w4booklist2();
      if(itemid == 0)
         Actions.socialmediabas3();
      if(itemid == 1)
         Actions.googadwordcrypto4();
      if(itemid == 0)
         Actions.scrapytdata5();
      if(itemid == 1)
         Actions.webconvdes6();
      if(itemid == 0)
         Actions.webtraff7();
      if(itemid == 1)
         Actions.webedu8();
   }
}
export default List

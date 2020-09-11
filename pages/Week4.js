import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
   
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
                     style = {styles.container}
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
   container: {
      padding: 25,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 5,
      marginRight: 5,
      backgroundColor: '#000000',
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderTopWidth: 0.5,
      borderColor: "#121212",
      borderRadius: 15,
   },
   text: {
      color: '#ffffff'
   }
})

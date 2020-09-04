import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Week 2 Intro',
         },
         {
            id: 1,
            name: 'Book List',
         },
         {
            id: 2,
            name: 'How Does The Internet Work?',
         },
         {
            id: 3,
            name: 'Bitcoin 101',
         },
         {
            id: 4,
            name: 'Bitcoin 102',
         },
         {
            id: 5,
            name: 'Ethereum 101',
         },
         {
            id: 6,
            name: 'Ethereum 102',
         },
         {
            id: 7,
            name: 'Market Cycles IMPORTANT',
         },
         {
            id: 8,
            name: 'Why Bitcoin Is The Best Form Of Money',
         },
         {
            id: 9,
            name: 'How much Money Should You Invest In Cryptocurrrency?',
         },
         {
            id: 10,
            name: 'Introduction To DAPPS',
         },
         {
            id: 11,
            name: 'Introduction To DEFI',
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
         <ScrollView>
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
      padding: 17.5,
      marginTop: 3,
      backgroundColor: '#000000',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: "#ffffff",
   },
   text: {
      color: '#ffffff'
   }
})
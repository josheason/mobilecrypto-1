import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Logarithmic Regression Of Total Cryptocurrency Marketcap',
         },
         {
            id: 1,
            name: 'Stock To Flow Model',
         },
         {
            id: 2,
            name: 'Stock To Flow X S2FX',
         },
         {
            id: 3,
            name: 'Willy Woo Coin Chart',
         },
         {
            id: 4,
            name: 'Bitcoin Logarithmic Regression',
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
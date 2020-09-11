import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Week 3 Intro',
         },
         {
            id: 1,
            name: 'How To Send And Receive Crypto',
         },
         {
            id: 2,
            name: 'Coinbase',
         },
         {
            id: 3,
            name: 'Details You Must Know',
         },
         {
            id: 4,
            name: 'Coinbase Pro',
         },
         {
            id: 5,
            name: 'Binance Tutorial',
         },
         {
            id: 6,
            name: 'Hit BTC Exchange Tutorial',
         },
         {
            id: 7,
            name: 'Desktop Wallets',
         },
         {
            id: 8,
            name: 'Chrome Extention Wallets',
         },
         {
            id: 9,
            name: 'DEX DAPPS DEFI Tutorial',
         },
         {
            id: 10,
            name: 'VPN To Bypass Authority',
         },
         {
            id: 11,
            name: 'Google Authenticator',
         },
         {
            id: 12,
            name: 'KeePass',
         },
         {
            id: 13,
            name: 'What Exchanges Do I Use?',
         },
         {
            id: 14,
            name: 'KeeUltimate SecurityPass',
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

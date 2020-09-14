import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('../styles');
   
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
                     style = {s.listcontainer}
                     onPress = {() => this.alertItemName(item)}>
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
         Actions.StartHere();
      if(itemid == 1)
         this.navigate2();
   }
}
export default List
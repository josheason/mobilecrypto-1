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
         Actions.week3intro1();
      if(itemid == 1)
         Actions.sendcrypto2();
      if(itemid == 2)
         Actions.coinbase3();
      if(itemid == 3)
         Actions.details4();
      if(itemid == 4)
         Actions.coinbasepro5();
      if(itemid == 5)
         Actions.bintut6();
      if(itemid == 6)
         Actions.hitbextut7();
      if(itemid == 7)
         Actions.deskwall8();
      if(itemid == 8)
         Actions.chromeextwall9();
      if(itemid == 9)
         Actions.dexdappsdefitut10();
      if(itemid == 10)
         Actions.vpn11();
      if(itemid == 11)
         Actions.googleauth12();
      if(itemid == 12)
         Actions.keepass13();
      if(itemid == 13)
         Actions.whatexuse14();
   }
}
export default List

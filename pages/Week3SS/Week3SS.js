import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
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
                     <Image 
                        source = {{uri: 'https://firebasestorage.googleapis.com/v0/b/mobilecrypto-b1543.appspot.com/o/Images%2Fthumbnail.png?alt=media&token=ae67603e-14b8-4ac2-8ca2-0209ea08e0a2'}}
                        style = {styles.img}
                        />
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                     <Image 
                        source = {{uri: 'https://firebasestorage.googleapis.com/v0/b/mobilecrypto-b1543.appspot.com/o/Images%2Fplaybut.png?alt=media&token=e99b2580-0f6e-465c-b0dc-10edcd4e9f70'}}
                        style = {styles.imgR}
                        />
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
      if(itemid == 14)
         Actions.ultimsec15();
   }
}
export default List

const styles = StyleSheet.create ({
   text: {
      color: '#ffffff'
   },
   img: {
      width: 50,
      height: 50,
      position: 'absolute',
      left: 10,
      top: 10,
      padding: 20,
   },
   imgR: {
      width: 50,
      height: 50,
      position: 'absolute',
      right: 10,
      top: 10,
      padding: 20,
   },
})


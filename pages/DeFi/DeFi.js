import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('../styles');
   
class DeFi extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'What is DeFi',
         },
         {
            id: 1,
            name: 'Wallet Differences',
         },
         {
            id: 2,
            name: 'Desktop Metamask Wallet Install',
         },
         {
            id: 3,
            name: 'DeFi Ecosystem',
         },
         {
            id: 4,
            name: 'Desktop Metamask - connecting to dapp dex',
         },
         {
            id: 5,
            name: 'Navigating Metamask Desktop Extension',
         },
         {
            id: 6,
            name: 'GWEI GAS Explained using GSN and MM',
         },
         {
            id: 7,
            name: 'Trading Simple Swap Uniswap',
         },
         {
            id: 8,
            name: 'Overview of Transaction in Etherscan',
         },
         {
            id: 9,
            name: 'Speed up Transaction in metamask',
         },
         {
            id: 10,
            name: 'How to Cancel a Transaction in Metamask',
         },
         {
            id: 11,
            name: 'Trading on Mooniswap DEX',
         },
         {
            id: 12,
            name: 'Remove Liquidity from uniswap',
         },
         {
            id: 13,
            name: 'Overview of 1inch DEX AG',
         },
         {
            id: 14,
            name: 'Trading Limit Order on Matcha.xyz DEX AG',
         },
         {
            id: 15,
            name: 'Add liquidity to uniswap pool',
         },
         {
            id: 16,
            name: 'Layer 2 Loopring Limit Order',
         },
         {
            id: 17,
            name: 'Overview of Zapper.fi',
         },
         {
            id: 18,
            name: 'Overview of MakerDAO',
         },
         {
            id: 19,
            name: 'Overview of CREAM Finance',
         },
         {
            id: 20,
            name: 'Overview of Aave Finance',
         },
         {
            id: 21,
            name: 'Overview of Balancer DEX',
         },
         {
            id: 22,
            name: 'Add Liquidity to Balancer Pools',
         },
         {
            id: 23,
            name: 'Overview of DeBank Dashboard',
         },
         {
            id: 24,
            name: 'Overview of Zerion Dashboard',
         },
         {
            id: 25,
            name: 'Overview of Compound Finance',
         },
         {
            id: 26,
            name: 'Intro to DeFi Lending and Borrowing',
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
                     onPress={()=>this.navigate(item.id)}>
                     <Image 
                        source = {{uri: 'https://firebasestorage.googleapis.com/v0/b/mobilecrypto-b1543.appspot.com/o/Images%2FDefiThumb.jpeg?alt=media&token=9d137f0e-f31f-4f71-a25b-a35e6174b27d'}}
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
   //onPress = {() => this.alertItemName(item)}>
   navigate(itemid) {
      if(itemid == 0)
         Actions.WhatIsDeFi1();
      if(itemid == 1)
         Actions.WalletDifferences2();
      if(itemid == 2)
         Actions.DesktopMetaWalletInst3();
      if(itemid == 3)
         Actions.DeFiEco4();
      if(itemid == 4)
         Actions.DeskMetConnDapp5();
      if(itemid == 5)
         Actions.NavDeskExt6();
      if(itemid == 6)
         Actions.GWEIExp7();
      if(itemid == 7)
         Actions.TradeUniswap8();
      if(itemid == 8)
         Actions.etherscan9();
      if(itemid == 9)
         Actions.speedmeta10();
      if(itemid == 10)
         Actions.cancelmeta11();
      if(itemid == 11)
         Actions.trademoon12();
      if(itemid == 12)
         Actions.removeliquid13();
      if(itemid == 13)
         Actions.oneinch14();
      if(itemid == 14)
         Actions.matcha15();
      if(itemid == 15)
         Actions.addliquid16();
      if(itemid == 16)
         Actions.loopring17();
      if(itemid == 17)
         Actions.zapper18();
      if(itemid == 18)
         Actions.dao19();
      if(itemid == 19)
         Actions.cream20();
      if(itemid == 20)
         Actions.aave21();
      if(itemid == 21)
         Actions.BalDex22();
      if(itemid == 22)
         Actions.BalPool23();
      if(itemid == 23)
         Actions.debank24();
      if(itemid == 24)
         Actions.zerion25();
      if(itemid == 25)
         Actions.compund26();
      if(itemid == 26)
         Actions.lend27();
   }
}
export default DeFi

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

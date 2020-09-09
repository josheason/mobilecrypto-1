import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'What is DeFi',
         },
         {
            id: 1,
            name: 'Wallet Diffrences',
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
         <ScrollView>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress={()=>this.navigate(item.id)}>
                     //onPress = {() => this.alertItemName(item)}>
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
         Actions.WhatIsDefi();
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

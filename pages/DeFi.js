import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
   
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
         <ScrollView>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress={()=>this.navigate(item.id)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }    
         </ScrollView>
         
      )
   }
   //onPress = {() => this.alertItemName(item)}>
   navigate(itemid) {
      if(itemid == 0)
         Actions.WhatIsDeFi();
      if(itemid == 1)
         Actions.WalletDifferences();
      if(itemid == 2)
         Actions.DesktopMetaWalletInst();
      if(itemid == 3)
         Actions.DeFiEco();
      if(itemid == 4)
         Actions.DeskMetConnDapp();
      if(itemid == 5)
         Actions.NavDeskExt();
      if(itemid == 6)
         Actions.GWEIExp();
      if(itemid == 7)
         Actions.TradeUniswap();
      if(itemid == 8)
         Actions.etherscan();
      if(itemid == 9)
         Actions.speedmeta();
      if(itemid == 10)
         Actions.cancelmeta();
      if(itemid == 11)
         Actions.trademoon();
      if(itemid == 12)
         Actions.removeliquid();
      if(itemid == 13)
         Actions.oneinch();
      if(itemid == 14)
         Actions.matcha();
      if(itemid == 15)
         Actions.addliquid();
      if(itemid == 16)
         Actions.loopring();
      if(itemid == 17)
         Actions.zapper();
      if(itemid == 18)
         Actions.dao();
      if(itemid == 19)
         Actions.cream();
      /*
      if(itemid == 20)
         Actions.Week9();
      if(itemid == 21)
         Actions.Week10();
      if(itemid == 22)
         Actions.DeFi();
      if(itemid == 23)
         Actions.DeFi();
      if(itemid == 24)
         Actions.DeFi();
      if(itemid == 25)
         Actions.DeFi();
      if(itemid == 26)
         Actions.DeFi();*/
   }
}
export default DeFi

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

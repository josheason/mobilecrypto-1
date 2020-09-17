import React from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'

import Login from './pages/Login.js'

import List from './pages/List.js'

import StartHere from './pages/StartHere/StartHere.js'
import Week1 from './pages/Week1/Week1.js'
import Week2 from './pages/Week2/Week2.js'
import Week3SS from './pages/Week3SS/Week3SS.js'
import Week3RF from './pages/Week3RF/Week3RF.js'
import Week4 from './pages/Week4/Week4.js'
import Week5 from './pages/Week5/Week5.js'
import Week6 from './pages/Week6/Week6.js'
import Week7 from './pages/Week7/Week7.js'
import Week8 from './pages/Week8/Week8.js'
import Week9 from './pages/Week9/Week9.js'
import Week10 from './pages/Week10/Week10.js'
import DeFi from './pages/DeFi/DeFi.js'


import WhatIsDeFi1 from './pages/DeFi/WhatIsDeFi1.js'
import WalletDifferences2 from './pages/DeFi/WalletDifferences2.js'
import DesktopMetaWalletInst3 from './pages/DeFi/DesktopMetaWalletInst3.js'
import DeFiEco4 from './pages/DeFi/DeFiEco4.js'
import DeskMetConnDapp5 from './pages/DeFi/DeskMetConnDapp5.js'
import NavDeskExt6 from './pages/DeFi/NavDeskExt6.js'
import GWEIExp7 from './pages/DeFi/GWEIExp7.js'
import TradeUniswap8 from './pages/DeFi/TradeUniswap8.js'
import etherscan9 from './pages/DeFi/etherscan9.js'
import speedmeta10 from './pages/DeFi/speedmeta10.js'
import cancelmeta11 from './pages/DeFi/cancelmeta11.js'
import trademoon12 from './pages/DeFi/trademoon12.js'
import removeliquid13 from './pages/DeFi/removeliquid13.js'
import oneinch14 from './pages/DeFi/oneinch14.js'
import matcha15 from './pages/DeFi/matcha15.js'
import addliquid16 from './pages/DeFi/addliquid16.js'
import loopring17 from './pages/DeFi/loopring17.js'
import zapper18 from './pages/DeFi/zapper18.js'
import dao19 from './pages/DeFi/dao19.js'
import cream20 from './pages/DeFi/cream20.js'
import aave21 from './pages/DeFi/aave21.js'
import BalDex22 from './pages/DeFi/BalDex22.js'
import BalPool23 from './pages/DeFi/BalPool23.js'
import debank24 from './pages/DeFi/debank24.js'
import zerion25 from './pages/DeFi/zerion25.js'
import compound26 from './pages/DeFi/compound26.js'
import lend27 from './pages/DeFi/lend27.js'
import dashboard from './pages/dashboard.js'

import introweek1 from './pages/Week1/introweek1.js'

import win3 from './pages/Week1/win3.js'



const styles = StyleSheet.create({
    titlestyle: {
        color: '#ffffff',
        // height: 80,
        textAlign: 'center',
        flex: 1,
        //right: 22,
    },
    titlebackground: {
        backgroundColor: '#101010',
        marginTop: -50,
        //height: 10,
    },
    centertitle:{
        left: 0,
    }
});

const Routes = ()=> {    
    return (
        <Router navigationBarStyle={styles.titlebackground} titleStyle={styles.titlestyle} tintColor='#ffffff' headerTitleContainerStyle={styles.centertitle}>
           <Scene key="root" >
                <Scene
                    key="login"
                    // title="Login"
                    component={Login}>
                </Scene>
                <Scene
                    key="list"
                    title="Fundamental Secrets"
                    component={List}>
                </Scene>
                <Scene
                    key="StartHere"
                    title="How To Use & Resources"
                    component={StartHere}>
                </Scene>
                <Scene
                    key="Week1"
                    title="Week 1: Mind"
                    component={Week1}>
                </Scene>
                <Scene
                    key="Week2"
                    title="Week 2: Blockchain"
                    component={Week2}>
                </Scene>
                <Scene
                    key="Week3SS"
                    title="Week 3: Security + Storage"
                    component={Week3SS}>
                </Scene>
                <Scene
                    key="Week3RF"
                    title="Week 3: Research Fundamentals"
                    component={Week3RF}>
                </Scene>
                <Scene
                    key="Week4"
                    title="Week 4: Marketing"
                    component={Week4}>
                </Scene>
                <Scene
                    key="Week5"
                    title="Week 5: Leadership"
                    component={Week5}>
                </Scene>
                <Scene
                    key="Week6"
                    title="Week 6: Product"
                    component={Week6}>
                </Scene>
                <Scene
                    key="Week7"
                    title="Week 7: Industry"
                    component={Week7}>
                </Scene>
                <Scene
                    key="Week8"
                    title="Week 8: Technical Analysis"
                    component={Week8}>
                </Scene>
                <Scene
                    key="Week9"
                    title="Week 9: Ratios"
                    component={Week9}>
                </Scene>
                <Scene
                    key="Week10"
                    title="Week 10: Proven Ways to Make Money In Crypto"
                    component={Week10}>
                </Scene>
                <Scene
                    key="DeFi"
                    title="DeFi Trading"
                    component={DeFi}>
                </Scene>
                <Scene
                    key="WhatIsDeFi1"
                    title="WhatIsDeFi1"
                    component={WhatIsDeFi1}>
                </Scene>
                 <Scene
                    key="WalletDifferences2"
                    title="WalletDifferences2"
                    component={WalletDifferences2}>
                </Scene>
                <Scene
                    key="DesktopMetaWalletInst3"
                    title="DesktopMetaWalletInst3"
                    component={DesktopMetaWalletInst3}>
                </Scene>
                <Scene
                    key="DeFiEco4"
                    title="DeFiEco4"
                    component={DeFiEco4}>
                </Scene>
                 <Scene
                    key="DeskMetConnDapp5"
                    title="DeskMetConnDapp5"
                    component={DeskMetConnDapp5}>
                   </Scene>
                    <Scene
                    key="NavDeskExt6"
                    title="NavDeskExt6"
                    component={NavDeskExt6}>
                   </Scene>
                    <Scene
                    key="GWEIExp7"
                    title="GWEIExp7"
                    component={GWEIExp7}>
                   </Scene>
                    <Scene
                    key="TradeUniswap8"
                    title="TradeUniswap8"
                    component={TradeUniswap8}>
                   </Scene>
                   <Scene
                    key="etherscan9"
                    title="etherscan9"
                    component={etherscan9}>
                   </Scene>
                    <Scene
                    key="speedmeta10"
                    title="speedmeta10"
                    component={speedmeta10}>
                   </Scene>
                   <Scene
                    key="cancelmeta11"
                    title="cancelmeta11"
                    component={cancelmeta11}>
                   </Scene>
                   <Scene
                    key="trademoon12"
                    title="trademoon12"
                    component={trademoon12}>
                   </Scene>
                   <Scene
                    key="removeliquid13"
                    title="removeliquid13"
                    component={removeliquid13}>
                   </Scene>
                   <Scene
                    key="oneinch14"
                    title="oneinch14"
                    component={oneinch14}>
                   </Scene>
                   <Scene
                    key="matcha15"
                    title="matcha15"
                    component={matcha15}>
                   </Scene>
                   <Scene
                    key="addliquid16"
                    title="addliquid16"
                    component={addliquid16}>
                   </Scene>
                   <Scene
                    key="loopring17"
                    title="loopring17"
                    component={loopring17}>
                   </Scene>
                   <Scene
                    key="zapper18"
                    title="zapper18"
                    component={zapper18}>
                   </Scene>
                   <Scene
                    key="dao19"
                    title="dao19"
                    component={dao19}>
                   </Scene>
                   <Scene
                    key="cream20"
                    title="cream20"
                    component={cream20}>
                   </Scene>
                   <Scene
                    key="aave21"
                    title="aave21"
                    component={aave21}>
                   </Scene>
                   <Scene
                    key="BalDex22"
                    title="BalDex22"
                    component={BalDex22}>
                   </Scene>
                   <Scene
                    key="BalPool23"
                    title="BalPool23"
                    component={BalPool23}>
                   </Scene>
                   <Scene
                    key="debank24"
                    title="debank24"
                    component={debank24}>
                   </Scene>
                   <Scene
                    key="zerion25"
                    title="zerion25"
                    component={zerion25}>
                   </Scene>
                   <Scene
                    key="compound26"
                    title="compound26"
                    component={compound26}>
                   </Scene>
                   <Scene
                    key="lend27"
                    title="lend27"
                    component={lend27}>
                   </Scene>
                   <Scene
                    key="dashboard"
                    title="dashboard"
                    component={dashboard}>
                   </Scene>
                    <Scene
                    key="introweek1"
                    title="introweek1"
                    component={introweek1}>
                   </Scene>
                    <Scene
                    key="win3"
                    title="win3"
                    component={win3}>
                   </Scene>
           </Scene>
        </Router>
    )
}

export default Routes


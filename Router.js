import React from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'

import Login from './pages/Login.js'

import List from './pages/List.js'

import StartHere from './pages/StartHere.js'
import Week1 from './pages/Week1.js'
import Week2 from './pages/Week2.js'
import Week3SS from './pages/Week3SS.js'
import Week3RF from './pages/Week3RF.js'
import Week4 from './pages/Week3RF.js'
import Week5 from './pages/Week5.js'
import Week6 from './pages/Week6.js'
import Week7 from './pages/Week7.js'
import Week8 from './pages/Week8.js'
import Week9 from './pages/Week9.js'
import Week10 from './pages/Week10.js'
import DeFi from './pages/DeFi.js'


import WhatIsDeFi1 from './pages/WhatIsDeFi1.js'
import WalletDifferences2 from './pages/WalletDifferences2.js'
import DesktopMetaWalletInst3 from './pages/DesktopMetaWalletInst3.js'
import DeFiEco4 from './pages/DeFiEco4.js'
import DeskMetConnDapp5 from './pages/DeskMetConnDapp5.js'
import NavDeskExt6 from './pages/NavDeskExt6.js'
import GWEIExp7 from './pages/GWEIExp7.js'
import TradeUniswap8 from './pages/TradeUniswap8.js'
import etherscan9 from './pages/etherscan9.js'
import speedmeta10 from './pages/speedmeta10.js'
import cancelmeta11 from './pages/cancelmeta11.js'
import trademoon12 from './pages/trademoon12.js'
import removeliquid13 from './pages/removeliquid13.js'
import oneinch14 from './pages/oneinch14.js'
import matcha15 from './pages/matcha15.js'
import addliquid16 from './pages/addliquid16.js'
import loopring17 from './pages/loopring17.js'
import zapper18 from './pages/zapper18.js'
import dao19 from './pages/dao19.js'
import cream20 from './pages/cream20.js'
import aave21 from './pages/aave21.js'
import BalDex22 from './pages/BalDex22.js'
import BalPool23 from './pages/BalPool23.js'
import debank24 from './pages/debank24.js'
import zerion25 from './pages/zerion25.js'
import compound26 from './pages/compound26.js'
import lend27 from './pages/lend27.js'
import dashboard from './pages/dashboard.js'



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
                    title="StartHere"
                    component={StartHere}>
                </Scene>
                <Scene
                    key="Week1"
                    title="Week1"
                    component={Week1}>
                </Scene>
                <Scene
                    key="Week2"
                    title="Week2"
                    component={Week2}>
                </Scene>
                <Scene
                    key="Week3SS"
                    title="Week3SS"
                    component={Week3SS}>
                </Scene>
                <Scene
                    key="Week3RF"
                    title="Week3RF"
                    component={Week3RF}>
                </Scene>
                <Scene
                    key="Week4"
                    title="Week4"
                    component={Week4}>
                </Scene>
                <Scene
                    key="Week5"
                    title="Week5"
                    component={Week5}>
                </Scene>
                <Scene
                    key="Week6"
                    title="Week6"
                    component={Week6}>
                </Scene>
                <Scene
                    key="Week7"
                    title="Week7"
                    component={Week7}>
                </Scene>
                <Scene
                    key="Week8"
                    title="Week8"
                    component={Week8}>
                </Scene>
                <Scene
                    key="Week9"
                    title="Week9"
                    component={Week9}>
                </Scene>
                <Scene
                    key="Week10"
                    title="Week10"
                    component={Week10}>
                </Scene>
                <Scene
                    key="DeFi"
                    title="DeFi"
                    component={DeFi}>
                </Scene>
                <Scene
                    key="WhatIsDeFi1"
                    title="WhatIsDeFi1"
                    component={WhatIsDeFi1}>
                </Scene>
                 <Scene
                    key="WalletDifferences"
                    title="WalletDifferences"
                    component={WalletDifferences}>
                </Scene>
                <Scene
                    key="DesktopMetaWalletInst"
                    title="DesktopMetaWalletInst"
                    component={DesktopMetaWalletInst}>
                </Scene>
                <Scene
                    key="DeFiEco"
                    title="DeFiEco"
                    component={DeFiEco}>
                </Scene>
                 <Scene
                    key="DeskMetConnDapp"
                    title="DeskMetConnDapp"
                    component={DeskMetConnDapp}>
                   </Scene>
                    <Scene
                    key="NavDeskExt"
                    title="NavDeskExt"
                    component={NavDeskExt}>
                   </Scene>
                    <Scene
                    key="GWEIExp"
                    title="GWEIExp"
                    component={GWEIExp}>
                   </Scene>
                    <Scene
                    key="TradeUniswap"
                    title="TradeUniswap"
                    component={TradeUniswap}>
                   </Scene>
                   <Scene
                    key="etherscan"
                    title="etherscan"
                    component={etherscan}>
                   </Scene>
                    <Scene
                    key="speedmeta"
                    title="speedmeta"
                    component={speedmeta}>
                   </Scene>
                   <Scene
                    key="cancelmeta"
                    title="cancelmeta"
                    component={cancelmeta}>
                   </Scene>
                   <Scene
                    key="trademoon"
                    title="trademoon"
                    component={trademoon}>
                   </Scene>
                   <Scene
                    key="removeliquid"
                    title="removeliquid"
                    component={removeliquid}>
                   </Scene>
                   <Scene
                    key="oneinch"
                    title="oneinch"
                    component={oneinch}>
                   </Scene>
                   <Scene
                    key="matcha"
                    title="matcha"
                    component={matcha}>
                   </Scene>
                   <Scene
                    key="addliquid"
                    title="addliquid"
                    component={addliquid}>
                   </Scene>
                   <Scene
                    key="loopring"
                    title="loopring"
                    component={loopring}>
                   </Scene>
                   <Scene
                    key="zapper"
                    title="zapper"
                    component={zapper}>
                   </Scene>
                   <Scene
                    key="dao"
                    title="dao"
                    component={dao}>
                   </Scene>
                   <Scene
                    key="cream"
                    title="cream"
                    component={cream}>
                   </Scene>
                   <Scene
                    key="aave"
                    title="aave"
                    component={aave}>
                   </Scene>
                   <Scene
                    key="BalDex"
                    title="BalDex"
                    component={BalDex}>
                   </Scene>
                   <Scene
                    key="BalPool"
                    title="BalPool"
                    component={BalPool}>
                   </Scene>
                   <Scene
                    key="debank"
                    title="debank"
                    component={debank}>
                   </Scene>
                   <Scene
                    key="zerion"
                    title="zerion"
                    component={zerion}>
                   </Scene>
                   <Scene
                    key="compound"
                    title="compound"
                    component={compound}>
                   </Scene>
                   <Scene
                    key="lend"
                    title="lend"
                    component={lend}>
                   </Scene>
                   <Scene
                    key="dashboard"
                    title="dashboard"
                    component={dashboard}>
                   </Scene>
           </Scene>
        </Router>
    )
}

export default Routes


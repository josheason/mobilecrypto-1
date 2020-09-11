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
import WhatIsDeFi from './pages/WhatIsDeFi.js'
import WalletDifferences from './pages/WalletDifferences.js'
import DesktopMetaWalletInst from './pages/DesktopMetaWalletInst.js'
import DeFiEco from './pages/DeFiEco.js'
import DeskMetConnDapp from './pages/DeskMetConnDapp.js'
import NavDeskExt from './pages/NavDeskExt.js'
import GWEIExp from './pages/GWEIExp.js'
import TradeUniswap from './pages/TradeUniswap.js'
import etherscan from './pages/etherscan.js'
import speedmeta from './pages/speedmeta.js'
import cancelmeta from './pages/cancelmeta.js'
import trademoon from './pages/trademoon.js'
import removeliquid from './pages/removeliquid.js'
import oneinch from './pages/oneinch.js'
import matcha from './pages/matcha.js'
import addliquid from './pages/addliquid.js'
import loopring from './pages/loopring.js'
import zapper from './pages/zapper.js'
import dao from './pages/dao.js'


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
                    key="WhatIsDeFi"
                    title="WhatIsDeFi"
                    component={WhatIsDeFi}>
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
           </Scene>
        </Router>
    )
}

export default Routes


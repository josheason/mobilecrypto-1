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
import booklistw12 from './pages/Week1/booklistw12.js'
import win3 from './pages/Week1/win3.js'
import body4 from './pages/Week1/body4.js'
import time5 from './pages/Week1/time5.js'
import focus6 from './pages/Week1/focus6.js'
import sixrules7 from './pages/Week1/sixrules7.js'
import rewire8 from './pages/Week1/rewire8.js'

import week2intro1 from './pages/Week2/week2intro1.js'
import booklistw2 from './pages/Week2/booklistw2.js'
import internetwork3 from './pages/Week2/internetwork3.js'
import bitcoin1014 from './pages/Week2/bitcoin1014.js'
import bitcoin1025 from './pages/Week2/bitcoin1025.js'
import eth1016 from './pages/Week2/eth1016.js'
import eth1027 from './pages/Week2/eth1027.js'
import mcyclesimp8 from './pages/Week2/mcyclesimp8.js'
import bitbestform9 from './pages/Week2/bitbestform9.js'
import investcrypto10 from './pages/Week2/investcrypto10.js'
import dapps11 from './pages/Week2/dapps11.js'
import defi12 from './pages/Week2/defi12.js'

import week3intro1 from './pages/Week3SS/week3intro1.js'
import sendcrypto2 from './pages/Week3SS/sendcrypto2.js'
import coinbase3 from './pages/Week3SS/coinbase3.js'
import details4 from './pages/Week3SS/details4.js'
import coinbasepro5 from './pages/Week3SS/coinbasepro5.js'
import bintut6 from './pages/Week3SS/bintut6.js'
import hitbextut7 from './pages/Week3SS/hitbextut7.js'
import deskwall8 from './pages/Week3SS/deskwall8.js'
import chromeextwall9 from './pages/Week3SS/chromeextwall9.js'
import dexdappsdefitut10 from './pages/Week3SS/dexdappsdefitut10.js'
import vpn11 from './pages/Week3SS/vpn11.js'
import googleauth12 from './pages/Week3SS/googleauth12.js'
import keepass13 from './pages/Week3SS/keepass13.js'
import whatexuse14 from './pages/Week3SS/whatexuse14.js'
import ultimsec15 from './pages/Week3SS/ultimsec15.js'

import researchlist2 from './pages/Week3RF/researchlist2.js'
import w3booklist1 from './pages/Week3RF/w3booklist1.js'
import deskorg3 from './pages/Week3RF/deskorg3.js'
import avoidcred4 from './pages/Week3RF/avoidcred4.js'
import whitepaper1015 from './pages/Week3RF/whitepaper1015.js'
import blackbox6 from './pages/Week3RF/blackbox6.js'


import week4intro1 from './pages/Week4/week4intro1.js'
import w4booklist2 from './pages/Week4/w4booklist2.js'
import socialmediabas3 from './pages/Week4/socialmediabas3.js'
import googadwordcrypto4 from './pages/Week4/googadwordcrypto4.js'
import scrapytdata5 from './pages/Week4/scrapytdata5.js'
import webconvdes6 from './pages/Week4/webconvdes6.js'
import webtraff7 from './pages/Week4/webtraff7.js'
import webedu8 from './pages/Week4/webedu8.js'

import week5intro1 from './pages/Week5/week5intro1.js'
import w5booklist2 from './pages/Week5/w5booklist2.js'
import mainleads3 from './pages/Week5/mainleads3.js'
import repu4 from './pages/Week5/repu4.js'
import litigations5 from './pages/Week5/litigations5.js'
import partnerships6 from './pages/Week5/partnerships6.js'
import corpgov7 from './pages/Week5/corpgov7.js'



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
                   <Scene
                    key="body4"
                    title="body4"
                    component={body4}>
                   </Scene>
                    <Scene
                    key="booklistw12"
                    title="booklistw12"
                    component={booklistw12}>
                   </Scene>
                    <Scene
                    key="time5"
                    title="time5"
                    component={time5}>
                   </Scene>
                    <Scene
                    key="focus6"
                    title="focus6"
                    component={focus6}>
                   </Scene>
                    <Scene
                    key="sixrules7"
                    title="sixrules7"
                    component={sixrules7}>
                   </Scene>
                    <Scene
                    key="rewire8"
                    title="rewire8"
                    component={rewire8}>
                   </Scene>
                   <Scene
                    key="week2intro1"
                    title="week2intro1"
                    component={week2intro1}>
                   </Scene>
                    <Scene
                    key="booklistw2"
                    title="booklistw2"
                    component={booklistw2}>
                   </Scene>
                    <Scene
                    key="internetwork3"
                    title="internetwork3"
                    component={internetwork3}>
                   </Scene>
                   <Scene
                    key="bitcoin1014"
                    title="bitcoin1014"
                    component={bitcoin1014}>
                   </Scene>
                   <Scene
                    key="bitcoin1025"
                    title="bitcoin1025"
                    component={bitcoin1025}>
                   </Scene>
                   <Scene
                    key="eth1016"
                    title="eth1016"
                    component={eth1016}>
                   </Scene>
                   <Scene
                    key="eth1027"
                    title="eth1027"
                    component={eth1027}>
                   </Scene>
                   <Scene
                    key="mcyclesimp8"
                    title="mcyclesimp8"
                    component={mcyclesimp8}>
                   </Scene>
                   <Scene
                    key="bitbestform9"
                    title="bitbestform9"
                    component={bitbestform9}>
                   </Scene>
                   <Scene
                    key="investcrypto10"
                    title="investcrypto10"
                    component={investcrypto10}>
                   </Scene>
                   <Scene
                    key="dapps11"
                    title="dapps11"
                    component={dapps11}>
                   </Scene>
                   <Scene
                    key="defi12"
                    title="defi12"
                    component={defi12}>
                   </Scene>
                   <Scene
                    key="week3intro1"
                    title="week3intro1"
                    component={week3intro1}>
                   </Scene>
                    <Scene
                    key="sendcrypto2"
                    title="sendcrypto2"
                    component={sendcrypto2}>
                   </Scene>
                    <Scene
                    key="coinbase3"
                    title="coinbase3"
                    component={coinbase3}>
                   </Scene>
                    <Scene
                    key="details4"
                    title="details4"
                    component={details4}>
                   </Scene>
                    <Scene
                    key="coinbasepro5"
                    title="coinbasepro5"
                    component={coinbasepro5}>
                   </Scene>
                    <Scene
                    key="bintut6"
                    title="bintut6"
                    component={bintut6}>
                   </Scene>
                    <Scene
                    key="hitbextut7"
                    title="hitbextut7"
                    component={hitbextut7}>
                   </Scene>
                    <Scene
                    key="deskwall8"
                    title="deskwall8"
                    component={deskwall8}>
                   </Scene>
                    <Scene
                    key="chromeextwall9"
                    title="chromeextwall9"
                    component={chromeextwall9}>
                   </Scene>
                    <Scene
                    key="dexdappsdefitut10"
                    title="dexdappsdefitut10"
                    component={dexdappsdefitut10}>
                   </Scene>
                    <Scene
                    key="vpn11"
                    title="vpn11"
                    component={vpn11}>
                   </Scene>
                    <Scene
                    key="googleauth12"
                    title="googleauth12"
                    component={googleauth12}>
                   </Scene>
                    <Scene
                    key="keepass13"
                    title="keepass13"
                    component={keepass13}>
                   </Scene>
                    <Scene
                    key="whatexuse14"
                    title="whatexuse14"
                    component={whatexuse14}>
                   </Scene>
                    <Scene
                    key="ultimsec15"
                    title="ultimsec15"
                    component={ultimsec15}>
                   </Scene>
                    <Scene
                    key="w3booklist1"
                    title="w3booklist1"
                    component={w3booklist1}>
                    </Scene>
                    <Scene
                    key="researchlist2"
                    title="researchlist2"
                    component={researchlist2}>
                   </Scene>
                    <Scene
                    key="deskorg3"
                    title="deskorg3"
                    component={deskorg3}>
                   </Scene>
                    <Scene
                    key="avoidcred4"
                    title="avoidcred4"
                    component={avoidcred4}>
                   </Scene>
                    <Scene
                    key="whitepaper1015"
                    title="whitepaper1015"
                    component={whitepaper1015}>
                   </Scene>
                    <Scene
                    key="blackbox6"
                    title="blackbox6"
                    component={blackbox6}>
                   </Scene>
                    <Scene
                    key="week4intro1"
                    title="week4intro1"
                    component={week4intro1}>
                   </Scene>
                    <Scene
                    key="w4booklist2"
                    title="w4booklist2"
                    component={w4booklist2}>
                   </Scene>
                    <Scene
                    key="socialmediabas3"
                    title="socialmediabas3"
                    component={socialmediabas3}>
                   </Scene>
                    <Scene
                    key="googadwordcrypto4"
                    title="googadwordcrypto4"
                    component={googadwordcrypto4}>
                   </Scene>
                    <Scene
                    key="scrapytdata5"
                    title="scrapytdata5"
                    component={scrapytdata5}>
                   </Scene>
                    <Scene
                    key="webconvdes6"
                    title="webconvdes6"
                    component={webconvdes6}>
                   </Scene>
                    <Scene
                    key="webtraff7"
                    title="webtraff7"
                    component={webtraff7}>
                   </Scene>
                    <Scene
                    key="webedu8"
                    title="webedu8"
                    component={webedu8}>
                   </Scene>
                    <Scene
                    key="week5intro1"
                    title="week5intro1"
                    component={week5intro1}>
                   </Scene>
                    <Scene
                    key="w5booklist2"
                    title="w5booklist2"
                    component={w5booklist2}>
                   </Scene>
                    <Scene
                    key="mainleads3"
                    title="mainleads3"
                    component={mainleads3}>
                   </Scene>
                    <Scene
                    key="repu4"
                    title="repu4"
                    component={repu4}>
                   </Scene>
                    <Scene
                    key="litigations5"
                    title="litigations5"
                    component={litigations5}>
                   </Scene>
                    <Scene
                    key="partnerships6"
                    title="partnerships6"
                    component={partnerships6}>
                   </Scene>
                    <Scene
                    key="corpgov7"
                    title="corpgov7"
                    component={corpgov7}>
                   </Scene>
           </Scene>
        </Router>
    )
}

export default Routes


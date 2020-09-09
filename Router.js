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
           </Scene>
        </Router>
    )
}

export default Routes


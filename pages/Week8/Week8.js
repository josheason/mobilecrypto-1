import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('../styles');
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Trading View Tutorial',
         },
         {
            id: 1,
            name: 'Mass Psychology',
         },
         {
            id: 2,
            name: 'Bulls and The Bears',
         },
         {
            id: 3,
            name: 'Short vs Long Term Tech Analysis',
         },
         {
            id: 4,
            name: 'Criteria and Misconceptions of Technical Analysis and Indicators',
         },
         {
            id: 5,
            name: 'Order Book + More',
         },
         {
            id: 6,
            name: 'Candlestick Function Variation and Analysis',
         },
         {
            id: 7,
            name: 'Support And Resistance',
         },
         {
            id: 8,
            name: 'Trendlines And Patterns',
         },
         {
            id: 9,
            name: 'Moving Averages',
         },
         {
            id: 10,
            name: 'MACD RSI',
         },
         {
            id: 11,
            name: 'Bollinger Bands and Fibonacci Retracement',
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
         Actions.tradeviewtut1();
      if(itemid == 1)
         Actions.masspsych2();
      if(itemid == 2)
         Actions.bullsnbears3();
      if(itemid == 3)
         Actions.shortvlonganal4();
      if(itemid == 4)
         Actions.critnmistechanalind5();
      if(itemid == 5)
         Actions.orderbookmore6();
      if(itemid == 6)
         Actions.candle7();
      if(itemid == 7)
         Actions.support8();
      if(itemid == 8)
         Actions.trend9();
      if(itemid == 9)
         Actions.moving10();
      if(itemid == 10)
         Actions.macdrsi11();
      if(itemid == 11)
         Actions.bollinger12();
   }
}
export default List

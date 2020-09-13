import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('./styles');
   
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
                     onPress = {() => this.alertItemName(item)}>
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
         Actions.StartHere();
      if(itemid == 1)
         this.navigate2();
   }
}
export default List

const styles = StyleSheet.create ({
   text: {
      color: '#ffffff'
   }
})

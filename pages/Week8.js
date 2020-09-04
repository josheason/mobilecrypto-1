import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
   
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
         <ScrollView>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
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
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'START HERE: How To Use & Resources',
         },
         {
            id: 1,
            name: 'Week 1: Mind',
         },
         {
            id: 2,
            name: 'Week 2: Blockchain',
         },
         {
            id: 3,
            name: 'Week 3: Security + Storage',
         },
         {
            id: 4,
            name: 'Week 4: Marketing',
         },
         {
            id: 5,
            name: 'Week 5: Leadership',
         },
         {
            id: 6,
            name: 'Week 6: Product',
         },
         {
            id: 7,
            name: 'Week 7: Industry',
         },
         {
            id: 8,
            name: 'Week 8: Technical Analysis',
         },
         {
            id: 9,
            name: 'Week 9: Ratios',
         },
         {
            id: 10,
            name: 'Week 10: Proven Ways to Make Money In Crypto',
         },
         {
            id: 11,
            name: 'DeFi Trading',
         },
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         <View>
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
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 18,
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
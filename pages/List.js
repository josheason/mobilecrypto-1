import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image  } from 'react-native'
import { Actions } from 'react-native-router-flux';
var s = require('./styles');
   
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
            name: 'Week 3: Research Fundamentals',
         },
         {
            id: 5,
            name: 'Week 4: Marketing',
         },
         {
            id: 6,
            name: 'Week 5: Leadership',
         },
         {
            id: 7,
            name: 'Week 6: Product',
         },
         {
            id: 8,
            name: 'Week 7: Industry',
         },
         {
            id: 9,
            name: 'Week 8: Technical Analysis',
         },
         {
            id: 10,
            name: 'Week 9: Ratios',
         },
         {
            id: 11,
            name: 'Week 10: Proven Ways to Make Money In Crypto',
         },
         {
            id: 12,
            name: 'DeFi Trading',
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
                     onPress={()=>this.navigate(item.id)}>
                      <Image 
                        source = {require('./images/fundsec.png')}
                        style = {styles.img}
                        />
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                     <Image 
                        source = {require('./images/playbut.png')}
                        style = {styles.imgR}
                        />
                  </TouchableOpacity>
               ))
            }    
         </ScrollView >
         
      )
   }
   

   
   
   navigate(itemid) {
      if(itemid == 0)
         Actions.Start();
      if(itemid == 1)
         Actions.Week1();
      if(itemid == 2)
         Actions.Week2();
      if(itemid == 3)
         Actions.Week3SS();
      if(itemid == 4)
         Actions.Week3RF();
      if(itemid == 5)
         Actions.Week4();
      if(itemid == 6)
         Actions.Week5();
      if(itemid == 7)
         Actions.Week6();
      if(itemid == 8)
         Actions.Week7();
      if(itemid == 9)
         Actions.Week8();
      if(itemid == 10)
         Actions.Week9();
      if(itemid == 11)
         Actions.Week10();
      if(itemid == 12)
         Actions.DeFi();
   }
}
export default List

const styles = StyleSheet.create ({
   text: {
      color: '#ffffff'
   },
   img: {
      width: 50,
      height: 50,
      position: 'absolute',
      left: 10,
      top: 10,
      padding: 20,
   },
   imgR: {
      width: 50,
      height: 50,
      position: 'absolute',
      right: 10,
      top: 10,
      padding: 20,
   },
})

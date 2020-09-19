import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image  } from 'react-native'
import { Actions } from 'react-native-router-flux';
   
class navList extends Component {
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
          style = {{ backgroundColor: '#000000' }}
         >
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.listcontainer}
                     onPress={()=>this.navigate(item.id)}>
                      <Image 
                        source = {{uri: 'https://firebasestorage.googleapis.com/v0/b/mobilecrypto-b1543.appspot.com/o/Images%2FthisFile.png?alt=media&token=e057451a-38bf-4034-b751-867554f9396d'}}
                        style = {styles.img}
                        />
                     <Text style = {styles.listtext}>
                        {item.name}
                     </Text>
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
export default navList



styles = StyleSheet.create({

listcontainer: {
    //padding: 25,
    marginTop: 5,
    marginBottom: 5,
    //marginLeft: 5,
    //marginRight: 5,
    backgroundColor: '#000000',
    alignItems: 'center',
    borderColor: "#121212",
    borderWidth: 1,
},
img: {
      width: 50,
      height: 50,
      position: 'absolute',
      left: 10,
      top: 10,
      padding: 20,
   },
listtext:{
  color: '#ffffff',
  textAlign: 'center',
  height: 35,
  width: 80,
  borderRadius: 60,
},

});



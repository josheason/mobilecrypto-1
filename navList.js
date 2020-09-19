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
         <><View style={{backgroundColor: '#000000'}}>
         <Text style={styles.spacing}>{` `}</Text>
         </View>
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
         </ScrollView ></>
         
      )
   }
   navigate(itemid) {
      if(itemid == 0)
         Actions.Start();
      if(itemid == 1)
         Actions.W1();
      if(itemid == 2)
         Actions.W2();
      if(itemid == 3)
         Actions.W3SS();
      if(itemid == 4)
         Actions.W3RF();
      if(itemid == 5)
         Actions.W4();
      if(itemid == 6)
         Actions.W5();
      if(itemid == 7)
         Actions.W6();
      if(itemid == 8)
         Actions.W7();
      if(itemid == 9)
         Actions.W8();
      if(itemid == 10)
         Actions.W9();
      if(itemid == 11)
         Actions.W10();
      if(itemid == 12)
         Actions.DEFI();
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
      width: 10,
      height: 10,
      position: 'absolute',
      left: 10,
      top: 2,
      padding: 20,
   },
listtext:{
  color: '#ffffff',
  textAlign: 'center',
  height: 45,
  width: 120,
  borderRadius: 60,
},
 spacing:{
    width: 35,
      height: 100,
      paddingBottom: 20,
 },

});



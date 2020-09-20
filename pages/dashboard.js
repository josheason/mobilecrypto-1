import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, Linking  } from 'react-native'
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import 'firebase/firestore';
import progress from './progress.js';

var test = require('./images/arrow.png');

class dashboard extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Continue To Course',
            src: './images/continue.png',
            active:1,
         },
         {
            id: 1,
            name: 'FaceBook Group',
            src: './images/facebook.png',
            active: 0,
         },
         {
            id: 2,
            name: 'Live Q&A',
            src: './images/live.png',
            active: 0,
         },
         {
            id: 3,
            name: 'Alex&spos;s Youtube',
            src: './images/youtube.png',
            active: 0,
         },
      ],
   }
counter(){
   const db = firebase.firestore();
   const ud = firebase.auth().currentUser;
   var user = firebase.auth().currentUser;
   const increment = firebase.firestore.FieldValue.increment(1);
   const watchedRef = db.collection('users');
   watchedRef.where('id', '==', '1')
      .where('dash', '==', false)
      .get().then(response => {
        let batch = db.batch()
        response.docs.forEach((doc) => {
            const docRef = watchedRef.doc(doc.id)
            batch.update(docRef, {watched: increment , dash: true})
        })
        batch.commit().then(() => {
            console.log(`updated all documents inside Users`)
        })
    })
   
   watchedRef.where('id', '==', user.uid)
      .get()
      .then(snapshots => {
      if (snapshots.size == 0) {
         watchedRef.doc(user.uid).set({
         dash: false,
         id: user.uid,
         watched: 0,
         })
         .then(() => {
            console.log('User added!');
          });
      }
    }).catch(error => {
    console.log(error);
   });
}
   
   
   
   
   
   
   
  useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


const App1 = () => {
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval(() => {
      setProgress(5);
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100
    }).start();
  },[progress])

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  })
  return (
    <View style={styles.container1}>
      <Text>
        Loading…..
      </Text>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width }}/>
      </View>
      <Text>
        {`${progress}%`}
      </Text>

    </View>
  );
}

export default App1;
   
   /*snapshot.forEach(doc => {
      const docRef = watchedRef.doc(doc.id)
      batch.update(docRef, {watched: increment, dash: true})
      console.log(doc.id, '=>', doc.data());
    })
    batch.commit().then(() => {
            console.log('updated all documents inside Users')
    })*/

   /*const db = firebase.firestore();
   const ud = firebase.auth().currentUser;
   const increment = firebase.firestore.FieldValue.increment(1);
   //const storyRef = db.collection('users').doc('user1');
   const storyRef = db.collection('users');
   storyRef
   .where('id', '==', '1')
   .where('dash', '==', false)
   .get()
   .update({watched: increment,
           dash : true})
   .then(() => {
    console.log('User updated!');
   });*/
   
   
   //storyRef.update({ watched: increment}).catch(error => {
    //console.log(error);
   /*storyRef.update({ watched: increment}).then(() => {
    console.log('User updated!');
  });*/
   
   /*render() {
      
      
      return (
         <ScrollView
          //style = {{ backgroundColor: '#595959' }}#121212
         style = {{ backgroundColor: '#121212' }}
         >
         {  
                 <>
                 
                  <TouchableOpacity
                     key = {1}
                     style = {styles.container}
                     onPress={()=>this.navigate(0)}>
                       <Image 
                        source = {test}
                        style = {styles.img}
                        />
                     <Text style = {styles.text}>
                        {'Continue To Course'}
                     </Text>
                  </TouchableOpacity>
        
                 
                  <TouchableOpacity
                     key = {2}
                     style = {styles.container}
                      onPress={ ()=>{ Linking.openURL('https://www.facebook.com/groups/fundamentalsecrets')}}>
                       <Image 
                        source = {require('./images/facebook.png')}
                        style = {styles.img}
                        />
                     <Text style = {styles.text}>
                        {'Facebook Group'}
                     </Text>
                  </TouchableOpacity>
                  <>
                  </>


                  <TouchableOpacity
                     key = {3}
                     style = {styles.container}
                     onPress={ ()=>{ Linking.openURL('https://www.thefundamentalsecrets.com/calendly-setup')}}>
                       <Image 
                        source = {require('./images/live.png')}
                        style = {styles.img}
                        />
                     <Text style = {styles.text}>
                        {'Live Q&A'}
                     </Text>
                  </TouchableOpacity>
                  <>
                  </>

                  
                  <TouchableOpacity
                     key = {4}
                     style = {styles.container}
                      onPress={ ()=>{ Linking.openURL('https://www.youtube.com/channel/UCHQv-nQ2caXVvtTFa8WOJRA?view_as=subscriber')}}>
                       <Image 
                        source = {require('./images/youtube.png')}
                        style = {styles.img}
                        />
                     <Text style = {styles.text}>
                        {"Alex's Youtube"}
                     </Text>
                  </TouchableOpacity>
                  <>
                  </>

 <TouchableOpacity
                  key = {0}
                  style = {styles.container}
                  onPress={()=>Actions.login()}>
                     <Text
                     style = {styles.header}
                       >
                        {'Sign Out'}
                     </Text>
                  </TouchableOpacity><></>


            }
         </ScrollView >

 
      )
   }
   navigate(itemid) {
      if(itemid == 0)
         Actions.list();
      if(itemid == 1)
         Actions.Week1();
      if(itemid == 2)
         Actions.Week2();
      if(itemid == 3)
         Actions.Week3SS();
   }
}
export default dashboard*/


const styles = StyleSheet.create ({
   container: {
      padding: 25,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 5,
      marginRight: 5,
      backgroundColor: '#fff',
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderTopWidth: 0.5,
      borderColor: "#121212",
      borderRadius: 15,
   },
   text: {
      color: '#000000'
   },
   img: {
      width: 50,
      height: 50,
      position: 'absolute',
      left: 10,
      top: 10,
      padding: 20,
   },
   header: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000',
   },
   container1: {
    flex: 1,
    flexDirection: 'Column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  }
})

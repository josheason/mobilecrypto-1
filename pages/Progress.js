import React, {useRef, useState, useEffect} from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import Constants from 'expo-constants';
import * as firebase from 'firebase';
import 'firebase/firestore';


function useInterval(callback, delay) {
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



async function getData(){
	  var user = firebase.auth().currentUser;
	  const db = firebase.firestore();
	  const watchedRef = db.collection('users').doc(user.uid);
	  const querySnapshot = await watchedRef.get();
	  const numWatched = querySnapshot.data().watched;
	return (numWatched/115)*100;
   	console.log(numWatched);
  }




/*async function getData(){
	var watch = 0;
	var user = firebase.auth().currentUser.uid;
	try {
    const doc = await firebase.firestore().collection('users').doc(user).get()
   promise.then(querySnapshot => {
    watch = querySnapshot.data().watched;
    console.log("Watched = "+ watch);
	   return (watch);
})
	}
catch(e) {
     console.log("Error Watched = "+ watch);
}
	}*/
	


/*async function grabUserData(){ {`${progress}%`}
	  const db = firebase.firestore();
	  var userId = firebase.auth().currentUser.uid;
	  var docRef = db.collection("users").doc(userId);
	   return docRef.get().then(function(doc) {
	   console.log(doc.data().watched); //see below for doc object
          if (doc.exists) {
          console.log(doc.data.watched()); //see below for doc object
          return doc.data().watched;
      }
		else {
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });*/


 //setProgress(getData());

const Progress = () => {	
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval( async ()  => {
      setProgress(await getData());
  }, 1000);
  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false,
    }).start();
  },[progress])

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  })
  return (
    <View style={styles.container1}>
      <Text style = {styles.text}>
	  {`Course Progress`}
      </Text>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width }}/>
      </View>
      <Text>
        {` `}
      </Text>

    </View>
  );
}

export default Progress;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#121212',
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
  },
text:{
color: 'white',
}
});

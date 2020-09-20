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
	  let v;
	try{
		return await firebase.firestore().collection('users').doc(user.uid).get().data().watched;
	}
	catch(e){
		return await firebase.firestore().collection('users').doc(user.uid).get().data().watched;
	}
  }



/*async function grabUserData(){
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
  useInterval(() => {
      setProgress(getData());
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

export default Progress;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'column',
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
});

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


/*async function getData(){
	  var user = firebase.auth().currentUser;
	  const db = firebase.firestore();
	  const watchedRef = db.collection('users').doc(user.uid);
	var num = 0;
	  const querySnapshot = await watchedRef.get()
	 	.then((res) => {
     		num = querySnapshot.data().watched;
  		})
  		.catch((errorMessage, statusCode) => {
    		 num = 0;
  		})
	//const numWatched = querySnapshot.data().watched;
	//var num = numWatched;
   	//console.log(numWatched);
	return(num);
  }*/




const Progress = () => {
	
	
	var num = 0;
	async function getData(){
	  var user = firebase.auth().currentUser;
	  const db = firebase.firestore();
	  const watchedRef = db.collection('users').doc(user.uid);
	  const querySnapshot = await watchedRef.get()
	 	.then((res) => {
     		num = querySnapshot.data().watched;
  		})
  		.catch((errorMessage, statusCode) => {
    		 num = 0;
  		})
	//const numWatched = querySnapshot.data().watched;
	//var num = numWatched;
   	//console.log(numWatched);
	return(num);
  }
	
	
	
	
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval(() => {
      setProgress(num);
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

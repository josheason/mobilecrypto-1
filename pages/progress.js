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





function getUserZipCode(documentSnapshot) {
  return documentSnapshot.get('info.address.watched');
}





const progress = () => {
   
  var user = firebase.auth().currentUser;
  var numWatched = 0;
  firebase.firestore().collection('users').doc(user.uid).get()
  .then(documentSnapshot => getUserZipCode(documentSnapshot))
  .then(watched => {
    console.log('Users watched is: ', watched);
    numWatched = watched;
  });
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval(() => {
      setProgress(numWatched);
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
    <View style={styles.container}>
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

export default progress;

const styles = StyleSheet.create({
  container: {
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

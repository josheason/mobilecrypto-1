//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Linking } from 'react-native';
import { Video } from 'expo-av';
import * as firebase from 'firebase';
import 'firebase/firestore';

const { width, height } = Dimensions.get('window');


 
//export default function WhatIsDeFi1(){
export default class introweek1 extends Component{
	
	componentDidMount(){
   		const db = firebase.firestore();
   		const ud = firebase.auth().currentUser;
   		var user = firebase.auth().currentUser;
   		const increment = firebase.firestore.FieldValue.increment(1);
   		const watchedRef = db.collection('users');
   		watchedRef.where('id', '==', user.uid)
     		 .where('introweek1', '==', false)
     		 .get().then(response => {
        		let batch = db.batch()
        		response.docs.forEach((doc) => {
            		const docRef = watchedRef.doc(doc.id)
            		batch.update(docRef, {watched: increment , introweek1: true})
        		})
        		batch.commit().then(() => {
            		console.log(`updated all documents inside this vid`)
        		})
    		})
	}
	
	render(){
	return(
		<View style = {styles.container}>
			<Text style={styles.text}>
			{'Intro Week 1'}
			</Text>
			<Text style={styles.space}>
			{'              '}
			</Text>
			<Video
			//source={{ uri: 'https://tfsc-avfc.s3.amazonaws.com/whatis.mp4'}}
			source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mobilecrypto-b1543.appspot.com/o/Week%201%2Fintroweek1.mp4?alt=media&token=c79c359c-bb98-4111-8f8e-68b4b7e44646'}}
			rate={1.0}
			volume={1.0}
			isMuted={false}
			resizeMode="cover"
			shouldPlay={false}
			isLooping={false}
			showControlsOnLoad={true}
			useNativeControls
	//		posterSource={require('./thumbnail.png')}
	//		posterStyle= {styles.poster}
        //              usePoster={true}
	//		posterResizeMode={'contain'}
			style={styles.video}
			/>
			<Text style={styles.containerURL}
			onPress={() => Linking.openURL('https://kajabi-storefronts-production.s3.amazonaws.com/posts/8572719/downloads/TxmtN4QGS5iRzzyhoyXS_Science_and_Human_Behavior.pdf?response-content-disposition=attachment%3B%20filename%3DScience_and_Human_Behavior.pdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI4TIKYMSB4PQMFBA%2F20200916%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200916T212257Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f4c33b29df1e354fda3ad9552186fb9a575c84d0223b4d0f00e94c8f5c3c53f5')}>
			{'Science_and_Human_Behavior.pdf'}
			</Text>
		</View>
		);
}
}
	
const styles = StyleSheet.create({
	video: {
		width: width,
		height: height/ 3,
	},
	space: {
		width: width,
		height: height/ 7,
	},
	poster: {
		width: width,
		height: height/ 3,
		opacity: 0.5,
	},
	container: {
		flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerURL: {
		flex :1,
		backgroundColor: '#121212',
		color: '#03dac5',
		alignItems: 'center',
	},
	text: {
		flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#fff',
		fontSize: 20,
		position: 'absolute',
		top: 15,
	},
});








/*
Works
import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

export default class WhatIsDeFi extends Component{
	state = {
		mute: false,
		fullScreen: false,
		shouldPlay: true,
	}

	handlePlayAndPause = () => {
		this.setState(prevState => ({
			shouldPlay: !prevState.shouldPlay
		}));
	}

	handleVolume = () => {
		this.setState(prevState => ({
			mute: !prevState.mute,
		}));
	}

  render() {
		const { width } = Dimensions.get('window');
		
    return (
      <View style={styles.container}>
				<View>
						<Text style={{ textAlign: 'center' }}> React Native Video </Text>
						<Video
							source={require('./sample1.mp4')}
							shouldPlay={this.state.shouldPlay}
							resizeMode="cover"
							style={{ width, height: 300 }}
							isMuted={this.state.mute}
						/>
						<View style={styles.controlBar}>
							<MaterialIcons 
								name={this.state.mute ? "volume-mute" : "volume-up"}
								size={45} 
								color="white" 
								onPress={this.handleVolume} 
							/>
							<MaterialIcons 
								name={this.state.shouldPlay ? "pause" : "play-arrow"} 
								size={45} 
								color="white" 
								onPress={this.handlePlayAndPause} 
							/>
						</View>
					</View>
      </View>
		);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	},
	controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
		height: 45,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
});
*/








/*WORKS
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Video } from 'expo-av';

export default function WhatIsDeFi() {
	return(
		<View style ={styles.container}>
		<Video
  		source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  		rate={1.0}
 		volume={1.0}
  		isMuted={false}
  		resizeMode="cover"
  		shouldPlay
  		isLooping
  		style={{ width: 300, height: 300 }}
		/>
		</View>
		)
}


const styles = StyleSheet.create ({
   container: {
     	   flex: 1,
	   backgroundColor: '#fff',
	   alignItems: 'center',
	   justifyContent: 'center',
   },
})*/

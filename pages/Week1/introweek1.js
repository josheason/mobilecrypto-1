//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Linking, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import * as firebase from 'firebase';
import 'firebase/firestore';

const { width, height } = Dimensions.get('window');


 
//export default function WhatIsDeFi1(){
export default class introweek1 extends Component{
	
	/*componentDidMount(){
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
	}*/
	
	render(){
	return(
		<ScrollView 
		//style = {{styles.container}}
		style = {{ backgroundColor: '#121212' }}
		>{
			<><Text style={styles.text}>
			{'Intro Week 1'}
			</Text>
			<Text style={styles.space}>
			{'         '}
			</Text><></>
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
			/><></>
			<Text style={styles.resour}>
			{'Resources'}
			</Text><></>
			<Text style={styles.containerURL}
			onPress={() => Linking.openURL('https://kajabi-storefronts-production.s3.amazonaws.com/posts/8572719/downloads/TxmtN4QGS5iRzzyhoyXS_Science_and_Human_Behavior.pdf?response-content-disposition=attachment%3B%20filename%3DScience_and_Human_Behavior.pdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI4TIKYMSB4PQMFBA%2F20200916%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200916T212257Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f4c33b29df1e354fda3ad9552186fb9a575c84d0223b4d0f00e94c8f5c3c53f5')}>
			{'Science_and_Human_Behavior.pdf'}
			</Text><></>
			<Text style={styles.para}>
			{`Congratulations; you're finally in the course! You took the next step to change your life for the better by learning internet 3.0, blockchain technology, cryptocurrencies and how to seriously make money in this industry.`}
			</Text><></>
			 <Text style={styles.para}>
			{`At the start of each week, I will provide an introductory video, allowing an overview of what the week's lessons will entail.`}
			</Text><></>
			<Text style={styles.para}>
			<Text style = {styles.ital}>
			{'This is the most important video in the whole entire course.'}</Text><></> {'The information given in this video will guarantee your success; I recommend following my advice strictly.'}
			</Text><></>
			<Text style={styles.para}>
			{'The most important way to get results is not doing “dumb things”. I constructed a list of “dumb things” to avoid throughout this course, that I will be providing you with shortly.'}
			</Text><></>
			<Text style={styles.para}>
			{`B.F Skinner’s operant conditioning experiment on the behavior of mice conveys a strong message that can be related to our daily habits. `}
			</Text><></>
			<Text style={styles.para}>
			{`The mice were conditioned to press a lever that would provide a reward, triggering an endorphin release. In turn, they became addicted to the “good feeling” received after pressing the lever. The scientists proceeded to put a painful obstacle between the mice and the lever. In spite of the pain it caused them, the mice still pursued the lever. Over time, they developed a habit of hurting themselves to release endorphins. `}
			</Text><></>
			<Text style={styles.para}>
			{`I believe this is what is happening in many individuals' lives. They unknowingly harm themselves in pursuit of feeling good. `}
			</Text><></>
			<Text style={styles.para}>
			{`However, I am going to tell you how to avoid this pain.`}
			</Text><></>
			<Text style={styles.para}>
			<Text style ={styles.bol}>{`Mistake #1:`}</Text><></>{` Not taking full advantage of Facebook. `}
			</Text><></>
			<Text style={styles.para}>
			{`Facebook is 95% of this course. Joining the Facebook group is beneficial because it is full of experienced and insightful individuals that you will have the opportunity to connect with and learn from. In addition, I will be holding live Q and A sessions, which will be a great window to ask me questions.`}
			</Text><></>
			<Text style={styles.italPara}>
			{`Engage and be involved in the community, if you are not a member: join now.`}
			</Text><></>
			<Text style={styles.para}>
			<Text style ={styles.bol}>{`Mistake #2:`}</Text><></>{`Skipping segments of the course. `}
			</Text><></>
			<Text style={styles.para}>
			{`I intentionally formatted this course in such a way that each section prepares for the next. Skipping will not allow you to see the big picture. It is important to actively listen, watch with intent, and take notes during each video. `}
			</Text><></>
			<Text style={styles.italPara}>
			{`Complete the course in its entirety.`}
			</Text><></>
			<Text style={styles.para}>
			<Text style ={styles.bol}>{`Mistake #3:`}</Text><></>{`Holding on to your ego `}
			</Text><></>
			<Text style={styles.para}>
			{`Leave your ego behind. Regardless of any prior knowledge you may have, this course will still provide new, valuable information to you. Holding on to ego and pride will block you from learning anything new. `}
			</Text><></>
			<Text style={styles.italPara}>
			{`Be open to new information; it is okay if you do not know everything yet. `}
			</Text><></>
			<Text style={styles.para}>
			<Text style ={styles.bol}>{`Mistake #4:`}</Text><></>{`Procrastination `}
			</Text><></>
			<Text style={styles.para}>
			{`Be realistic with your time management during this course. You should not speed through it; however, you must not take too long to complete it. Apply the concepts you learn immediately, do not wait. Pace yourself through the course wisely, it should take a maximum of 10 weeks. `}
			</Text><></>
			<Text style={styles.italPara}>
			{`Procrastination never yields successful results. `}
			</Text><></>
			<Text style={styles.para}>
			<Text style ={styles.bol}>{`Mistake #5:`}</Text><></>{`Declining constructive criticism `}
			</Text><></>
			<Text style={styles.para}>
			{`You are in this course for a reason: to learn new information or to solve a problem. In order for me to help you, I have to be 100% honest with you, even if it may seem brutal.`}
			</Text><></>
			<Text style={styles.para}>
			{`If my honesty offends or angers you, this could mean your pride is getting involved. It is important to understand that I am not trying to insult or dismiss you; I am trying to help you achieve successful results.`}
			</Text><></>
			<Text style={styles.italPara}>
			{`Criticism does not always have to be negative, we are here to grow, learn to accept it. `}
			</Text><></>
			<Text style={styles.para}>
			{`Now that we have learned what not to do, I am going to ask you to do something to prove you are taking this course seriously. `}
			</Text><></>
			<Text style={styles.para}>
			{`Join the Facebook group and send the following hashtag: `}
			</Text><></>
			<Text style={styles.para}>
			{`#MOUSEMAN`}
			</Text><></>
			<Text style={styles.para}>
			{`That is all for this video, thanks for watching.`}
			</Text></>
		}</ScrollView>
		);
}
}

			/*<Text style={styles.para}>
			{``}
			</Text>*/
	
const styles = StyleSheet.create({
	video: {
		width: width,
		height: height/ 3,
		alignItems: 'center'
	},
	space: {
		width: width,
		height: height/ 10,
		alignItems: 'center'
	},
	poster: {
		width: width,
		height: height/ 3,
		opacity: 0.5,
	},
	container: {
		//flex :1,
		backgroundColor: '#121212',
		//alignItems: 'center',
		//justifyContent: 'center',
		//justifyContent: 'space-between'
	},
	containerURL: {
		//flex :1,
		backgroundColor: '#121212',
		color: '#03dac5',
		alignItems: 'center',
		paddingLeft: 5,
	},
	text: {
		///flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
		position: 'absolute',
		top: 15,
		paddingLeft: 5,
	},
	resour: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#fff',
		fontSize: 25,
		fontWeight: 'bold',
		//margin: 20,
		paddingTop: 20,
		paddingBottom: 15,
		paddingLeft: 5,
	},
	firstpara: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#fff',
		fontSize: 15,
		//margin: 20,
		paddingTop: 30,
		paddingLeft: 5,
		fontWeight: 'bold',
	},
	para: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#fff',
		fontSize: 15,
		//margin: 20,
		paddingTop: 20,
		paddingLeft: 5,
		//fontWeight: 'bold',
	},
	/*ital: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#fff',
		fontSize: 15,
		//fontWeight: 'bold',
		fontStyle: 'italic',
	},
	bol: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold',
		//fontStyle: 'italic',
	},
	italPara: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#fff',
		fontSize: 15,
		//margin: 20,
		paddingTop: 20,
		paddingLeft: 5,
		fontWeight: 'italic',
	},
	lastPara: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#fff',
		fontSize: 15,
		//margin: 20,
		paddingTop: 20,
		paddingLeft: 5,
		paddingBottom: 50,
		//fontWeight: 'bold',
	},*/
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

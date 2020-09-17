//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Linking, ScrollView, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as firebase from 'firebase';
import 'firebase/firestore';

const { width, height } = Dimensions.get('window');


 
//export default function WhatIsDeFi1(){
export default class win3 extends Component{
	
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
				<><View
				style = {{ backgroundColor: '#121212' }}>
				<><Text style={styles.text}>
				{'What It TRULY Takes To Win'}
				</Text>
				<Text style={styles.space}>
				{'         '}
				</Text><></>
				<Video
			//source={{ uri: 'https://tfsc-avfc.s3.amazonaws.com/whatis.mp4'}}
			source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mobilecrypto-b1543.appspot.com/o/Week%201%2Ftrulytakestowin.mp4?alt=media&token=8b3a613a-1b4b-4fab-ba4a-91f7f1f776c9'}}
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
				<View style={styles.buttonRow}>
				<TouchableOpacity activeOpacity={0.3} underlayColor="#6200ee" onPress={() => alert('Pressed!')}>
					<View style={styles.previcon}>
						<Icon name="arrow-left" size={20} style={styles.icon}/><></>
						<Text style={styles.buttonText}>Previous</Text><></>
					</View><></>
				</TouchableOpacity><></>

				<TouchableOpacity activeOpacity={0.3} underlayColor="#6200ee" onPress={() => alert('Pressed!')}>
					<View style={styles.nexticon}>
						<Text style={styles.buttonText}>Next</Text><></>
						<Icon name="arrow-right" size={20} style={styles.icon}/><></>
					</View><></>
				</TouchableOpacity><></>
			</View><></></>
			</View><></>
		<><ScrollView 
		//style = {{styles.container}}
		style = {{ backgroundColor: '#121212' }}
		>{
		
			<><Text style={styles.resour}>
			{'Resources'}
			</Text>
			<Text style={styles.containerURL}
			onPress={() => Linking.openURL('https://kajabi-storefronts-production.s3.amazonaws.com/posts/8572715/downloads/jOAR1l56QwCS3gWXfnvG_Week_1_Workbook_final_.pdf?response-content-disposition=attachment%3B%20filename%3DWeek_1_Workbook_final_.pdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI4TIKYMSB4PQMFBA%2F20200917%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200917T143253Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=193b335aef2d919e38e47f1747828e183ba1ad3c41458927d5d11fd89dd6cc75')}>
			{'Week_1_Workbook_final_.pdf'}
			</Text><></>
			<Text style={styles.para}>
			{`Welcome back!`}
			</Text><></>
			 <Text style={styles.para}>
			{`Today we will be talking about what it truly takes to win.`}
			</Text><></>
			<Text style={styles.para}>
			{'Whether it is short term or long term, the goal is to succeed in cryptocurrency, business or life in general. '}
			</Text><></>
				
			<Text style={styles.italPara}>
			<Text style = {styles.reg}>
			{`In the first week of this course you're going to acquire knowledge that will be beneficial in all areas of your life. I can not stress this enough: `}</Text><></> {' do not skip any of it.'}
			</Text><></>


			<Text style={styles.para}>
			{'The dividing line between poor unsustainable results has nothing to do with tactics.'}
			</Text><></>
			<Text style={styles.para}>
			{`In this course, I am going to set you up with optimal ways to function, maximize your output efficiency and increase your emotional control. `}
			</Text><></>
			<Text style={styles.para}>
			{`By doing this, you will be able to commit to a decision and reap the benefits for years. `}
			</Text><></>
			<Text style={styles.para}>
			{`That is the ultimate goal, to make money and be able to keep it. `}
			</Text><></>
			<Text style={styles.para}>
			{`It takes sacrifice, stepping out of your comfort zone, and having full control over your emotions.`}
			</Text><></>
			/*<Text style={styles.para}>
			<Text style ={styles.bol}>{`Mistake #1:`}</Text><></>{` Not taking full advantage of Facebook. `}
			</Text><></>*/
			<Text style={styles.para}>
			{`To provide an example of why having emotional control is so important, I can reference from my own experience.`}
			</Text><></>
			<Text style={styles.para}>
			{`A couple of months ago, there was a crash in the market. As a result, I lost a large amount of my net worth in cryptocurrency `}
			</Text><></>
			<Text style = {styles.ital}>
			{'  in a matter of days.'}
			</Text><></> 
			/*<Text style={styles.italPara}>
			{`Engage and be involved in the community, if you are not a member: join now.`}
			</Text><></>*/
			/*<Text style={styles.para}>
			<Text style ={styles.bol}>{`Mistake #2:`}</Text><></>{`Skipping segments of the course. `}
			</Text><></>*/
			<Text style={styles.para}>
			{`If I did not have control over my emotions, during that time, I would have given up and never have been able to gain my money back.  `}
			</Text><></>
			<Text style={styles.italPara}>
			{`Acting out of your current state of mind is not going to produce wise decisions. `}
			</Text><></>
			/*<Text style={styles.para}>
			<Text style ={styles.bol}>{`Mistake #3:`}</Text><></>{`Holding on to your ego `}
			</Text><></>*/
			<Text style={styles.para}>
			{`If you move towards the truth, you will unlock happiness. `}
			</Text><></>
			<Text style={styles.para}>
			{`Avoiding the truth can lead to: doing things you dislike, losing money, missing out on your life’s purpose and not having the opportunity to invest money into something that will present more value. `}
			</Text><></>
			/*<Text style={styles.para}>
			<Text style ={styles.bol}>{`Mistake #4:`}</Text><></>{`Procrastination `}
			</Text><></>*/
			<Text style={styles.para}>
			{`The solutions I provide you will involve putting an end to bad habits and decisions.  `}
			</Text><></>
			<Text style={styles.para}>
			{`Regardless of religious beliefs, a verse from the Bible has an insightful value. `}
			</Text><></>
			<Text style={styles.para}>
			{`Proverbs 21:20 states “A fool and his money are soon parted”`}
			</Text><></>
			<Text style={styles.para}>
			{`This verse can be closely compared to a quote from the “Five Hundreth Pointes of Good Husbandrie,” by Thomas tusser, where he states “A foole and his monie be soone at debate, which after with sorrow repents him too late.” `}
			</Text><></>
			<Text style={styles.italPara}>
			{`If you have money and don’t know what to do with it, you will lose it.  `}
			</Text><></>
			<Text style={styles.para}>
			{`This leads me to shed light on the curse of early success. `}
			</Text><></>
			<Text style={styles.para}>
			{`Being successful early on, with lack of knowledge of what to do with your money, can result in: poor life habits, lack of productivity, poor focus, and no self- awareness. `}
			</Text><></>
			<Text style={styles.para}>
			{`I want to reiterate that you must be applying what I am saying in each video of this course in your life. `}
			</Text><></>
			<Text style={styles.para}>
			{`“The way to get started is to quit talking and begin doing” `}
			</Text><></>
			<Text style={styles.para}>
			{`   - Walt Disney `}
			</Text><></>
			<Text style={styles.para}>
			{`That is all for this video, thanks for watching.  `}
			</Text><></>	
			<Text style={styles.lastPara}>
			{``}
			</Text></>
		}</ScrollView></></>
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
	ital: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#fff',
		fontSize: 15,
		//fontWeight: 'bold',
		fontStyle: 'italic',
	},
	reg: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#fff',
		fontSize: 15,
		//fontWeight: 'bold',
		//fontStyle: 'italic',
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
		fontStyle: 'italic',
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
	},
	prevbutton: {
		flex: 1,
    	justifyContent: "center",
    	padding: 16
	},
	buttonText:{
		fontSize: 21,
		color: '#fff',
		alignItems: 'center'
	},
	previcon: {
		color:"#fff",
		backgroundColor: '#6200ee',
		padding: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		width: width/2,
	},
	nexticon: {
		color:"#fff",
		backgroundColor: '#3700b3',
		padding: 5,
		flexDirection: 'row',
		width: width/2,
		justifyContent: 'center',
	},
	icon: {
		color:"#fff",
		padding: 5,
	},
	buttonRow:{
		flexDirection: 'row',
		marginTop: 5,
		marginBottom: 20,
	},
});


/*//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Linking, ScrollView, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';

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
			}</ScrollView><></>
				<View style={styles.buttonRow}>
				<TouchableHighlight activeOpacity={0.3} underlayColor="#6200ee" onPress={() => alert('Pressed!')}>
					<View style={styles.previcon}>
						<Icon name="arrow-left" size={20} style={styles.icon}/><></>
						<Text style={styles.buttonText}>Previous</Text><></>
					</View><></>
				</TouchableHighlight><></>

				<TouchableHighlight activeOpacity={0.3} underlayColor="#6200ee" onPress={() => alert('Pressed!')}>
					<View style={styles.nexticon}>
						<Text style={styles.buttonText}>Next</Text><></>
						<Icon name="arrow-right" size={20} style={styles.icon}/><></>
					</View><></>
				</TouchableHighlight><></>
			</View><></>
		<ScrollView 
		//style = {{styles.container}}
		style = {{ backgroundColor: '#121212' }}
		>{
		
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
			</Text><></>
			<Text style={styles.lastPara}>
			{``}
			</Text></>
		}</ScrollView>
		);
}
}

			<Text style={styles.para}>
			{``}
			</Text>
	
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
	ital: {
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
		fontStyle: 'italic',
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
	},
	prevbutton: {
		flex: 1,
    	justifyContent: "center",
    	padding: 16
	},
	buttonText:{
		fontSize: 21,
		color: '#fff',
		alignItems: 'center'
	},
	previcon: {
		color:"#fff",
		backgroundColor: '#6200ee',
		padding: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		width: width/2,
	},
	nexticon: {
		color:"#fff",
		backgroundColor: '#3700b3',
		padding: 5,
		flexDirection: 'row',
		width: width/2,
		justifyContent: 'center',
	},
	icon: {
		color:"#fff",
		padding: 5,
	},
	buttonRow:{
		flexDirection: 'row',
	},
});
*/

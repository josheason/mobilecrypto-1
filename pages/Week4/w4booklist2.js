//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Linking, ScrollView, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import * as firebase from 'firebase';
import 'firebase/firestore';

const { width, height } = Dimensions.get('window');


 
export default class w4booklist2 extends Component{
	
	
	render(){
	return(
		<View style = {styles.container}>
		<Text style = {styles.para}>{` `}</Text>
			<Text style = {styles.resour1}>{`Book List`}</Text>
      <Text style = {styles.para}>{` `}</Text>
    <Text style={styles.resour}>
			{'Resources'}
			</Text>
		<Text style = {styles.para}>{` `}</Text>
			<Text style={styles.containerURL}
			onPress={() => Linking.openURL(`https://kajabi-storefronts-production.s3.amazonaws.com/posts/8710887/downloads/u2mlouiERTSnYjklYYWx_Week_4_Workbook_final_.pdf?response-content-disposition=attachment%3B%20filename%3DWeek_4_Workbook_final_.pdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI4TIKYMSB4PQMFBA%2F20200918%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200918T144643Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=debe55df9500135da628bf11b3cb6b1ff3f345c8e078190531e0ec7706ab6932`)}>
			{'Week_4_Workbook_final_.pdf'}
			</Text>
    <Text style = {styles.para}>{` `}</Text>
			    <Text style = {styles.para}>{`Week 3 Book List`}</Text>
 			   <Text style = {styles.para} onPress={() => Linking.openURL('https://amzn.to/3cqRT9t')}>
 			     <Text style = {styles.reg}>{`\u2022  `}</Text>
  			    <Text style={styles.regURL} >{`Shoe Dog`}</Text>
 			   </Text>
          <Text style = {styles.para} onPress={() => Linking.openURL('https://amzn.to/34I1fLq')}>
 			     <Text style = {styles.reg}>{`\u2022  `}</Text>
  			    <Text style={styles.regURL} >{'The Everything Store (Amazon Story)'}</Text>
 			   </Text>
          <Text style = {styles.para} onPress={() => Linking.openURL('https://amzn.to/2xjTP4K')}>
 			     <Text style = {styles.reg}>{`\u2022  `}</Text>
  			    <Text style={styles.regURL} >{'Blue Ocean Strategy'}</Text>
 			   </Text>
				<Text style= {styles.lastPara}>{`   `}</Text>
					<View style={styles.buttonRow}>
				<TouchableOpacity activeOpacity={0.3} underlayColor="#6200ee" onPress={() => Actions.week4intro1()}>
					<View style={styles.previcon}>
						<Icon name="arrow-left" size={20} style={styles.icon}/>
						<Text style={styles.buttonText}>Previous</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.3} underlayColor="#6200ee" onPress={() => Actions.socialmediabas3()}>
					<View style={styles.nexticon}>
						<Text style={styles.buttonText}>Next</Text>
						<Icon name="arrow-right" size={20} style={styles.icon}/>
					</View>
				</TouchableOpacity>
			</View>
		</View>
		);
}
}

	
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
		flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
	},
	containerURL: {
		//flex :1,
		backgroundColor: '#121212',
		color: '#03dac5',
		alignItems: 'center',
		paddingLeft: 5,
	},
	paraURL: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#03dac5',
		fontSize: 15,
		//margin: 20,
		marginTop: 20,
		marginLeft: 5,
		//fontWeight: 'bold',
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
		//paddingTop: 20,
		paddingBottom: 15,
		paddingLeft: 5,
	},
	resour1: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#fff',
		fontSize: 25,
		fontWeight: 'bold',
		//margin: 20,
		//paddingTop: 20,
		paddingBottom: 30,
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
		paddingTop: 20,
		paddingLeft: 5,
		fontWeight: 'bold',
	},
	para: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#fff',
		fontSize: 20,
		//margin: 20,
		//paddingRight: 5,
		marginTop: 25,
		marginBottom: 25,
		//paddingLeft: 5,
		fontWeight: 'bold',
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
  	regURL: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#03dac5',
		fontSize: 18,
	  	marginTop: 15,
		//padding:20,
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
	bolPara: {
		//flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		//justifyContent: 'center',
		color: '#fff',
		fontSize: 15,
		//margin: 20,
		paddingTop: 20,
		paddingLeft: 5,
		fontWeight: 'bold',
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






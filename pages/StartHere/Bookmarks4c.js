//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Linking, ScrollView, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import * as firebase from 'firebase';
import 'firebase/firestore';

const { width, height } = Dimensions.get('window');


 
export default class Bookmarks4c extends Component{
	
	
	render(){
	return(
		<View style = {styles.container}>
			<Text style = {styles.resour1}>{`Bookmarks`}</Text>
			    <Text style = {styles.para}>{`Crypto News`}</Text>
 			   <Text style = {styles.para} onPress={() => Linking.openURL('http://bitcoinist.com/')}>
 			     <Text style = {styles.reg}>{`\u2022  `}</Text>
  			    <Text style={styles.regURL} >{'Bitcoin News and Reviews - Cryptocurrency News and Reviews - Bitcoinist.com'}</Text>
 			   </Text>
          <Text style = {styles.para} onPress={() => Linking.openURL('https://www.coindesk.com/')}>
 			     <Text style = {styles.reg}>{`\u2022  `}</Text>
  			    <Text style={styles.regURL} >{'CoinDesk - Leader in blockchain news.'}</Text>
 			   </Text>
			    <Text style = {styles.para} onPress={() => Linking.openURL('https://cointelegraph.com/tags/bitcoin')}>
 			     <Text style = {styles.reg}>{`\u2022  `}</Text>
 			     <Text style={styles.regURL} >{`Bitcoin News - Cointelegraph`}</Text>
			    </Text>
			    <Text style = {styles.para}  onPress={() => Linking.openURL('https://medium.com/')}>
			      <Text style = {styles.reg}>{`\u2022  `}</Text>
			      <Text style={styles.regURL}>{'Medium – Get smarter about what matters to you.'}</Text>
  			  </Text>
          <Text style = {styles.para}  onPress={() => Linking.openURL('https://www.newsbtc.com/')}>
			      <Text style = {styles.reg}>{`\u2022  `}</Text>
			      <Text style={styles.regURL}>{'Bitcoin News | Latest News and Updates on Bitcoin – NewsBTC'}</Text>
  			  </Text>
           <Text style = {styles.para}  onPress={() => Linking.openURL('https://eng.ambcrypto.com/category/news/')}>
			      <Text style = {styles.reg}>{`\u2022  `}</Text>
			      <Text style={styles.regURL}>{'News Archives - AMBCrypto'}</Text>
  			  </Text>
          <Text style = {styles.para}  onPress={() => Linking.openURL('https://bitcoinmagazine.com/')}>
			      <Text style = {styles.reg}>{`\u2022  `}</Text>
			      <Text style={styles.regURL}>{'Bitcoin News, Price Charts, Events | Bitcoin Magazine'}</Text>
  			  </Text>
           <Text style = {styles.para}  onPress={() => Linking.openURL('https://cryptopress.news/')}>
			      <Text style = {styles.reg}>{`\u2022  `}</Text>
			      <Text style={styles.regURL}>{'Home - Crypto Press | News | Crypto Price Prediction'}</Text>
  			  </Text>  
           <Text style = {styles.para}  onPress={() => Linking.openURL('https://coinrivet.com/')}>
			      <Text style = {styles.reg}>{`\u2022  `}</Text>
			      <Text style={styles.regURL}>{'Coin Rivet - Latest Bitcoin, Blockchain & Cryptocurrency News'}</Text>
  			  </Text>  
				<Text style= {styles.lastPara}>{`   `}</Text>
					<View style={styles.buttonRow}>
				<TouchableOpacity activeOpacity={0.3} underlayColor="#6200ee" onPress={() => Actions.week2intro1()}>
					<View style={styles.previcon}>
						<Icon name="arrow-left" size={20} style={styles.icon}/>
						<Text style={styles.buttonText}>Previous</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.3} underlayColor="#6200ee" onPress={() => Actions.internetwork3()}>
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





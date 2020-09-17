import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button, TouchableHighlight } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get('window');


export default function WalletDifferences2(){

	return(
		<View style = {styles.container}>
			<Video
			source={{ uri: 'https://allthevideostherecanpossiblybeintheworld.s3.amazonaws.com/2Wallet+Diffrences.mp4' }}
			//source={require('./DeFi1.mp4')}
			rate={1.0}
			volume={1.0}
			isMuted={false}
			resizeMode="cover"
			shouldPlay={false}
			isLooping={false}
			useNativeControls
			style={styles.video}
			/>
			<View style={styles.buttonRow}>
				<TouchableHighlight activeOpacity={0.3} underlayColor="#6200ee" onPress={() => alert('Pressed!')}>
					<View style={styles.previcon}>
						<Icon name="arrow-left" size={20} style={styles.icon}/>
						<Text style={styles.buttonText}>Previous</Text>
					</View>
				</TouchableHighlight>

				<TouchableHighlight activeOpacity={0.3} underlayColor="#6200ee" onPress={() => alert('Pressed!')}>
					<View style={styles.nexticon}>
						<Text style={styles.buttonText}>Next</Text>
						<Icon name="arrow-right" size={20} style={styles.icon}/>
					</View>
				</TouchableHighlight>
			</View>
		</View>
		);
}

const styles = StyleSheet.create({
	video: {
		width: width,
		height: height/ 3,
	},
	container: {
		flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		justifyContent: 'center',
	},
	prevbutton: {
		flex: 1,
    	justifyContent: "center",
    	padding: 16
	},
	buttonText:{
		fontSize: 21,
		color: '#fff'
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















/*UNDO
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';

const { width, height } = Dimensions.get('window');

export default function WalletDifferences2(){

	return(
		<View style = {styles.container}>
			<Video
			source={{ uri: 'https://allthevideostherecanpossiblybeintheworld.s3.amazonaws.com/2Wallet+Diffrences.mp4' }}
			//source={require('./DeFi1.mp4')}
			rate={1.0}
			volume={1.0}
			isMuted={false}
			resizeMode="cover"
			shouldPlay={false}
			isLooping={false}
			useNativeControls
			style={styles.video}
			/>
		</View>
		);
}

const styles = StyleSheet.create({
	video: {
		width: width,
		height: height/ 3,
	},
	container: {
		flex :1,
		backgroundColor: '#121212',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
*/







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

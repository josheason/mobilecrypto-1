import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';

const { width, height } = Dimensions.get('window');

export default function ScamSubmitter2(){

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

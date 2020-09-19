import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 64 : 54,
        flexDirection: 'row',
        paddingTop: 20,
    },
    navBarItem: {
        flex: 1,
        justifyContent: 'center',
    },
    navText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
});

export default class CustomNavBar1 extends React.Component {
    // constructor(props) {
    //   super(props)
    // }

    _renderLeft() {
            return (
                <TouchableOpacity onPress={() => console.log('Hamburger button pressed')} style={[styles.navBarItem, { paddingLeft: 10 }]}>
                    <Image
                    style={{ width: 30, height: 50 }}
                    resizeMode="contain"
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' }}
                    />
                </TouchableOpacity>
            );
    }

    _renderMiddle() {
        return (
            <View style={styles.navBarItem}>
                <Text style = {styles.NavText}>{` `}</Text>
            </View>
        );
    }

    _renderRight() {
        return (
            <View style={[styles.navBarItem, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
                <TouchableOpacity onPress={() => console.log('Share')} style={{ paddingRight: 10 }}>
                    <Image style={{ width: 30, height: 50 }} resizeMode="contain" source={{ uri: 'https://cdn3.iconfinder.com/data/icons/glypho-free/64/share-512.png' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Search')} style={{ paddingRight: 10 }}>
                    <Image style={{ width: 30, height: 50 }} resizeMode="contain" source={{ uri: 'https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//search1600.png' }} />
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        let dinamicStyle = {};
        if (Actions.currentScene === 'dashboard') {
            dinamicStyle = { backgroundColor: '#000' };
        } else {
            dinamicStyle = { backgroundColor: '#000' };
        }

        return (
            <View style={[styles.container, dinamicStyle]}>
                {this._renderLeft()}
                {this._renderMiddle()}
          </View>
        );
    }
}

/*                <Text style = {styles.NavText}>{this.props.title}</Text>.        this._renderRight()}.      https://image.flaticon.com/icons/png/512/0/340.png*/

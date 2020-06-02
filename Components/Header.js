import React,{ Component }  from 'react';

import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';

import {
    Header,
} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';


var width = Dimensions.get('window').width;

export default class ToDoHeader extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }

    }
    render(){
        return(
            <View style = {styles.headerContainer}>
                <Header
                  leftComponent={<Icon name= 'paint-brush' size={20} style={styles.leftIcon}/>}
                  centerComponent={{ text: 'To Do List', style: { color: '#fff', fontSize:20, },  }}
                  rightComponent={<Icon name= 'trash-o' size={20}  style={styles.rightIcon}/>}
                  containerStyle={{
                  backgroundColor: '#1faf9e',
                  }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    leftIcon:{
        paddingLeft:10,
        color:'#fff',
    },
    rightIcon:{
        paddingRight:10,
        color:'#fff',
    }

});


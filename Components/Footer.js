import React,{ Component }  from 'react';
import { 
  StyleSheet, 
  View, 
  Dimensions,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

var width = Dimensions.get('window').width;

export default class Footer extends React.Component {
    state = {
        todoValue:'',
    }
    onChange = (text) =>{
        this.setState({todoValue: text});
    }
    onPress = () =>{
        console.log('Hello');
        this.props.onPress(this.state.todoValue);
        this.setState({todoValue:''})
    }

    render(){
        return(
            <View style = {styles.footerContainer}>
                <TextInput
                onChangeText={this.onChange}
                autoCapitalize='none'
                placeholder={'新規入力'}
                style={styles.TextInput}/>
                <Icon 
                onPress={this.onPress}
                name={'pencil-square-o'} 
                style={styles.footerIcon} 
                size={35}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TextInput:{
        height:60,
        width:width,
        alignItems:'center',
        position: 'absolute',
        fontSize:20,
        paddingLeft:25,
    },
    footerContainer:{
        height:60,
        backgroundColor:'#fff',
    },
    footerIcon: {
       color:'#323333',
       marginLeft:320,
       marginRight:10,
       marginTop:15,
       marginBottom:10,
       textAlign:'right',
       
    },
});

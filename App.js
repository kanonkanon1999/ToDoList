import React,{ Component }  from 'react';

import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
} from 'react-native';

import Header from './Components/Header';
import ToDoListItem from './Components/ToDoListItem';



export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        const {
            list,
        } = this.state;
        return(
            <View style={styles.container}>
                <Header/>
                <KeyboardAvoidingView style={{ flex: 1,}} behavior="padding" >
                    <ToDoListItem/>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#c9efeb',
        
      },
});


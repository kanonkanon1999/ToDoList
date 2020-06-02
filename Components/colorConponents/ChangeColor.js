import React,{ Component, useState, }  from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native';

import {
    Overlay,
} from 'react-native-elements'; 

import ColorIcon from './ColorIcon';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

const colors1 = [
    {darkColor:'#d04355',lightColor:'#f6d4d8'},
    {darkColor:'#E06B3B',lightColor:'#F9DFD5'},
    {darkColor:'#F0BA33',lightColor:'#FCF1D3'},
    {darkColor:'#DFE735',lightColor:'#F8FAD4'},
    {darkColor:'#B2CF3F',lightColor:'#EEF5D3'}, 
]
const OverlayExample = () => {
    const [visible, setVisible] = useState(false);
  
    const toggleOverlay = () => {
      setVisible(!visible);
    };
    const visibleOverlay = () =>{
      setVisible(true);
    };
} 

export default class ChengeColor extends React.Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }
      
    render(){       
        return(
            <View style = {styles.ChengeColorContainer}>
                <Overlay isVisible={visible}>
                    <View>
                        <View style={styles.OverlayHeader}>
                         <Text style={styles.title}>テーマカラーを選択</Text>
                         <Icon name='close' size={30} style={styles.closeBotton} onPress={toggleOverlay}/>
                         </View>
                            <View style={{flexDirection:'row'}}>
                                 {colors1.map((colors1,i)=>{
                                    return(
                                 <ColorIcon darkColor={colors1.darkColor} key={i}/>
                                 )
                                  })}
                            </View>
                         <TouchableOpacity style={styles.decisionBotton} onPress={toggleOverlay}>
                             <Text style={styles.decision}>決定</Text>
                         </TouchableOpacity>
                    </View>
                </Overlay>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    OverlayHeader:{
        flexDirection:'row',
    },
    ChengeColorContainer:{
        padding:20,
        position:'absolute',
        width:200,
    },
    title:{
        fontSize:20,
    },
    decisionBotton:{   
        marginLeft:'auto',
        marginRight:'auto',
        alignItems:'center',
        width:80,
        backgroundColor:'#f57b51',
        borderRadius:5,
    },
    decision:{
        padding:10,
        fontSize:20,
        color:'#fff',
    },
    closeBotton:{
    }
});

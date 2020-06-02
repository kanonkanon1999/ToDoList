import React,{ Component }  from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Coloricon extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }

    }
    

    render(){
        return(
            <View style={styles.colorIcon}>
               <Icon name='circle' size={50}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    colorIcon:{
    
    }
});
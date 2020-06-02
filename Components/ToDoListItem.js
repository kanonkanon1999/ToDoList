import React,{ Component }  from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from './Footer';

var width = Dimensions.get('window').width;

export default class ToDoListItem extends React.Component {
    state = { 
        todoList:[],
        name:'checkbox-blank-outline',
        isDone:false,
    } ;
    constructor(props){
        super(props);
        this.addTodo=this.addTodo.bind(this);
    }
    addTodo(text){
        const newList = [].concat(this.state.todoList);
        newList.push({ isDone: false, text });
    }
    handlecheck(){
        if(this.state.isDone){
            this.setState({
                name:'checkbox-blank-outline',
                isDone:false,
            });
        }else{
            this.setState({name:'checkbox-marked',isDone:true,});
        }
    }
    onPress = () => {
        const list = [].concat(this.state.list);

        list.push({
            key:Date.now(),
            text: text,
            done: false,
        });

        this.setState({
            list,
        });
      }    


    render(){
        return(
            <View style = {styles.ToDoListItemContainer}>
                <FlatList
                    data={this.state.todoList}
                    renderItem={({item}) => {
                        return(
                           <View style = {styles.ToDoListItem}>
                       　　 <Icon 
                      　　  name={this.state.name} 
                      　　  isDone={this.state.isDone} 
                      　　  style={styles.CheckBox} 
                       　　 size={35}
                      　　  onPress={()=>{this.handlecheck()}}
                      　　  />
                      　　  <Text 
                      　　  style={[
                        　　    styles.text,
                          　　  {textDecorationLine: this.state.isDone ? 'line-through':'none',
                        　　    color: this.state.isDone ? 'gray':'#323333'}
                       　　 ]}
                        　　onPress={()=>this.handlecheck()} >
                       　　 {this.item.todoValue}
                　　        </Text>
                       </View>
                        );
                    }}
                />
                <Footer onPress={this.addTodo} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        marginLeft:10,
        marginTop:15,
        fontWeight: '400',
        fontSize:20,
    },
   ToDoListItem: {
       flexDirection: 'row',
       borderBottomColor:'#fff',
       borderBottomWidth:2,
       width:width,
   },
   CheckBox: {
       marginLeft:20,
       marginRight:10,
       marginTop:10,
       marginBottom:10,
       color:'#323333',
   },
   
});

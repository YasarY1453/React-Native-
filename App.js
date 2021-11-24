import React, {useState } from 'react';  
import { push,onChangeText,AppRegistry, StyleSheet, TextInput,Text, View, Touchable, TouchableOpacity, Platform, Keyboard } from 'react-native';  
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';



import Task from './Task' 

export default function App() {  
const [task,setTask] = useState();
const [taskItem, setTaskItems]= useState([]);
const handleAddTask =()=>{

setTaskItems([...taskItem,task])
setTask(null);
Keyboard.dismiss();
}
const complateTask =(index) =>{
let itemsCopy =[...taskItem];
itemsCopy.splice(index,1);
setTaskItems(itemsCopy);
}
return (  
<View style={styles.container}> 
<View style={styles.title}>
<Text style={styles.titleText}>My To-Do App</Text>
</View>
<View style={styles.items}>
{taskItem.map((item,index) => {
return ( <TouchableOpacity key={index} onPress={()=>complateTask(index)}>
<Task text={item}/>
</TouchableOpacity>
)
})
}
             
             
</View>


<KeyboardAvoidingView
behaviour={Platform.OS ==="android,ios"? "padding":"height"}
style={styles.writeTaskWrapper}
>
<TextInput style={styles.input}placeholder={'write a task'}value={task} onChangeText={text =>setTask(text)} >
</TextInput>
<TouchableOpacity onPress={()=>handleAddTask()}>
<View style={styles.button}>
<Text style={styles.addText}>+</Text>
</View>
</TouchableOpacity>
</KeyboardAvoidingView>
</View>  
);  
}  
 

const styles = StyleSheet.create({  
  container:{flex:1, paddingTop:20 ,backgroundColor:'#E8EAED'},
  title:{borderRadius:25,backgroundColor:'pink', height:40},
  titleText:{fontSize:25, color :"black",fontWeight:'bold', textAlign:'center'},
  items:{},

writeTaskWrapper:{position:'absolute',
bottom:50,
width:'100%',
flexDirection:'row',
justifyContent:'space-between',
justifyContent:'space-around',
alignItems:'center',
paddingLeft:10
},

input:{paddingVertical:15,
  width:250,
  paddingHorizontal:15,
  backgroundColor:'#FFF',
  borderRadius:60,
  borderColor:'purple',
  borderWidth:2,
  

},
  button:{
    width:60,
    height:60,
    backgroundColor:'purple',
    opacity:0.5,
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    },
  addText:{fontSize:29},
}); 

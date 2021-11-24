import React from 'react';  
import {Text, TouchableOpacity,View, StyleSheet } from 'react-native';  
  
   
   
  const Task=(props)=>{ 
        return (  
        
        <View style={styles.item} >

               <View style={styles.itemLeft}>
                   
               <TouchableOpacity style={styles.squere}>
               <Text>Delete</Text> 
              </TouchableOpacity>
              <Text style={styles.ItemText}>{props.text}</Text>
               </View> 
               <View style={styles.itemRight}>
                  
               </View>

        </View>
        )
      };
     
export default Task;
const styles = StyleSheet.create({  
    item:{marginTop:7,marginBottom:7,justifyContent:'space-between',alignItems:'center',flexDirection:'row',backgroundColor:'#FFF',padding:15,borderRadius:10},
    itemLeft:{
        flexDirection:"row",
         alignItems:'center',
         flexWrap:'wrap',
        }, 
    squere:{
        marginRight:15,
        width:44,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.5,
        borderRadius:5},
    ItemText:{
        maxWidth:"80%",
    },
    itemRight:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.5,
        borderRadius:10,
        
    },
 
  }); 
  
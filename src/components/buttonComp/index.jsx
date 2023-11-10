import React from 'react'
import {Text, TextInput ,View,Button,TouchableOpacity,StyleSheet, Dimensions } from 'react-native'
import {AntDesign} from "@expo/vector-icons"
// import { TouchableOpacity } from 'react-native-gesture-handler'
const {height, width} = Dimensions.get("window")

const ButtonComp = ({txtbtn}) => {
  return (
    <View style={styles.main}>
      {/* <AntDesign name = "left" /> */}
     
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.text}> {txtbtn}</Text>
        
         </TouchableOpacity >  
        
      </View>
  )
}
const styles = StyleSheet.create({
  main:{
 justifyContent:"center",
    alignItems:"center"
  },
  touchable: {
    borderBlockColor:'red',       // Border color
    // margin:20,  
    borderCurve:20,
    width: width * 0.9,
    backgroundColor:"#FFDA33", 
    borderRadius:10,
    marginBottom:10
    
   
  },
  text:{
    textAlign:"center",
    color:"black",
    padding:10
  }
});

export default ButtonComp
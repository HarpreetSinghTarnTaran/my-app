import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Button as RNButton,
} from "react-native";
import Input from "../../components/input";
import ButtonComp from "../../components/buttonComp";
import { AntDesign } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const SignUp = ({navigation}) => {
  const handleChange=(e)=>{
    console.log('eeeeee', e)

  }
  return (
    <View style={styles.main}>
      <AntDesign name="antdesign" style={styles.icn} />

      <Text style={styles.txt}>SignUP</Text>

      <View style={styles.input}>
        <Input placeholder="Enter Name" onChangeText={handleChange} />
        <Input placeholder="Enter mobile number" keyboardType="numeric" />
        <Input placeholder="Create password" keyboardType="numeric" />
        <Input placeholder="Confirm password" keyboardType="numeric" />
      </View>

      <View>
        <ButtonComp txtbtn=" Submit" /> 
      </View>
      <View  style={styles.login}>
        <Text>Already have an account ?</Text>

          <TouchableOpacity
           onPress={()=>navigation.navigate('Login')}
           >
            <Text style={styles.logbtn}>Login</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // width: width * 0.5 ,
    // backgroundColor: "black"
    margin: 20,
  },
  input: {},
  txt: {
    paddingBottom: 40,
    fontSize: 30,
  },
  icn: {
    fontSize: 40,
    marginBottom: 20,
  },
  logbtn: {
    textAlign: "center",
    // marginTop:10
  },
  login:{
 flexDirection:"row"
    
  }

});

export default SignUp;

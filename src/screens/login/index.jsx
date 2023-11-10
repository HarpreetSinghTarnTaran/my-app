import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Input from "../../components/input";
import ButtonComp from "../../components/buttonComp";
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Feather";

const Login = () => {
  const [password, setPassword] = useState(""); // Manage the password input
  const [showPassword, setShowPassword] = useState(false); // Manage password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.txt}>Login </Text>
        <View>
          <Input placeholder="Enter User Id" />
          <View style={styles.inpt}>
            <TextInput
              placeholder="Enter password"
              keyboardType="numeric"
              // secureTextEntry={true}
              onChangeText={setPassword}
              secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
              value={password}
            />
            <Icon
              name={showPassword ? "eye" : "eye-off"}
              size={25}
              color="gray"
              style={styles.icon}
              onPress={toggleShowPassword}
            />
          </View>
        </View>
        <View>
          <ButtonComp txtbtn=" Log in" />
        </View>
        {/* <View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntxt}>
          LogIn
        </Text>
      </TouchableOpacity>
    </View> */}
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
  txt: {
    paddingBottom: 40,
    fontSize: 30,
  },
  btn: {},
  btntxt: {
    textAlign: "center",
  },
  inpt: {
    borderWidth: 1,
    padding: 6,
    // margin:10,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: 'space-between',
    borderRadius: 4,
  },
});

export default Login;


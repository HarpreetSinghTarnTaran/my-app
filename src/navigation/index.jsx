import React from 'react'
import Login from "../screens/login"
import Home from "../screens/Home"
import SignUP from "../screens/signUp"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="SignUP">
      <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Login" component={Login} />
    <Drawer.Screen name="SignUP" component={SignUP} />

    {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
  </Drawer.Navigator></NavigationContainer>
    
  //   <Stack.Navigator>
  //   <Stack.Screen name="Login" component={Login} />
  // </Stack.Navigator>
  )
}



export default Navigation
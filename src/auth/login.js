import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Button from '../components/buttons';
import PasswordInput from '../components/passwordinput';
import { FontAwesome5 } from '@expo/vector-icons'; 

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{alignItems: "center", marginTop: 100}}>
            <Text style={{color: "#063680", fontWeight: "bold", fontSize: 30}}>Welcome Back</Text>
            <View style={{marginTop: 30, alignItems: "center", justifyContent: "center"}}>
                <View style={{flexDirection: "row", position: "absolute"}}>
                    <View style={{width: screenWidth* 0.46, height: screenHeight * 0.4, borderColor: "#ad1835", borderWidth: 10, borderTopLeftRadius: 15, borderBottomLeftRadius: 15}} />
                    <View style={{width: screenWidth* 0.46, height: screenHeight * 0.4, borderColor: "#2e86ca", borderWidth: 10, borderTopRightRadius: 15, borderBottomRightRadius: 15}} />
                </View>
                <View style={{backgroundColor: "#fff", width: screenWidth* 0.9, height: screenHeight * 0.39, borderRadius: 10, alignItems: "center", justifyContent: "space-evenly"}}>
                    <View>
                        <Text style={{fontSize: 15, fontWeight: "600", color: "#0056a2"}}>Employee Name</Text>
                        <TextInput style={styles.inputBox} placeholderTextColor='#A3A3A3'/>
                    </View>
                    <View>
                        <Text style={{fontSize: 15, fontWeight: "600", color: "#0056a2"}}>Password</Text>
                        <PasswordInput />
                    </View>
                    <Button color="#2e86ca" text="Log in" onPress={() => navigation.navigate("Login")}/>
                </View>
            </View>

            <TouchableOpacity><Text style={{color: "#7e96ac", fontWeight: "bold", fontSize: 15, marginTop: 30}}>Forgot Password?</Text></TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Biometric")} style={{marginTop: 50, alignItems: "center", justifyContent: "center"}}>
                <FontAwesome5 name="fingerprint" size={40} color="#2fa1de" />
                <Text style={{fontSize: 17, fontWeight: "600", color: "#2fa1de", marginTop: 5}}>Login with</Text>
                <Text style={{fontSize: 17, fontWeight: "600", color: "#2fa1de", marginTop: 5}}>biometric authentication</Text>
            </TouchableOpacity>
        </View>





        <Image style={{width: 40, height: 50, resizeMode: "contain", position: "absolute", bottom: 30, right: 30}} source={require('../../assets/cemcs.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f8fc',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  inputBox: {
    width: screenWidth * 0.8,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,
    paddingLeft:20,
    fontSize: 15,
    color: '#575757',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#cce2f2",
},
});

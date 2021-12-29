import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Button from '../components/buttons';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export default function LoginHome({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{position: "absolute", top: 100}}>
            <Image style={{width: 80, height: 100, resizeMode: "contain", marginBottom: 30}} source={require('../../assets/cemcs.jpg')} />
            <Text style={{color: "#063680", fontWeight: "bold", fontSize: 40}}>Welcome to the</Text>
            <Text style={{color: "#2fa1d3", fontWeight: "bold", fontSize: 40}}>CEMCS App</Text>
            <View style={{marginTop: 40}}>
                <Text style={{color: "#4d70a5", fontSize: 20, marginTop: 5, fontWeight: "500"}}>Carry out transactions and</Text>
                <Text style={{color: "#4d70a5", fontSize: 20, marginTop: 5, fontWeight: "500"}}>monitor your balances</Text>
                <Text style={{color: "#4d70a5", fontSize: 20, marginTop: 5, fontWeight: "500"}}>anywhere, with ease.</Text>
            </View>
        </View>

        <View style={{width: screenWidth * 0.9, backgroundColor: "#fff", height: 150, borderRadius: 10, position: "absolute", bottom: 100, justifyContent: "center", alignItems: "center"}}>
            <Button color="#2e86ca" text="Log in" onPress={() => navigation.navigate("Login")}/>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f8fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

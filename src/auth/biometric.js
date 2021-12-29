import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Button from '../components/buttons';
import { FontAwesome5 } from '@expo/vector-icons'; 

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export default function Biometric({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{alignItems: "center", marginTop: 100, position: "absolute", top: 50}}>
            <FontAwesome5 name="fingerprint" size={40} color="#063680" />
            <Text style={{color: "#063680", fontWeight: "bold", fontSize: 22, marginTop: 30}}>Enable Biometric Authentication</Text>
            <View style={{marginTop: 20, alignItems: "center"}}>
                <Text style={{color: "#2fa1d3", fontSize: 16, marginTop: 5, fontWeight: "500"}}>Log in easily, without inputting your</Text>
                <Text style={{color: "#2fa1d3", fontSize: 16, marginTop: 5, fontWeight: "500"}}>password each time</Text>
            </View>
        </View>

        <View style={{width: screenWidth * 0.9, backgroundColor: "#fff", height: 200, borderRadius: 10, position: "absolute", bottom: 100, justifyContent: "space-evenly", alignItems: "center"}}>
            <Button color="#2e86ca" text="Enable Biometric Authentication"/>
            <Button color="#ad1835" text="Ignore"/>
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

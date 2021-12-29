import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export default function Button({text, onPress, color, btnDisable}) {
        return (
            <View>
                <TouchableOpacity disabled={btnDisable} style={[styles.btn, {backgroundColor: color}]} onPress={onPress}>
                    <Text style={{color: "#fff", fontWeight: "bold", fontSize: 15}}>{text}</Text>
                </TouchableOpacity>
            </View>
        )
}
const styles = StyleSheet.create({
  btn: {
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: 8, 
    width: screenWidth * 0.8, 
    height: 60
  },
  });
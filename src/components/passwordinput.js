import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions, TextInput } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export default function PasswordInput({onCT}) {
    const [entryState,setentryState] = useState(true);
    const [iconState,seticonState] = useState("eye-off-outline");

    const PasswordView = () => {
        if(entryState == true) {
            setentryState(false);
            seticonState("eye-outline");
        } else {
            setentryState(true);
            seticonState("eye-off-outline");
        }
    }
    return (
        <View style={{justifyContent:"center"}}>
            <TextInput style={styles.inputBox} placeholderTextColor='#A3A3A3' secureTextEntry={entryState} onChangeText={onCT}/>
            <TouchableOpacity style={{position: "absolute", right: 10}} onPress={() => PasswordView()}>
            <MaterialCommunityIcons size={25} color="#cce2f2" name={iconState}/>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
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
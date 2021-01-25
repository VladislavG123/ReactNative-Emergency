import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';


export default function Navbar(props) {

    return (
        <TouchableOpacity style={styles.container}
                onPress={props.onclick}>

            <ImageBackground style={styles.image} source={{ uri:props.path}} />
            <Text style={styles.text} >{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        width: 160,
        height: 160,
        backgroundColor: '#eeeeee',
        margin: 10,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,

        padding: 20,

    },
    image: {
        width: 90,
        height: 90,
        justifyContent: "center",
        marginHorizontal: 'auto',


    },
    text: {
        padding: 5,
        textAlign: 'center',

    }
});

// <ImageBackground style={styles.image} source={require("../assets/icons/" + props.filename)}/>

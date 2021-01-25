import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Navbar(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dd2424",
        height: 60,
        paddingLeft: 30,
        textAlign: 'left',
        justifyContent: 'center',
        marginBottom: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
    },

    text: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    }
});

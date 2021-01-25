import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import Navbar from "./src/Navbar";
import LargeButtonWithIcon from "./src/LargeButtonWithIcon";
import * as config from "./config"


const phoneTo = (phoneNumber) => {
    return () => {
        Linking.openURL(`tel:${phoneNumber}`)
    }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title="Emergency"/>
      <View style={styles.btnContainer}>
          <LargeButtonWithIcon onclick={phoneTo(config.PHONE_NUMBER)} text="Police" path={config.icons[0]} />
          <LargeButtonWithIcon onclick={phoneTo(config.PHONE_NUMBER)} text="Fire Station" path={config.icons[1]} />
          <LargeButtonWithIcon onclick={phoneTo(config.PHONE_NUMBER)} text="Doctor" path={config.icons[2]} />
          <LargeButtonWithIcon onclick={phoneTo(config.PHONE_NUMBER)} text="Layer" path={config.icons[3]} />
          <LargeButtonWithIcon onclick={phoneTo(config.PHONE_NUMBER)} text="Army" path={config.icons[4]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap'

  },
});

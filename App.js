import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CleverTap = require('clevertap-react-native');

export default function App() {
  return (
    <View style={styles.container}>
      <Button
      onPress={ () => fun_recordEvent() }
      title="Tap Here to push Event"
      color="#841584"
      />
      <StatusBar style="auto" />
    </View>
  );
}

fun_recordEvent = () => {
  CleverTap.recordEvent('RN Test2');
  create_NotificationChannel();
};

create_NotificationChannel = () => {
  alert('Notification Channel Created');
  //Creating Notification Channel
  CleverTap.createNotificationChannel("got", "Clever Tap GOT", "CT Testing", 1, true);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

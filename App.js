import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


const Icon = createIconSetFromIcoMoon(
  require('./selection.json'),
  'IcoMoon',
  'icomoon.ttf'
);


export default function App() {
  const [fontsLoaded] = useFonts({ IcoMoon: require('./assets/fonts/icomoon.ttf') });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Icon name="pencil2" size={80} color="#bf1313"></Icon>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

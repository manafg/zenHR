import { StatusBar } from 'expo-status-bar';
import React , {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import {firebaseConfig} from './config/keys';
import AppContainer from './src/router/AppRouter';
import {TabsProvider} from './src/Components/tabProvider'
import tabs from './src/constants/tabs'
export default function App() {
    if (!firebase.apps.length) {
      console.log('Connected with Firebase')
      firebase.initializeApp(firebaseConfig);
    }
  return (
    <TabsProvider tabs={tabs}>
      <AppContainer />
   </TabsProvider>
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

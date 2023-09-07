import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { StackNav } from './Screens/navigators/StackNav'
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

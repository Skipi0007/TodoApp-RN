
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo-app-loading'

import { THEME } from './src/themes';
import { MainLayout } from './src/MainLayout';
import { TodoState } from './src/context/todo/todoState';
import { ScreenState } from './src/context/screen/ScreenState';

 Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })


export default function App() {
  const [isReady, setIsReady] =useState(false)
  
  
   

  return (
    <ScreenState>
      <TodoState>
        <MainLayout/>
      </TodoState>
    </ScreenState>
  )
}




import React from 'react';
import { Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'

import theme from './src/theme';
import { Home } from './src/pages/Home';

export default function App() {
  const [fonts] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_300Light
  });
  
  if(!fonts)
    return <AppLoading />

  return (
    <ThemeProvider theme={ theme }>
      <StatusBar style='dark' translucent={true} backgroundColor="transparent" />
      <Home />
    </ThemeProvider>    
  );
}


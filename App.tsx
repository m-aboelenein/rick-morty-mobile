import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import NavigationContainer from './src/navigation/navigationContainer';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NavigationContainer />
      </SafeAreaView>
    </>
  );
};

export default App;

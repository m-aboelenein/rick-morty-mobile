import React from 'react';
import {StatusBar} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import NavigationContainer from './src/navigation/navigationContainer';
import client from './src/apollo/client';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ApolloProvider client={client}>
        <NavigationContainer />
      </ApolloProvider>
    </>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App';
import './config/ReacotronConfig';

import { store, persistor } from './store';

export default function Index() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

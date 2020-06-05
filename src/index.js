import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import bundle from '~/store';
import App from '~/App';

const Index = () => {
  return (
    <Provider store={bundle.store}>
      <PersistGate persistor={bundle.persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Index;

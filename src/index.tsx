import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';

import {store} from '~/shared/store';
import Routes from './routes';

const App: React.FC = () => (
  <StoreProvider store={store}>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" />
    <Routes />
  </StoreProvider>
);

export default App;

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StoreProvider } from 'easy-peasy';
import { Provider as PaperProvider } from 'react-native-paper';
import React, { ReactElement } from 'react';
import TabNavigator from './components/tab-navigator/TabNavigator';
import store from './store/store';

const queryClient = new QueryClient();

const App = (): ReactElement => (
  <QueryClientProvider client={queryClient}>
    <PaperProvider>
      <StoreProvider store={store}>
        <TabNavigator />
      </StoreProvider>
    </PaperProvider>
  </QueryClientProvider>
);

export default App;

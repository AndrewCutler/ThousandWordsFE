import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StoreProvider } from 'easy-peasy';
import { Provider as PaperProvider } from 'react-native-paper';
import React, { ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabNavigator from './components/tab-navigator/TabNavigator';
import store from './store/store';

const queryClient = new QueryClient();

const App = (): ReactElement => (
  <QueryClientProvider client={queryClient}>
    <PaperProvider>
      <SafeAreaProvider>
        <StoreProvider store={store}>
          <TabNavigator />
        </StoreProvider>
      </SafeAreaProvider>
    </PaperProvider>
  </QueryClientProvider>
);

export default App;

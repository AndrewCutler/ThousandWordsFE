import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StoreProvider } from 'easy-peasy';
import React from 'react';
import TabNavigator from './components/tab-navigator/TabNavigator';
import store from './store/store';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>
        <TabNavigator />
      </StoreProvider>
    </QueryClientProvider>
  );
}

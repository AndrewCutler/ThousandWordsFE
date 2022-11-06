import { StoreProvider } from 'easy-peasy';
import TabNavigator from './components/tab-navigator/TabNavigator';
import store from './store/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <TabNavigator />
    </StoreProvider>
  );
}

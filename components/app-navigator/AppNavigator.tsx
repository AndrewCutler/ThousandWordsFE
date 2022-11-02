import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import LoginSplash from '../login-splash/LoginSplash';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Welcome' component={LoginSplash} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

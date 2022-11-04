import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home/Home';
import LoginSplash from '../login-splash/LoginSplash';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='Hello'>
        <Screen name='Hello' component={LoginSplash} />
        <Screen name='Home' component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

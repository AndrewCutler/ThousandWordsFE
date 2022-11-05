import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../home/Home';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const TabNavigator = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='Home'>
        <Screen
          name='Add'
          component={Home}
          options={{
            tabBarIcon: () => <MaterialCommunityIcons name='camera' />,
          }}
        />
        <Screen
          name='Home'
          component={Home}
          options={{ tabBarIcon: () => <MaterialCommunityIcons name='home' /> }}
        />
        <Screen
          name='Albums'
          component={Home}
          options={{
            tabBarIcon: () => <MaterialIcons name='photo-album' />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

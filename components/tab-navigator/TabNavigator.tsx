/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Actions, useStoreActions } from 'easy-peasy';
import Home from '../home/Home';
import { IStore } from '../../store/store';
import Albums from '../albums/Albums';
import Camera from '../camera/Camera';
import NewAlbum from '../albums/new-album/NewAlbum';
import useUser from '../../hooks/useUser';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const TabNavigator = (): React.ReactElement => {
	// TODO: createTypedActions
	const logout = useStoreActions((actions: Actions<IStore>) => actions.logout);
	useUser();

	return (
		<NavigationContainer>
			<Navigator initialRouteName='Home'>
				<Screen
					name='Add'
					component={Camera}
					options={{
						tabBarIcon: () => <MaterialCommunityIcons name='camera' />
					}}
				/>
				<Screen
					name='Home'
					component={Home}
					options={{ tabBarIcon: () => <MaterialCommunityIcons name='home' /> }}
				/>
				<Screen
					name='Albums'
					component={Albums}
					listeners={() => ({
						tabPress: () => logout()
					})}
					options={{
						tabBarIcon: () => <MaterialIcons name='photo-album' />
					}}
				/>
				<Screen name='New Album' component={NewAlbum} />
			</Navigator>
		</NavigationContainer>
	);
};

export default TabNavigator;

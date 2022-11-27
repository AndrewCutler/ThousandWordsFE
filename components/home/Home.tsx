import React, { useState } from 'react';
import { Text, View } from 'react-native';
import LoginSplash from '../login-splash/LoginSplash';

const Home = (): React.ReactElement => (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<LoginSplash />
		<Text>Welcome home</Text>
	</View>
);

export default Home;

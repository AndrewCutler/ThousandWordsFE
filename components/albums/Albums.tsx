import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAlbums from '../../hooks/useAlbums';
import AlbumCard from './album-card/AlbumCard';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Albums = ({ navigation }: { navigation: any }): React.ReactElement => {
	const { albums, isError, isFetched, refetch } = useAlbums();

	const [displayText, setDisplayText] = useState<string>('');

	useEffect(() => {
		const onFocus = navigation.addListener('focus', () => {
			(async () => refetch())();
		});

		return onFocus;
	}, [navigation, refetch]);

	useEffect(() => {
		if (!isFetched) {
			setDisplayText('Loading...');
		} else {
			setDisplayText('');
		}
	}, [isFetched]);

	useEffect(() => {
		if (isError) {
			setDisplayText('There was an error retrieving albums.');
		}
	}, [isError]);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<Text>{displayText}</Text>
				{albums?.map((album) => (
					<AlbumCard album={album} key={album.id} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default Albums;

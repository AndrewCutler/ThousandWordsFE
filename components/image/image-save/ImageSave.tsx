import React, { ReactElement, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Divider, Menu, Portal } from 'react-native-paper';

import NewAlbum from '../../albums/new-album/NewAlbum';
import useAlbums from '../../../hooks/useAlbums';

const ImageSave = ({ base64 }: { base64?: string }): ReactElement => {
	const [showNewAlbumForm, setShowNewAlbumForm] = useState<boolean>(false);
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const { albums } = useAlbums();

	const handleAlbumSelect = (albumId?: string): void => {
		if (albumId) {
			// save to album
		} else {
			// save without album
		}
	};

	const handleNewAlbum = (): void => {
		setShowMenu(false);
		setShowNewAlbumForm(true);
	};

	useEffect(() => {
		console.log(albums);
	}, [albums]);

	return (
		<Portal.Host>
			<View>
				<Menu
					visible={showMenu}
					onDismiss={() => setShowMenu(false)}
					anchor={<Button onPress={() => setShowMenu(true)}>Save to album</Button>}
				>
					<Menu.Item title='None' onPress={() => handleAlbumSelect()} />
					<Divider />
					{/* {albums.map(({ name, id }) => (
						<Menu.Item key={id} title={name} onPress={() => handleAlbumSelect(id)} />
					))}
					{albums?.length > 0 && <Divider />} */}
					<Menu.Item
						title='Create new album'
						onPress={handleNewAlbum}
						style={{ backgroundColor: '#039948' }}
					/>
				</Menu>
				{showNewAlbumForm && (
					<Portal>
						<NewAlbum />
					</Portal>
				)}
			</View>
		</Portal.Host>
	);
};

export default ImageSave;

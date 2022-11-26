import { useQuery } from '@tanstack/react-query';
import { State, useStoreState } from 'easy-peasy';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUserAlbums } from '../../api/queries';
import { IStore } from '../../store/store';
import AlbumCard from './album-card/AlbumCard';

const Albums = ({ navigation }: { navigation: any }): React.ReactElement => {
  const user = useStoreState((state: State<IStore>) => state.user);

  const { data, isError, isFetched, refetch } = useQuery({
    queryKey: ['getUserAlbums', user?.userId],
    queryFn: () => getUserAlbums(user?.userId),
  });

  const [displayText, setDisplayText] = useState<string>('');

  useEffect(() => {
    const onFocus = navigation.addListener('focus', () => {
      void (async () => await refetch())();
    });

    return onFocus;
  }, [navigation]);

  useEffect(() => {
    if (!isFetched) {
      setDisplayText('Loading...');
    } else {
      setDisplayText('');
    }
  }, [isFetched, isError]);

  useEffect(() => {
    if (isError) {
      setDisplayText('There was an error retrieving albums.');
    }
  }, [isError]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Text>{displayText}</Text>
        {data?.map((album) => (
          <AlbumCard album={album} key={album.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Albums;

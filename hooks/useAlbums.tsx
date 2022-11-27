import { useQuery } from '@tanstack/react-query';
import { State, useStoreState } from 'easy-peasy';
import { AlbumDTO } from '../api/api';
import { getUserAlbums } from '../api/queries';
import { IStore } from '../store/store';

const useAlbums = (): { albums: AlbumDTO[]; isError: boolean; isFetched: boolean; refetch: any } => {
	const user = useStoreState((state: State<IStore>) => state.user);

	const {
		data: albums,
		isError,
		isFetched,
		refetch
	} = useQuery({
		queryKey: ['getUserAlbums', user?.userId],
		queryFn: () => getUserAlbums(user?.userId)
	});

	return { albums, isError, isFetched, refetch };
};

export default useAlbums;

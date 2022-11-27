/* eslint-disable @typescript-eslint/no-explicit-any */
import { AlbumDTO, Api, HttpResponse, ApiConfig } from './api';

const apiConfig: ApiConfig = {
	baseUrl: 'https://thousand-words.azurewebsites.net'
};

export const getUserAlbums = async (userId: string): AlbumDTO[] => {
	const { api } = new Api(apiConfig);

	const response = await api.albumList({
		userId
	});

	if (!response.ok) {
		throw new Error('Failed to retrieve albums by user id.');
	}

	return response.data;
};

export const createAlbum = async (userId: string, name: string): HttpResponse<void, any> => {
	const { api } = new Api(apiConfig);

	const response = await api.albumCreate({
		userId,
		name
	});

	if (!response.ok) {
		throw new Error('Failed to retrieve image by id.');
	}

	return response;
};

import { QueryFunction, QueryKey } from '@tanstack/react-query';
import { Api, ApiConfig } from './api';

interface IQuery {
  queryKey: QueryKey;
  queryFn: QueryFunction<any, QueryKey>;
}

const apiConfig: ApiConfig = {
  baseUrl: 'https://thousand-words.azurewebsites.net',
};

export const getImageById = (id: string): IQuery => {
  const { api } = new Api(apiConfig);

  const queryKey = ['imageById', id];
  const queryFn = async () => {
    const response = await api.imageList({ id });

    if (!response.ok) {
      throw new Error('Failed to retrieve image by id.');
    }

    return response;
  };

  return { queryKey, queryFn };
};

import { useEffect, useState } from 'react';
import Config from 'react-native-config';

export interface IApiProps {
  verb: 'GET' | 'PUT' | 'POST' | 'DELETE';
  route: 'IMAGE' | 'ALBUM';
  subroute: 'ACTIVE' | 'MOVE' | 'LINK' | undefined;
  params: any;
}

export type ApiStatus = 'fetching' | 'idle';

// TODO: use react-query instead

const useApi = <T>({ verb, route, subroute, params }: IApiProps) => {
  const [status, setStatus] = useState<ApiStatus>('idle');
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchData = async () => {
      setStatus('fetching');
      const url = `${Config.API_BASE}${route}${subroute ? `/${subroute}` : ''}`;
      const response = await fetch(url, {
        method: verb,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());

      setData(response.data);
    };

    fetchData();
  }, [route, subroute, verb, params]);

  return { status, data };
};

export default useApi;

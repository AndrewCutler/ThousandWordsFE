import { useEffect, useState } from 'react';

const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = (username: string, password: string): void => {
    setUsername(username);
    setPassword(password);
  };

  const logout = (): void => {
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    setIsAuthenticated(!!username);
  }, [username]);

  return { isAuthenticated, login, logout };
};

export default useAuthentication;

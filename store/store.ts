import { action, Action, createStore } from 'easy-peasy';

interface IStore {
  username: string | undefined;
  password: string | undefined;
  login: Action<IStore, { username: string; password: string }>;
  logout: Action<IStore, void>;
}

const store = createStore<IStore>({
  username: undefined,
  password: undefined,
  login: action((state, { username, password }) => {
    state.username = username;
    state.password = password;
  }),
  logout: action((state) => {
    state.username = undefined;
    state.password = undefined;
  }),
});

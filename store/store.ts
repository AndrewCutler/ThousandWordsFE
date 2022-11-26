/* eslint-disable no-param-reassign */
import { action, Action, computed, Computed, createStore } from 'easy-peasy';

export interface IUser {
  userId: string;
  name: string;
}

export interface IStore {
  username: string | undefined;
  password: string | undefined;
  isAuthenticated: Computed<IStore, boolean>;
  newImage: string | undefined;
  setNewImage: string | undefined;
  user: IUser | undefined;
  login: Action<IStore, { username: string; password: string }>;
  logout: Action<IStore, void>;
}

const store = createStore<IStore>({
  username: undefined,
  password: undefined,
  newImage: undefined,
  setNewImage: action((state, base64) => {
    state.newImage = base64;
  }),
  user: {
    userId: '4a5b113e-73ed-4546-83f8-9a6eb09e62a8',
    name: 'Test user',
  },
  isAuthenticated: computed((state) => Boolean(state.username)),
  login: action((state, { username, password }) => {
    state.username = username;
    state.password = password;
  }),
  logout: action((state) => {
    state.username = undefined;
    state.password = undefined;
  }),
});

export default store;

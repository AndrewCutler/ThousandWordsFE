import { IImage } from './image';

export interface IAlbum {
  id: string;
  userId: string;
  images: IImage[];
  name: string;
}

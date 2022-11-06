import { DateTime } from 'luxon';

export interface IImage {
  id: string;
  imageData: string;
  userId: string;
  active: boolean;
  link?: any;
  created: DateTime;
}

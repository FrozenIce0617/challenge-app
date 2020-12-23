import { Place } from '../../types/global';

export type PlaceState = {
  places: Place[];
  loading: boolean;
  error: Error | null;
};

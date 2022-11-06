import { Image } from './image';

export interface FavoriteImage {
  id: number | null;
  image_id: string;
  image: Image;
  isFavorite: boolean;
}

export interface IAddToFavoriteReq {
  favoriteId: number;
  index: number;
}

export interface IActionFavoritesProps {
  id: string | number;
  index: number;
}

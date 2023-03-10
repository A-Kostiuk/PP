import React, { FC } from 'react';
import NextImage from 'next/image';

import { useCustomDispatch } from '../../../hooks/store';

import {
  addToFavorites as addToFavoritesGallery,
  removeFromFavorites as removeFromFavoritesGallery,
} from '../../../store/gallery-slice/gallery-slice';

import {
  addToFavorites as addToFavoritesFavorites,
  removeFromFavorites as removeFromFavoritesFavorites,
} from '../../../store/favorites-slice/favorites-slice';

import { Container, FavoriteButton } from './styled';

interface Props {
  url: string;
  isFavorite: boolean;
  id: string;
  index: number;
  favoriteId: number | null;
  type: 'gallery' | 'favorites';
}

const CustomImageItem: FC<Props> = ({url, isFavorite, id, favoriteId, index, type}) => {
  const dispatch = useCustomDispatch();
  const handleFavoriteButtonOnClick = async () => {
    const removeData = {id: favoriteId!, index};
    const addData = {id, index};
    if (type === 'gallery') {
      isFavorite && favoriteId ?
        dispatch(removeFromFavoritesGallery({id: favoriteId, index}))
        :
        dispatch(addToFavoritesGallery(addData));
    } else if (type === 'favorites') {
      isFavorite && favoriteId ?
        dispatch(removeFromFavoritesFavorites(removeData))
        :
        dispatch(addToFavoritesFavorites(addData));
    }
  };

  return (
    <Container>
      <NextImage src={url} alt={''} layout={'fill'} priority={false} />
      <FavoriteButton $isFavorite={isFavorite} onClick={handleFavoriteButtonOnClick} />
    </Container>
  );
};

export default CustomImageItem;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FavoriteImage, IActionFavoritesProps, IAddToFavoriteReq } from '../../interfaces/favorite';
import theCatApi from '../../axios/the-cat-api';

interface Favorites {
  images: FavoriteImage[];
  isLoading: boolean;
}

const initialState: Favorites = {
  images: [],
  isLoading: false,
};

export const fetchFavoritesImages = createAsyncThunk<FavoriteImage[]>(
  'favorites/fetchFavoritesImages',
  async () => {
    const res = await theCatApi.favorite.fetchFavorites();
    return res.data.map(image => ({...image, isFavorite: true}));
  },
);

export const addToFavorites = createAsyncThunk<IAddToFavoriteReq | null, IActionFavoritesProps>(
  'favorites/addToFavorites',
  async ({id, index}) => {
    const data = {
      image_id: id.toString(),
      sub_id: 'AndriyKostiuk',
    };
    const req = await theCatApi.favorite.addToFavorites(data);
    if (req.status === 200) {
      return {favoriteId: req.data.id, index};
    }
    return null;
  },
);

export const removeFromFavorites = createAsyncThunk<number | null, IActionFavoritesProps>(
  'favorites/removeFromFavorites',
  async ({id, index}) => {
    const req = await theCatApi.favorite.removeFromFavorites(id);
    if (req.status === 200) {
      return index;
    }
    return null;
  },
);

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoritesImages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFavoritesImages.fulfilled, (state, action) => {
      state.images = action.payload;
    });
    builder.addCase(addToFavorites.fulfilled, (state, action) => {
      if (action.payload) {
        const {index, favoriteId} = action.payload;
        state.images[index].isFavorite = true;
        state.images[index].id = favoriteId;
      }
    });
    builder.addCase(removeFromFavorites.fulfilled, (state, action) => {
      const index = action.payload;
      if (index !== null) {
        state.images[index].isFavorite = false;
        state.images[index].id = null;
      }
    });
  },
});

export default favoriteSlice.reducer;

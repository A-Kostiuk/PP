import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectOption } from '../../interfaces/select-option';
import { AppDispatch, RootState } from '../index';
import theCatApi from '../../axios/the-cat-api';
import { GalleryImage, Image } from '../../interfaces/image';
import { IActionFavoritesProps, IAddToFavoriteReq } from '../../interfaces/favorite';

interface Gallery {
  order: SelectOption;
  type: SelectOption;
  breed: SelectOption;
  limit: SelectOption;
  pictures: GalleryImage[];
  isLoading: boolean;
}

const initialState: Gallery = {
  order: {value: 'RAND', label: 'Random'},
  type: {value: 'jpg,png', label: 'Static'},
  limit: {value: 5, label: '5 items per page'},
  breed: {value: 'none', label: 'None'},
  pictures: [],
  isLoading: false,
};

export const fetchGalleryImages = createAsyncThunk<GalleryImage[], void, { state: RootState, dispatch: AppDispatch }>(
  'gallery/fetchGalleryImages',
  async (_, {getState}) => {
    const order = getState().gallery.order.value;
    const type = getState().gallery.type.value;
    const limit = getState().gallery.limit.value;
    const breed = getState().gallery.breed.value;

    const favoritesReq = await theCatApi.favorite.fetchFavorites();
    const favorites = favoritesReq.data;

    return theCatApi.gallery.fetchPictures(limit, type, breed, order)
      .then(res =>
        res.data.map((image: Image) => {
          const favorite = favorites.find((favorite) => image.id === favorite.image_id);
          const isFavorite = !!favorite;
          const favoriteId = favorite ? favorite.id : null;
          return {...image, isFavorite, favoriteId};
        }));
  },
);

export const addToFavorites = createAsyncThunk<IAddToFavoriteReq | null, IActionFavoritesProps>(
  'gallery/addToFavorites',
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
  'gallery/removeFromFavorites',
  async ({id, index}) => {
    const req = await theCatApi.favorite.removeFromFavorites(id);
    if (req.status === 200) {
      return index;
    }
    return null;
  },
);

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setOrder(state, action: PayloadAction<SelectOption>) {
      state.order = action.payload;
    },
    setType(state, action: PayloadAction<SelectOption>) {
      state.type = action.payload;
    },
    setLimit(state, action: PayloadAction<SelectOption>) {
      state.limit = action.payload;
    },
    setBreed(state, action: PayloadAction<SelectOption>) {
      state.breed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGalleryImages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGalleryImages.fulfilled, (state, action) => {
      state.pictures = action.payload;
      state.isLoading = false;
    });
    builder.addCase(addToFavorites.fulfilled, (state, action) => {
      const image = action.payload;
      if (action.payload) {
        const currentImage = state.pictures[image!.index];
        currentImage.isFavorite = true;
        currentImage.favoriteId = image!.favoriteId;
      }
    });
    builder.addCase(removeFromFavorites.fulfilled, (state, action) => {
      const index = action.payload;
      if (index) {
        const currentImage = state.pictures[index];
        currentImage.isFavorite = false;
        currentImage.favoriteId = null;
      }
    });
  },
});

export const {setBreed, setOrder, setLimit, setType} = gallerySlice.actions;
export default gallerySlice.reducer;

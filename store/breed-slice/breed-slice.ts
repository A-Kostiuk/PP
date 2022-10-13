import { Breed } from '../../interfaces/breed';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import theCatApi from '../../axios/the-cat-api';

interface IBreed {
  currentBreed: Breed;
  isLoading: boolean;
}

const initialState: IBreed = {
  currentBreed: {
    id: '',
    name: '',
    images: [],
    temperament: '',
    origin: '',
    weight: {metric: ''},
    life_span: '',
  },
  isLoading: false,
};

export const fetchBreed = createAsyncThunk<Breed, string | string[]>(
  'breed/fetchBreed',
  async (id) => {
    const reqBreed = await theCatApi.breed.fetchBreed(id);
    const reqImg = await theCatApi.breed.fetchBreedImages(id);
    return {...reqBreed.data, images: reqImg.data};
  },
);

const breedSlice = createSlice(
  {
    name: 'breed',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchBreed.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchBreed.fulfilled, (state, action) => {
        state.currentBreed = action.payload;
        state.isLoading = false;
      });
    },
  },
);

export default breedSlice.reducer;

import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BreedOption, BreedResponse } from '../../interfaces/breed';
import theCatApi from '../../axios/the-cat-api';
import { SelectOption } from '../../interfaces/select-option';
import { HYDRATE } from 'next-redux-wrapper';

interface Breeds {
  currentBreeds: BreedOption[];
  limit: SelectOption;
  page: number;
  allBreeds: BreedOption[];
  selectBreed: BreedOption | null,
}

const initialState: Breeds = {
  currentBreeds: [],
  limit: {value: 10, label: 'Limit: 10'},
  page: 0,
  allBreeds: [],
  selectBreed: null,
};

export const fetchAllBreeds = createAsyncThunk<BreedOption[], void>(
  'breeds/fetchAllBreeds',
  async () => {
    const req = await theCatApi.breeds.fetchAllBreeds();
    return req.data.map((breed: BreedResponse) => ({value: breed.id, label: breed.name, ...breed}));
  },
);

const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setLimit(state, action: PayloadAction<SelectOption>) {
      state.limit = action.payload;
      state.page = 0;
      state.currentBreeds = state.allBreeds.slice(0, Number(action.payload.value));

    },
    setSelectBreed(state, action: PayloadAction<BreedOption | null>) {
      state.selectBreed = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
      const start = action.payload * Number(state.limit.value);
      const end = action.payload * Number(state.limit.value) + Number(state.limit.value);
      state.currentBreeds = state.allBreeds.slice(start, end);
    },
    sortCurrentBreeds(state, action: PayloadAction<string>) {
      if (action.payload === 'a-z') {
        state.currentBreeds.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload === 'z-a') {
        state.currentBreeds.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
      }
    },
  },
  extraReducers: (builder => {
    builder.addCase(fetchAllBreeds.fulfilled, (state, action) => {
      state.allBreeds = action.payload;
      state.currentBreeds = action.payload.slice(0, Number(state.limit.value));
    })
      .addCase(HYDRATE, (state, action: AnyAction) => {
        return {
          ...state,
          ...action.payload.breeds,
        };
      });
  }),
});

export const {setLimit, setSelectBreed, setPage, sortCurrentBreeds} = breedsSlice.actions;
export default breedsSlice.reducer;

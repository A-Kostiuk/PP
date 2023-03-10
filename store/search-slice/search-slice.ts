import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface ISearch {
  searchValue: string;
}

const initialState: ISearch = {
  searchValue: '',
};

const searchSlice = createSlice(
  {
    name: 'search',
    initialState,
    reducers: {
      setSearchValue: (state, action: PayloadAction<string>) => {
        state.searchValue = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(HYDRATE, (state, action: AnyAction) => {
        return {
          ...state,
          ...action.payload.search,
        };
      });
    },
  },
);

export const {setSearchValue} = searchSlice.actions;
export default searchSlice.reducer;

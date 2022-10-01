import React, { FC } from 'react';
import { Label, SearchDesc, SearchField } from './styled';

const Search: FC = () => {
  return (
    <Label>
      <SearchDesc>Search for breeds by name</SearchDesc>
      <SearchField id="search" type="text" placeholder="Search for breeds by name" />
    </Label>
  );
};

export default Search;

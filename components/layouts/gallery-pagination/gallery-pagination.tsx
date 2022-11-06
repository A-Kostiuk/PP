import React, { FC } from 'react';
import { GalleryImage } from '../../../interfaces/image';
import { Pagination } from './styled';
import PaginationButton from '../../ui/pagination-button/pagination-button';

interface Props {
  pictures: GalleryImage[];
}

const GalleryPagination: FC<Props> = ({pictures}) => {
  return (
    <Pagination>
      <PaginationButton onClick={() => {}} disabled={false}>Previous</PaginationButton>
      <PaginationButton onClick={() => {}} disabled={false}>Previous</PaginationButton>
    </Pagination>
  );
};

export default GalleryPagination;

import styled, { css } from 'styled-components';
import { Li } from '../../styled';

interface IFavoriteButton {
  $isFavorite: boolean;
}

export const FavoriteButton = styled.button<IFavoriteButton>`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  position: absolute;
  z-index: 2;
  border: none;
  width: 40px;
  height: 40px;
  background-color: ${({theme}) => theme.colors.btnBackground};
  cursor: pointer;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;

  ${(props) => props.$isFavorite ? css`
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z' fill='%23FF868E'/%3E%3C/svg%3E%0A");
  ` : css`
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='18' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 18'%3E%3Cpath fill='%23FF868E' d='M5.3807 1.3333c-2.2353 0-4.0474 1.8121-4.0474 4.0474a4.0474 4.0474 0 0 0 1.1855 2.862L10 15.7238l7.4812-7.4813a4.0476 4.0476 0 0 0 1.1855-2.8619c0-2.2353-1.8121-4.0474-4.0474-4.0474a4.0473 4.0473 0 0 0-2.8619 1.1855l-1.286 1.286a.6667.6667 0 0 1-.9428 0l-1.286-1.286a4.0474 4.0474 0 0 0-2.8619-1.1855ZM0 5.3807C0 2.409 2.409 0 5.3807 0c1.427 0 2.7957.5669 3.8047 1.576L10 2.3905l.8146-.8145A5.3804 5.3804 0 0 1 14.6193 0C17.591 0 20 2.409 20 5.3807a5.3806 5.3806 0 0 1-1.576 3.8047l-7.9526 7.9527a.6667.6667 0 0 1-.9428 0L1.576 9.1854A5.3807 5.3807 0 0 1 0 5.3807Z'/%3E%3C/svg%3E");
  `}

`;

export const Container = styled(Li)`
  position: relative;

  ${FavoriteButton} {
    display: none;
  }

  :hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${({theme}) => theme.colors.photoHover};
    }

    ${FavoriteButton} {
      display: block;
    }
  }

`;

import styled from 'styled-components';
import { VisuallyHidden } from '../../styled';

export const Label = styled.label`
  position: relative;
  order: 1;
  grid-column: 1 / -1;
  min-width: 200px;

  &&:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    top: 10px;
    right: 10px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath fill='%23${({theme}) => theme.colors.secondary.slice(1)}' d='m19.361 18.217-4.76-4.95a8.049 8.049 0 0 0 1.894-5.192C16.495 3.623 12.873 0 8.42 0 3.968 0 .345 3.623.345 8.075c0 4.453 3.623 8.075 8.075 8.075a7.989 7.989 0 0 0 4.627-1.461l4.796 4.988c.2.208.47.323.759.323a1.054 1.054 0 0 0 .759-1.783ZM8.421 2.107a5.975 5.975 0 0 1 5.968 5.968 5.975 5.975 0 0 1-5.969 5.969 5.975 5.975 0 0 1-5.968-5.969A5.975 5.975 0 0 1 8.42 2.107Z'/%3E%3C/svg%3E%0A");
    background-size: 20px 20px;
    background-position: 10px 10px;
    background-repeat: no-repeat;
  }

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    order: 0;
    flex-grow: 1;
  }
`;

export const SearchDesc = styled.span`
  ${VisuallyHidden}
`;

export const SearchField = styled.input`
  position: relative;
  width: 100%;
  border: none;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.baseWhite};
  padding: 15px 60px 15px 20px;
  font-size: 20px;
  line-height: 30px;

  :hover {
    border: 2px solid #FBE0DC;
    padding: 13px 58px 13px 18px;
  }

  :focus {
    border: 2px solid #FF868E;
    padding: 13px 58px 13px 18px;
    outline: none;
  }
`;

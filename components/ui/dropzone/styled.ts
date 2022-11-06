import styled, { css } from 'styled-components';
import { P } from '../../styled';

interface IContainer {
  $status: boolean | null;
}

export const Container = styled.div<IContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 100%;
  height: 320px;
  padding: 20px 40px;
  margin-bottom: 20px;

  ${(props) => props.$status === false ?
          css`
            background-color: ${({theme}) => theme.colors.primary};
            border: 2px dashed ${({theme}) => theme.colors.secondary};
          ` :
          css`
            background-color: ${({theme}) => theme.colors.primaryBackground};
            border: 2px dashed ${({theme}) => theme.colors.primary};
          `
  };

  svg {
    position: absolute;
    width: 200px;
    height: 200px;

    path {
      fill: ${({theme}) => theme.colors.appBackground};
    }
  }

  img {
    z-index: 10;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Text = styled(P)`
  font-size: 20px;
  line-height: 30px;
  z-index: 2;

  b {
    color: ${({theme}) => theme.colors.text};
  }
`;

export const FileName = styled(P)`
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  display: block;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  padding: 12px 30px;
  background-color: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.baseWhite};
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
`;

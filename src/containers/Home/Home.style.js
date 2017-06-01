

import styled, { css } from 'styled-components';
import '../../theme/colorPalette.scss';
// import 'normalize.css';

export const MainImage = styled.div`
  width: 100%;

  background-repeat: no-repeat;
  background-image: url('${require('../../assets/giphy-rain.gif')}');
  background-size: cover;
  background-position: center;
  // background: rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  color: #7a7aff;

  font-size: 1.5em;
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;

    transform-origin: left;
    transform: rotateY(90deg);

    transition: transform 1s;
  }

  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`
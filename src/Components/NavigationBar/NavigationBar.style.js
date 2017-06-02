import styled from 'styled-components';
import { Flex, Div } from '../../theme/grid';
import { Link } from 'react-router';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  right: 4em;
  top: 1em;
  // background-color: red;
  font-family: 'Satisfy';

`;
export const NavItem = styled(Link)`
  margin-right: 30px;
  font-size: 1em;
  cursor: pointer;
  color: black;
  position: relative;
  text-decoration: none;
  &:hover {
    color: #fc0a8b;
    text-decoration: underline;
    font-style: italic;
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #f0eff2;
      opacity: 0.35;
      z-index: -1;
      transform: scale(1.3);
    }
  }
`;


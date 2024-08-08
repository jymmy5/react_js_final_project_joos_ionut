import { css } from 'styled-components';

export const mobile = (styles) => css`
@media screen and (max-width: 767px) {
    ${styles}
  }
`;

export const tablet = (styles) => css`
@media screen and (max-width: 1024px) {
    ${styles}
  }
`;

export const desktop = (styles) => css`
@media screen and (min-width: 1025px) {
    ${styles}
  }
`;
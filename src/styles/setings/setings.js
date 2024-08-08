import styled from 'styled-components';
import { basicFonts } from './variables';
import { colors, COLORS } from './colors';
import { css } from 'styled-components';

export const html = `
  html{ font-family: ${basicFonts.basicFontFamily}, ${basicFonts.sansSerif}; 
  //  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color:  ${COLORS.colorBaseFont}; }
`;

export const body = `
body{
  background-color: ${COLORS.colorPageBackground};
  }
`;

export const FloatLeftImage = styled.img`
  float: left;
  margin-right: 15px;
  margin-bottom: 15px;
`;

export const FloatRightImage = styled.img`
  float: right;
  margin-left: 15px;
  margin-bottom: 15px;
`;

export const alignment = {
  center: css`
    display: flex;
    align-items: center;
  `,
  centerTop: css`
    display: flex;
    align-items: flex-start;
  `,
  centerMiddle: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  centerBottom: css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
  `
};

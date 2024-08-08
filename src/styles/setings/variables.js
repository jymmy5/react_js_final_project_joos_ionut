import { COLORS } from './colors'

export const basicFonts = {
  basicFontFamily: 'Open Sans',
  sansSerif: 'sans-serif',
  logoFontFamily: 'Oleo Script',
  systemUi: 'system-ui',
}

export const articleTitleH2 = `
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-thickness: 4px;
  text-decoration-color: ${COLORS.colorTextUnderlineDefault};
`

export const defaultTitleH2 = `
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: ${COLORS.colorTextUnderlineDefault};
`

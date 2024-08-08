import { createGlobalStyle, styled } from 'styled-components'
import { reset } from './generic/reset'
import { gridContainer, generateColumnClasses } from './elements/grid'
import { html, body } from './setings/setings'

const GlobalStyle = createGlobalStyle`

${reset}
${html}
${body}

  ${gridContainer}
  ${generateColumnClasses()}
`

export default GlobalStyle

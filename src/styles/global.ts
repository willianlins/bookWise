import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus{
  outline: 0;
}


button{
  all: unset;
  box-sizing: border-box;
}

body{
  background: ${(props) => props.theme.COLORS['gray-800']};
  color: ${(props) => props.theme.COLORS['gray-100']};
  -webkit-font-smoothing: antialiased;
}

a{
  text-decoration: none;
}

body, input, text-area, button{
  font-family: ${(props) => props.theme.FONT.default};
  font-size: ${(props) => props.theme.FONT_SIZE.md};
}
`

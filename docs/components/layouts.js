import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as themes from '../../themes'

export const withTheme = key => ({ children }) => {
  const theme = themes[key] || themes.default
  console.log(key, theme, children)
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}


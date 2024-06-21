import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../styles/theme/default'
import { SessionProvider } from 'next-auth/react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

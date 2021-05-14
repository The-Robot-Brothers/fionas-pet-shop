import { useState } from 'react'
import { AppProps } from 'next/app'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(light)

  return (
    <NextAuthProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </NextAuthProvider>
  )
}

export default MyApp

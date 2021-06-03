import { useState } from 'react'
import { AppProps } from 'next/app'
<<<<<<< HEAD
import { DefaultTheme, ThemeProvider } from 'styled-components'
=======
>>>>>>> 2bb54825a74f99f42028c02b79227795a5256fc1
import { Provider as NextAuthProvider } from 'next-auth/client'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
<<<<<<< HEAD
import light from '../styles/themes/light'
=======

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
>>>>>>> 2bb54825a74f99f42028c02b79227795a5256fc1

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(light)

  return (
      <ThemeProvider theme={light}>
        <NextAuthProvider session={pageProps.session}>
          <Component {...pageProps} />
          <GlobalStyle />
        </NextAuthProvider>
      </ThemeProvider>
  )
}

export default MyApp

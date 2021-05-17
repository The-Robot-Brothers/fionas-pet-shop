import { AppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Provider as NextAuthProvider } from 'next-auth/client'

import GlobalStyle from '../styles/global'
import light from '../styles/themes/light'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
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

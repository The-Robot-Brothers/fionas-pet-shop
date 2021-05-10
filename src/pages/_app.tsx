import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider as NextAuthProvider } from 'next-auth/client'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { FolderPlusDimensions } from '@styled-icons/feather/FolderPlus'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
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

import { ThemeProvider } from 'styled-components'
import Main from '../Main'
import MenuBar from '../MenuBar'
import NavigatorBar from '../NavigatorBar'

import { Container, Wrapper } from './styles'

const Layout: React.FC = () => {

  return (
      <Container>
        <Wrapper>
          <MenuBar />
          <Main />
          <NavigatorBar />
        </Wrapper>
      </Container>
  )
}

export default Layout

import React from 'react'

import {
  Container,
  Header,
  Link,
  HeaderButton,
  HomeIcon,
  MessageIcon,
  GalleryIcon,
  LoginButton,
  LogInIcon
} from './styles'
import RocketseatLogo from '../../assets/rocketseat.svg'

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <RocketseatLogo />

        <Link>
          <HeaderButton>
            <HomeIcon />
            <span>Home</span>
          </HeaderButton>
          <HeaderButton>
            <GalleryIcon />
            <span>Galeria</span>
          </HeaderButton>
          <HeaderButton>
            <MessageIcon />
            <span>Contato</span>
          </HeaderButton>

          <LoginButton>
            <span>Login</span>
            <LogInIcon />
          </LoginButton>
        </Link>
      </Header>

      {/* <BottomMenu>
        <HomeIcon />
        <EmailIcon />
      </BottomMenu> */}
    </Container>
  )
}

export default Main

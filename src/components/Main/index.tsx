import React from 'react'

import {
  Container,
  Header,
  Link,
  HeaderButton,
  MessageIcon,
  GalleryIcon,
  Button,
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
            <GalleryIcon />
            <span>Galeria</span>
          </HeaderButton>
          <HeaderButton>
            <MessageIcon />
            <span>Contato</span>
          </HeaderButton>

          <Button>
            <span>Login</span>
            <LogInIcon />
          </Button>
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

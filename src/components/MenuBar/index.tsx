import React from 'react'

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  GalleryIcon,
  MessageIcon,
  BottomSide,
  LoginButton,
  LogInIcon
} from './styles'

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />
      </TopSide>

      <BottomSide>
        <MenuButton>
          <HomeIcon />
        </MenuButton>

        <MenuButton>
          <GalleryIcon />
        </MenuButton>

        <MenuButton>
          <MessageIcon />
        </MenuButton>

        <LoginButton>
          <LogInIcon />
        </LoginButton>
      </BottomSide>
    </Container>
  )
}

export default MenuBar

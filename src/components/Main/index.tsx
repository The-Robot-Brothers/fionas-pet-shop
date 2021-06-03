import React, { useContext } from 'react'

import {
  Container,
  Header,
  Link,
  HeaderButton,
  BottomMenu,
  HomeIcon,
  MessageIcon,
  GalleryIcon,
  LogInIcon
} from './styles'
import RocketseatLogo from '../../assets/rocketseat.svg'

import Button from '../Button'


const Main: React.FC = () => {


  return (

    <Container>

      <Header>
        <RocketseatLogo />

        <Link>
          <HeaderButton>
            <HomeIcon />
          </HeaderButton>
          <HeaderButton>
            <GalleryIcon />
          </HeaderButton>
          <HeaderButton>
            <MessageIcon />
          </HeaderButton>

          <Button />

        </Link>
      </Header>

      <BottomMenu>
        <HomeIcon />
        <GalleryIcon />
        <MessageIcon />
        <LogInIcon />
      </BottomMenu>

    </Container>
  )
}

export default Main

import React from 'react'

import { Container, Wrapper, Link } from './styles'
import RocketseatLogo from '../../assets/rocketseat.svg'

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <RocketseatLogo />
        <Link>
          <a href="#">Sobre Nós</a>
          <a href="#">Contato</a>
          <a href="#">Test</a>
          <button>Login</button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Header

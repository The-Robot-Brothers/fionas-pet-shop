import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import RocketseatLogo from '../assets/rocketseat.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <img src={RocketseatLogo} alt="Logo" />
      <h1>Fiona's Pet Shop</h1>
    </Container>
  )
}

export default Home

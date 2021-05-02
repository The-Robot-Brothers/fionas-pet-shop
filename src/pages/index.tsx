import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Fiona's Pet Shop</title>
      </Head>

      <Header />
    </Container>
  )
}

export default Home

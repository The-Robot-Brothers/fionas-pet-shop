import React from 'react'

import { Container } from './styles'
import List from '../NavigatorList'
import LinkList from '../NavigatorListLink'

const NavigatorBar: React.FC = () => {
  return (
    <Container>
      <List
        title="Navegação"
        elements={[<LinkList />, <LinkList />, <LinkList />, <LinkList />]}
      />
    </Container>
  )
}

export default NavigatorBar

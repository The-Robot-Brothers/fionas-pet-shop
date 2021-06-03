import React, { useEffect, useState } from 'react'

import {
  Container,
  Notch,
  CraterExtraSmall,
  CraterSmall,
  CraterMedium,
  CraterLarge,
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge
} from './styles'

import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'

const Toggle: React.FC = () => {
  const [toggled, setToggled] = useState(false)
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
    setToggled(s => !s)
  }

  console.log(theme)

  return (
    <Container onClick={toggleTheme} className={`${toggled ? 'night' : ''}`}>
      <Notch className={`${toggled ? 'night' : ''}`}>
        <CraterExtraSmall className={`${toggled ? 'night' : ''}`} />
        <CraterSmall className={`${toggled ? 'night' : ''}`} />
        <CraterMedium className={`${toggled ? 'night' : ''}`} />
        <CraterLarge className={`${toggled ? 'night' : ''}`} />
      </Notch>
      <div>
        <ExtraSmall className={`${toggled ? 'night' : ''}`} />
        <Small className={`${toggled ? 'night' : ''}`} />
        <Medium className={`${toggled ? 'night' : ''}`} />
        <Large className={`${toggled ? 'night' : ''}`} />
        <ExtraLarge className={`${toggled ? 'night' : ''}`} />
      </div>
    </Container>
  )
}

export default Toggle

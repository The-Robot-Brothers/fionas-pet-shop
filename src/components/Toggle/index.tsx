import React, { useState } from 'react'

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

const Toggle: React.FC = () => {
  const [toggled, setToggled] = useState(false)

  function handleClick() {
    setToggled(s => !s)
  }

  return (
    <Container onClick={handleClick} className={`${toggled ? 'night' : ''}`}>
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

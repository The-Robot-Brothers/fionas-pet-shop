import React from 'react'
import { ButtonLogin, LogInIcon } from './styles'

import { signIn, signOut, useSession } from 'next-auth/client'



const Button = () => {
  const [session] = useSession();

  console.log(session)

  return session ? (

    <ButtonLogin>
      <button
        type="button"
        onClick={() => signOut()}
      >
        <span>{session.user.name}</span>
      </button>
    </ButtonLogin>

  ) : (
    <ButtonLogin>
      <button
        type="button"
        onClick={() => signIn('facebook')}
      >
        <span>Login</span>
        <LogInIcon />
      </button>
    </ButtonLogin>
  )
}

export default Button


import NextAuth from 'next-auth'
import { Provider } from 'next-auth/client'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.SECRET,

  session: {
    jwt: true,
  },

  jwt: {
  },

  pages: {
  },

  callbacks: {
  },

  events: {},

  // Enable debug messages in the console if you are having problems
  debug: false,
})

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      background: string
      text: string
      primary: string
      primary_light_hover: string
      primary_dark_hover: string
      logout: string
      login: string
      login_dark_hover: string
      outline: string
    }
  }
}

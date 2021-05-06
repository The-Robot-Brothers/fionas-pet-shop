import styled, { css } from 'styled-components'

import {
  Rocketseat,
  Home,
  MessageCircle,
  Image,
  LogIn
} from '../../styles/icons'
import Button from '../Button'

export const Container = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;

    padding: 8px 13px 20px;

    max-height: 100vh;
    height: 100vh;

    /* overflow-y: auto; */
  }
`

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled(Rocketseat)`
  width: 41px;
  height: 41px;

  > path {
    fill: ${props => props.theme.colors.primary};
  }
`

export const MenuButton = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;

  margin-bottom: 33px;

  width: 100%;
  height: unset;

  cursor: pointer;
`

const iconCSS = css`
  width: 30px;
  height: 30px;
  stroke-width: 2.5px;
`

export const HomeIcon = styled(Home)`
  ${iconCSS}
`

export const GalleryIcon = styled(Image)`
  ${iconCSS}
`

export const MessageIcon = styled(MessageCircle)`
  ${iconCSS}
`

export const BottomSide = styled.div`
  display: flex;
  flex-direction: column;
`

export const LoginButton = styled(Button)``

export const LogInIcon = styled(LogIn)`
  ${iconCSS}
`

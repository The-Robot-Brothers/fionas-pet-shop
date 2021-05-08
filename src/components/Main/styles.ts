import styled, { css } from 'styled-components'

import { Home, MessageCircle, Image, LogIn } from '../../styles/icons'
import Button from '../Button'

export const Container = styled.div`
  display: none;

  /* Header for Laptop */
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;

    /* Size to Laptop of 1024px */
    width: min(900px, 100%);
  }
`

export const Header = styled.div`
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: left;

  padding: 8px 13px;
`

export const Link = styled.div`
  display: flex;
  justify-items: left;
  align-items: center;
`

export const HeaderButton = styled.button`
  display: flex;

  background: transparent;

  :nth-child(n + 2) {
    margin-left: 15px;
  }

  span {
    display: inline;
    margin-left: 3px;
    font-weight: bold;
    font-size: 18px;

    padding-bottom: 1px;
  }

  cursor: pointer;
  transition: 0.2s;

  :hover {
    span,
    svg {
      color: ${props => props.theme.colors.primary_light_hover};
      stroke: ${props => props.theme.colors.primary_light_hover};
    }
  }
`

const iconCSS = css`
  width: 24px;
  height: 24px;
  stroke-width: 2.5px;
`

export const HomeIcon = styled(Home)`
  ${iconCSS}
`

export const MessageIcon = styled(MessageCircle)`
  ${iconCSS}
`

export const GalleryIcon = styled(Image)`
  ${iconCSS}
`

export const LoginButton = styled(Button)`
  margin-left: 20px;
`

export const LogInIcon = styled(LogIn)`
  ${iconCSS}
`

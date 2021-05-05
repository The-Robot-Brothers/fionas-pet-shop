import styled from 'styled-components'
import { LogIn, MessageCircle, Image } from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* Size Laptop of 1024px */
  width: min(768px, 100%);

  /* Size Tablet of 768px */
  @media (min-width: 768px) {
    border-left: 1px solid ${props => props.theme.colors.outline};
    border-right: 1px solid ${props => props.theme.colors.outline};
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
  border-bottom: 1px solid ${props => props.theme.colors.outline};
`

export const Link = styled.div`
  display: flex;
  justify-items: left;
`

export const HeaderButton = styled.button`
  display: flex;

  :nth-child(n + 2) {
    margin-left: 10px;
  }

  span {
    display: inline;
    margin-left: 10px;
    font-weight: bold;
    font-size: 18px;

    padding-bottom: 1px;
  }
`

export const MessageIcon = styled(MessageCircle)`
  display: none;

  @media (max-width: 768px) {
    display: inline;

    width: 24px;
    height: 24px;
    stroke-width: 2px;

    margin-left: 2px;
  }
`

export const GalleryIcon = styled(Image)`
  display: none;

  @media (max-width: 768px) {
    display: inline;

    width: 24px;
    height: 24px;
    stroke-width: 2px;

    margin-left: 2px;
  }
`

export const Button = styled.button`
  display: flex;

  margin-left: 20px;

  span {
    display: inline;
    margin-right: 10px;
    font-weight: bold;
    font-size: 18px;

    padding-bottom: 2px;
  }
`

export const LogInIcon = styled(LogIn)`
  width: 24px;
  height: 24px;
  stroke-width: 2px;
`

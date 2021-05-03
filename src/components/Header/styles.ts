import styled from 'styled-components'
import { LogIn } from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 60px;
  overflow: hidden;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  max-width: 1024px;

  padding: 0 10px;
`

export const Link = styled.div`
  a {
    margin: 20px;

    font-size: 19px;
    font-weight: bold;
    color: ${props => props.theme.colors.text};

    text-decoration: none;
    transition: 0.2s;
  }
  a:hover {
    color: ${props => props.theme.colors.primary};
  }

  button {
    padding: 0 20px;
    height: 45px;
    margin: 0 20px;
    border-radius: 4px;
    background: transparent;

    font-size: 19px;
    font-weight: bold;

    border: 1px solid ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.text};

    cursor: pointer;
    transition: 0.2s;
  }
  button:hover {
    border-color: ${props => props.theme.colors.login};
    color: ${props => props.theme.colors.login};
    background: ${props => props.theme.colors.login_dark_hover};
  }
`

export const LogInIcon = styled(LogIn)`
  width: 24px;
  height: 24px;
  stroke-width: 2px;

  margin-left: 2px;
`

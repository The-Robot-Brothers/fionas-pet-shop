import styled, { css } from 'styled-components'

import { LogIn } from '../../styles/icons'

interface Props {
  outlined?: boolean
}

export const ButtonLogin = styled.div<Props>`
  margin-left: 20px;
  button {
    background: ${props =>
      props.outlined ? 'transparent' : props.theme.colors.primary};
    color: ${props =>
      props.outlined ? props.theme.colors.primary : props.theme.colors.text};
    border: none;
    ${props =>
      props.outlined ? '1px solid' + props.theme.colors.primary : 'none'};
    padding: 13px 16px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    outline: 0;

    span {
      margin-right: 3px;
    }

    &:hover {
      background: ${props =>
        props.outlined
          ? props.theme.colors.primary_dark_hover
          : props.theme.colors.primary_light_hover};
    }
  }
`

const iconCSS = css`
  width: 24px;
  height: 24px;
  stroke-width: 2.5px;
`

export const LogInIcon = styled(LogIn)`
  ${iconCSS}
`

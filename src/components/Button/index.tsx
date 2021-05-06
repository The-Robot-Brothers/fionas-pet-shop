import styled from 'styled-components'

interface Props {
  outlined?: boolean
}

export default styled.button<Props>`
  background: ${props =>
    props.outlined ? 'transparent' : props.theme.colors.primary};
  color: ${props =>
    props.outlined ? props.theme.colors.primary : props.theme.colors.text};
  border: ${props =>
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
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.colors.outline};
    margin-bottom: 3px;

    text-decoration: none;
  }

  a:hover {
    color: ${props => props.theme.colors.primary_light_hover};
  }
`

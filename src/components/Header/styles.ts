import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  height: 60px;
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
    font-size: 20px;

    margin: 20px;
    color: ${props => props.theme.colors.text};

    text-decoration: none;
    transition: 0.2s;
  }
  a:hover {
    color: ${props => props.theme.colors.primary};
  }
  button {
    font-size: 20px;
    height: 45px;

    margin: 0 20px;
    padding: 0 20px;
    border-radius: 4px;
    color: ${props => props.theme.colors.text};
    border: 1px solid ${props => props.theme.colors.text};
    background: transparent;

    cursor: pointer;
    transition: 0.2s;
  }
  button:hover {
    border-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.green};
  }
`

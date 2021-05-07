import styled from 'styled-components'

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: min(256px, 100%);

    margin-top: 69.5px;

    padding: 0 15px;
  }
`

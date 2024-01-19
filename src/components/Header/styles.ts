import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
`

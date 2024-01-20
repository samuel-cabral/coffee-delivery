import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors.background};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;

    user-select: none;

    background: ${({ theme }) => theme.colors['purple-light']};
    color: ${({ theme }) => theme.colors['purple-dark']};

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    padding: 0.5rem;
    border-radius: 6px;
    font-weight: 400;
  }

  > a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};

    padding: 0.5rem;
    border-radius: 6px;
  }
`

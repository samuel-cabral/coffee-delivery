import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  height: 2.375rem;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors['base-button']};

  > button,
  > span {
    width: 1rem;
    height: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 2rem;
  }

  > button {
    border: 0;
    border-radius: 0.5rem;

    background: transparent;
    color: var(--blue);

    font-size: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

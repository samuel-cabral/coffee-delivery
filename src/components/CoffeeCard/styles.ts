import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  padding: 0 1.25rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  text-align: center;

  border-radius: 0.375rem 2.25rem;
  background: ${({ theme }) => theme.colors['base-card']};
`

export const CardCoffeeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -1.25rem;
  align-self: center;
`

export const CardTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 0.5rem;

    border-radius: 6.25rem;
    background: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};

    text-transform: uppercase;
    ${mixins.fonts.textXS}
  }
`

export const CardTitle = styled.h3`
  margin-top: 0.25rem;
  text-align: center;
  ${mixins.fonts.titleS}
`

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors['base-label']};
  text-align: center;
  ${mixins.fonts.textS}
`

export const CardBuy = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardPrice = styled.div`
  display: flex;
  align-items: first baseline;
  justify-content: first baseline;
  gap: 2px;

  span:first-child {
    color: ${({ theme }) => theme.colors['base-text']};
    ${mixins.fonts.textS}
  }

  span:last-child {
    color: ${({ theme }) => theme.colors['base-title']};
    ${mixins.fonts.titleM}
  }
`

export const CardActions = styled.div`
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > button {
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors['purple-dark']};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

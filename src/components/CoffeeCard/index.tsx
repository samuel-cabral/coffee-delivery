import { ShoppingCartSimple } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { QuantityInput } from '../Form/QuantityInput'
import {
  CardActions,
  CardBuy,
  CardCoffeeImage,
  CardContainer,
  CardDescription,
  CardPrice,
  CardTags,
  CardTitle,
} from './styles'

type CoffeeType = {
  id: string
  title: string
  tags: string[]
  description: string
  image: string
  price: number
}

interface CardProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CardProps) {
  const theme = useTheme()

  function handleQuantityChange(newQuantity: number) {
    console.log(newQuantity)
  }

  return (
    <CardContainer>
      <CardCoffeeImage src={coffee.image} alt={coffee.title} />

      <CardTags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CardTags>

      <CardTitle>{coffee.title}</CardTitle>

      <CardDescription>{coffee.description}</CardDescription>

      <CardBuy>
        <CardPrice>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </CardPrice>

        <CardActions>
          <QuantityInput quantity={1} onChange={handleQuantityChange} />

          <button type="button" aria-label="Adicionar ao carrinho">
            <ShoppingCartSimple
              size={22}
              weight="fill"
              color={theme.colors['base-card']}
            />
          </button>
        </CardActions>
      </CardBuy>
    </CardContainer>
  )
}

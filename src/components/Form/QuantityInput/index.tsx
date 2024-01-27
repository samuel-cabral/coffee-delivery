import { Minus, Plus } from '@phosphor-icons/react'
import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  onChange: (newQuantity: number) => void
}

export function QuantityInput({ quantity, onChange }: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <button
        type="button"
        aria-label="Diminuir quantidade"
        onClick={() => onChange(quantity - 1)}
      >
        <Minus size={14} />
      </button>

      <span>{quantity}</span>

      <button
        type="button"
        aria-label="Aumentar quantidade"
        onClick={() => onChange(quantity + 1)}
      >
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  )
}

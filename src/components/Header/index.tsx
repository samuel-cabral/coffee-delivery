import { Link } from 'react-router-dom'
import { Aside, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoImg from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <div className="container">
        <Link to="/">
          <img src={logoImg} alt="cup of coffee text coffee delivery" />
        </Link>

        <Aside>
          <div>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </div>

          <Link to={`cart`} aria-disabled={cart.length === 0}>
            <ShoppingCart size={22} weight="fill" />
            {cart.length > 0 ? <span>{cart.length}</span> : null}
          </Link>
        </Aside>
      </div>
    </HeaderContainer>
  )
}

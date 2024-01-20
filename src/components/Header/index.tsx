import { Link } from 'react-router-dom'
import { Aside, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoImg from '../../assets/logo.svg'

export function Header() {
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

          <Link to="/cart" title="Carrinho">
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </Aside>
      </div>
    </HeaderContainer>
  )
}

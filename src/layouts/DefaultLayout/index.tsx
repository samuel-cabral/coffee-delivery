import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { defaultTheme } from '../../styles/theme/default'

import { DefaultLayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer theme={defaultTheme}>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  )
}

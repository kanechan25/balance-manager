import React from 'react'
import Home from 'pages/Home'
import Balanager from './Balanager'
type TRoutes = {
  href: string
  id: string
  name: string
  element: React.ReactNode
}
export const ROUTES_PATH = Object.freeze({
  HOME: '/',
  BALANAGER: '/balanager',
})
export const routes: TRoutes[] = [
  {
    href: ROUTES_PATH.HOME,
    id: 'home',
    name: 'Home',
    element: <Home />,
  },
  {
    href: ROUTES_PATH.BALANAGER,
    id: 'balanager',
    name: 'Balanager',
    element: <Balanager />,
  },
]

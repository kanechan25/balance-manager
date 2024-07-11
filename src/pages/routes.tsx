import React from 'react'
import Home from 'pages/Home'
import Balanager from './Balanager'
type TRoutes = {
  href: string
  id: string
  name: string
  element: React.ReactNode
}
export const routes: TRoutes[] = [
  {
    href: '/',
    id: 'home',
    name: 'Home',
    element: <Home />,
  },
  {
    href: '/balanager',
    id: 'balanager',
    name: 'Balanager',
    element: <Balanager />,
  },
  // TODO: Add more: 1 tab `list`: to add my list addresses or one more an address into my list
  // TODO: Add more: 2 option:
  // 1. No Connect wallet: Free: Store that data by yourself: save the data in your local storage (IndexDB) - we don't save anythings in my db.
  // But the data just only store in the laptop where you are storing.
  // 2. Connect wallet: 0.01E in root wallet (all the time 0.01E): We store the data for you (of course those data will be secured by us)

  // TODO: we support those chainId:
]

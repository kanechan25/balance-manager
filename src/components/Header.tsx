import React from 'react'
import { routes } from 'pages/routes'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  function getTabItemList() {
    const handleClick = (href: string) => {
      navigate(`${href}`)
    }
    return (
      <div className="flex gap-2">
        {routes?.map((route) => {
          return (
            <div key={route.id} style={{ display: 'flex', cursor: 'pointer' }}>
              <div onClick={() => handleClick(route.href)}>{route.name}</div>
            </div>
          )
        })}
      </div>
    )
  }
  return <div>{getTabItemList()}</div>
}

export default Header

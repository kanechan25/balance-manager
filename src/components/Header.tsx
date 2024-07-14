import React from 'react'
import { routes, ROUTES_PATH } from 'pages/routes'
import { useNavigate } from 'react-router-dom'
import ToggleThemeButton from 'components/Button/ToggleThemeButton'
import icon from 'assets/images/favicon.svg'

const Header = () => {
  const navigate = useNavigate()
  const handleClick = (href: string) => {
    navigate(`${href}`)
  }

  return (
    <div className="flex fixed w-full py-2 px-6 justify-between items-center mb-10 bg-black z-50">
      {/* <div className="flex gap-2 items-center">
        {routes?.map((route) => {
          return (
            <div key={route.id} style={{ display: 'flex', cursor: 'pointer' }}>
              <div onClick={() => handleClick(route.href)}>{route.name}</div>
            </div>
          )
        })}
      </div> */}
      <div onClick={() => navigate(ROUTES_PATH.HOME)} className="w-10 h-10 cursor-pointer">
        <img className="" src={icon} alt="icon" />
      </div>
      <div className="flex gap-3 justify-center items-center">
        <div onClick={() => navigate(ROUTES_PATH.BALANAGER)} className="font-bold text-xl cursor-pointer">
          Balanager
        </div>
        <ToggleThemeButton />
      </div>
    </div>
  )
}

export default Header

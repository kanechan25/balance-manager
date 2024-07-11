import React from 'react'
import { routes } from 'pages/routes'
import { useNavigate } from 'react-router-dom'
import ToggleThemeButton from 'components/Button/ToggleThemeButton'
import icon from 'assets/images/favicon.svg'

const Header = () => {
  const navigate = useNavigate()
  const handleClick = (href: string) => {
    navigate(`${href}`)
  }

  return (
    <div className="flex w-full py-2 px-6 justify-between items-center mb-10">
      {/* <div className="flex gap-2 items-center">
        {routes?.map((route) => {
          return (
            <div key={route.id} style={{ display: 'flex', cursor: 'pointer' }}>
              <div onClick={() => handleClick(route.href)}>{route.name}</div>
            </div>
          )
        })}
      </div> */}
      <div onClick={() => navigate('/')} className="w-10 h-10 cursor-pointer">
        <img className="" src={icon} alt="icon" />
      </div>
      <div className="flex gap-3 justify-center items-center">
        <div onClick={() => navigate('/balanager')} className="font-bold text-xl cursor-pointer">
          Balanager
        </div>
        <ToggleThemeButton />
      </div>
    </div>
  )
}

export default Header

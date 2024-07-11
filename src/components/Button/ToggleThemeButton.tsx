import React, { useState } from 'react'
import useDarkMode from 'hooks/useDarkMode'
import lightBtn from 'assets/images/light-btn.svg'
import darkBtn from 'assets/images/dark-btn.svg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { setTheme } from '../../redux/appSlice'

const ToggleThemeButton: React.FC = () => {
  const { toggleTheme } = useDarkMode()
  const dispatch = useDispatch()

  const isDark = useSelector((state: RootState) => state.app.isDark)
  const handleToggleTheme = () => {
    toggleTheme()
    dispatch(setTheme(!isDark))
  }
  return (
    <button onClick={handleToggleTheme} className=" bg-gray-200 dark:bg-slate-400 rounded-md w-9 h-9 flex justify-center items-center">
      {!isDark ? <img className="" src={lightBtn} alt="light" /> : <img className="flex w-5 h-5" src={darkBtn} alt="dark" />}
    </button>
  )
}

export default ToggleThemeButton

import { useEffect } from 'react'

const useDarkMode = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return { toggleTheme }
}

export default useDarkMode

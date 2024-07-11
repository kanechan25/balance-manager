import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { routes } from 'pages/routes'
import Header from 'components/Header'
import useDarkMode from 'hooks/useDarkMode'

function App() {
  useDarkMode()
  return (
    <Provider store={store}>
      <div className="App bg-white">
        <Header />
        <div className="AppContainer">
          <Routes>
            {routes?.map((route) => <Route path={route.href} element={route.element} key={route.id} />)}
            <Route path="/*" element={<h1>NOT FOUND PAGE</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  )
}

export default App

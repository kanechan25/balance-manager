import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
const Balance = () => {
  const dispatch = useDispatch()
  const evmBalanceData = useSelector((state: RootState) => state.app.evmBalanceData)
  console.log('__evmBalanceData: ', evmBalanceData)
  return (
    <div>
      <h1>Balance PAGE</h1>
    </div>
  )
}

export default Balance

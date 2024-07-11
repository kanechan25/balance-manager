import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
const Balanager = () => {
  const dispatch = useDispatch()
  const evmBalanceData = useSelector((state: RootState) => state.app.evmBalanceData)
  const evmWallets = useSelector((state: RootState) => state.app.evm)
  console.log('__evmBalanceData: ', evmBalanceData)
  console.log('__evmWallets: ', evmWallets)
  return (
    <div>
      {evmWallets?.map((evmWallet) => {
        return <div key={evmWallet}>{evmWallet}</div>
      })}
      {evmWallets.length === 0 && <div>NO WALLET</div>}
    </div>
  )
}

export default Balanager

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import emptyIcon from 'assets/images/empty-box.png'

import { transformEVMBalanceData } from 'helper'
import EVMBalanager from 'components/Balanager/EVMBalanager'
import SOLBalanager from 'components/Balanager/SOLBalanager'

const Balanager = () => {
  const evmBalanceData = useSelector((state: RootState) => state.app.evmBalanceData)
  const solBalanceData = useSelector((state: RootState) => state.app.solBalanceData)
  const transformEVMData = transformEVMBalanceData(evmBalanceData)
  console.log('__transformEVMData: ', transformEVMData)
  return (
    <div className="w-full overflow-x-scroll p-4 flex flex-col gap-6">
      <EVMBalanager />
      <SOLBalanager />
      {transformEVMData.length === 0 && solBalanceData.length === 0 && (
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="font-bold">NO WALLET</div>
          <img src={emptyIcon} alt="" className="w-60" />
        </div>
      )}
    </div>
  )
}

export default Balanager

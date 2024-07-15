import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import emptyIcon from 'assets/images/empty-box.png'

import { transformEVMBalanceData, transformSolBalanceData } from 'helper'
import EVMBalanager from 'components/Balanager/EVMBalanager'
import SOLBalanager from 'components/Balanager/SOLBalanager'

const Balanager = () => {
  const evmBalanceData = useSelector((state: RootState) => state.app.evmBalanceData)
  const solBalanceData = useSelector((state: RootState) => state.app.solBalanceData)
  const transformEVMData = transformEVMBalanceData(evmBalanceData)
  const transformSOLData = transformSolBalanceData(solBalanceData)
  return (
    <div className="w-full ">
      {transformEVMData.length === 0 && transformSOLData.length === 0 ? (
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="font-bold">NO WALLET</div>
          <img src={emptyIcon} alt="" className="w-60" />
        </div>
      ) : (
        <div className="w-full p-4 flex flex-col gap-6">
          <EVMBalanager />
          <SOLBalanager />
        </div>
      )}
    </div>
  )
}

export default Balanager

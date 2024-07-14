import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import emptyIcon from 'assets/images/empty-box.png'
import { formatTokenNumDecimal } from 'helper/formatNumber'
import { CHAIN_ID_COLORS, chains } from 'constants/index'
import { shortenAddress, transformEVMBalanceData } from 'helper'
import bnbIcon from 'assets/icons/bnb.svg'

const Balanager = () => {
  const dispatch = useDispatch()
  const evmBalanceData = useSelector((state: RootState) => state.app.evmBalanceData)
  const transformEVMData = transformEVMBalanceData(evmBalanceData)
  const evmWallets = useSelector((state: RootState) => state.app.evm)
  console.log('__transformEVMData: ', transformEVMData)
  return (
    <div className="w-full overflow-x-scroll p-4 flex flex-col gap-6">
      {transformEVMData?.map((chainData) => {
        const borderColor = CHAIN_ID_COLORS[Number(chainData?.chainId)]
        const chainId = Number(chainData.chainId)
        return (
          <div style={{ border: `2px solid ${borderColor}` }} className={`rounded-xl p-4 `} key={chainData.chainId}>
            {chainData?.dataInChain?.map((accountBl, index) => {
              return (
                <div
                  key={accountBl?.accountAddress}
                  className={`${index !== 0 && `border-t border-dashed `} flex w-full gap-1 relative py-2`}
                >
                  <img src={chains[137].logo} alt="" className="w-6 h-6" />
                  <div className="w-20">{chainData.chainId}</div>
                  <div className="w-52">{shortenAddress(accountBl?.accountAddress, 10, 10)}</div>

                  <div className="total-market-value flex flex-col justify-between min-w-32">
                    <div>Total Market</div>
                    <div className="text-green-500 font-bold">${formatTokenNumDecimal(accountBl?.value?.marketValue, 4)}</div>
                  </div>
                  <div className="native-token min-w-36 flex flex-col">
                    <div>{accountBl?.nativeBalance?.symbol}</div>
                    <div>{formatTokenNumDecimal(accountBl?.nativeBalance?.balance, 8)}</div>
                    <div className="text-green-500">${formatTokenNumDecimal(accountBl?.nativeBalance?.value?.marketValue, 4)}</div>
                  </div>
                  <div className="erc20-token flex gap-2">
                    {accountBl?.tokenBalances?.map((token: any) => {
                      return (
                        <div className="min-w-44" key={token?.address}>
                          <div>{token?.symbol}</div>
                          <div>{formatTokenNumDecimal(token?.balance, 8)}</div>
                          <div className="text-green-500">${formatTokenNumDecimal(token?.value?.marketValue, 4)}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
      {transformEVMData.length === 0 && (
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="font-bold">NO WALLET</div>
          <img src={emptyIcon} alt="" className="w-60" />
        </div>
      )}
    </div>
  )
}

export default Balanager

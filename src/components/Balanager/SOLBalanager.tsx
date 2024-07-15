import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { copyToClipboard, shortenAddress, transformSolBalanceData } from 'helper'
import { formatTokenNumDecimal } from 'helper/formatNumber'
import { CHAIN_ID_COLORS, chains } from 'constants/index'
import { LightTooltip } from 'components/Tooltips'

const SOLBalanager = () => {
  const solBalanceData = useSelector((state: RootState) => state.app.solBalanceData)
  const transformSOLData = transformSolBalanceData(solBalanceData)
  const borderColor = CHAIN_ID_COLORS[0]
  // console.log('__ transformSOLData: ', transformSOLData)
  const handleCopyArr = (addr: string) => {
    copyToClipboard(addr)
  }

  return (
    <div style={{ border: `2px solid ${borderColor}` }} className={`rounded-xl p-4`}>
      {transformSOLData?.map((chainData, index) => {
        return (
          <div key={chainData.addrSol} className={`${index !== 0 && `border-t border-dashed `} flex w-full gap-1 relative py-2`}>
            <div className="w-28  flex gap-2">
              <img src={chains[0].logo} alt="" className="w-6 h-6" />
              <div>{chains[0].displayName}</div>
            </div>
            <LightTooltip title="Click to Copy!" followCursor>
              <div onClick={() => handleCopyArr(chainData?.addrSol)} className="w-52 h-fit cursor-pointer">
                {shortenAddress(chainData?.addrSol, 10, 10)}
              </div>
            </LightTooltip>
            <div className="total-market-value flex flex-col justify-between min-w-32">
              <div>Total Market</div>
              <div className="text-green-500 text-lg font-bold">${formatTokenNumDecimal(chainData?.dataInChain?.value?.total, 4)}</div>
            </div>
            <div className="spl-token flex gap-2">
              {chainData?.dataInChain?.tokens.map((token: any, index: number) => {
                return (
                  <div className="min-w-44" key={token?.name}>
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
}

export default SOLBalanager

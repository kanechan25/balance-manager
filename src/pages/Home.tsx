import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { useNavigate } from 'react-router-dom'
import { addEVMWallet, addSOLWallet, setEVMBalances } from '../redux/appSlice'
import axios from 'axios'
import MultiSelect from 'components/MultiSelect'
import { arrayToString, removeDuplicateAddresses, stringToArray } from 'helper'
import { ROUTES_PATH } from 'pages/routes'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentSupportChainId = useSelector((state: RootState) => state.app.supportChainId)
  // console.log('__currentSupportChainId_redux: ', currentSupportChainId)
  const evmWallets = useSelector((state: RootState) => state.app.evm)
  const solWallets = useSelector((state: RootState) => state.app.sol)

  const [evmInput, setEvmInput] = useState<string>(arrayToString(evmWallets))
  const evmPlaceholder = '0xD2F0B248c77C0bc7D78379Ca628833cAB929EC68, 0xd89782F11a141da8523BFBe5A2a77375aFFA06e0, ...'
  const [solInput, setSolInput] = useState<string>(arrayToString(solWallets))
  const solPlaceholder = '6aPGSriG4XfYincvptujaUZ9Rgx1V24EhZYW9G7cqyAU, CV7qFEaNjyoZFdX9PMtpzTPBTr8GFCbCzwjokBS2uDEw, ...'

  const isDisable = !!evmInput || !!solInput
  const handleCheckBalance = async () => {
    if (!evmInput && !solInput) {
      return
    }
    if (evmInput) {
      const addressArray = stringToArray(evmInput)
      addressArray.forEach((address) => {
        dispatch(addEVMWallet(address))
      })
      const promises = addressArray.flatMap((address) =>
        currentSupportChainId.map(async (chainId) => {
          const url = `https://account.api.cx.metamask.io/accounts/${address}?chainId=${chainId}&includePrices=true`
          try {
            const response = await axios.get(url)
            return { address, chainId: chainId.toString(), balanceData: response.data }
          } catch (error) {
            throw error
          }
        }),
      )
      const results = await Promise.allSettled(promises)
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          console.log('__result__', result)
          dispatch(setEVMBalances(result.value))
        } else {
          console.error('Failed to fetch balance for:', result.reason)
        }
      })
    }
    if (solInput) {
      const addressArray = stringToArray(solInput)
      addressArray.forEach((address) => {
        dispatch(addSOLWallet(address))
      })
    }
    if (evmInput || solInput) {
      navigate(ROUTES_PATH.BALANAGER)
    }
  }
  const handleEVMInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const valueInput = e.target.value
    const validatedInput = removeDuplicateAddresses(valueInput)
    setEvmInput(validatedInput)
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col gap-8 bg-black p-5 rounded-xl">
        <div className="w-full flex flex-col gap-2">
          <div>Support EVM Chains: </div>
          <MultiSelect />
        </div>
        <div className="w-full flex flex-col gap-2">
          <div>Paste all EVM wallet here (separated by commas `,`)</div>
          <textarea
            value={evmInput}
            className="w-full border border-gray-950 rounded-lg p-2 text-black"
            placeholder={evmPlaceholder}
            onChange={(e) => handleEVMInputChange(e)}
          />
        </div>
      </div>
      <div className="w-full mt-10 flex flex-col gap-2 bg-black p-5 rounded-xl">
        <div>Paste all SOL wallet here (separated by commas `,`)</div>
        <textarea
          value={solInput}
          className="w-full border border-gray-950 rounded-lg p-2 text-black"
          placeholder={solPlaceholder}
          onChange={(e) => setSolInput(e.target.value)}
        />
      </div>
      <button
        disabled={!isDisable}
        onClick={handleCheckBalance}
        className={`border border-gray-950 rounded-lg p-2 mt-10 ${!isDisable ? 'bg-slate-500' : 'bg-green-500'}`}
      >
        Check balance
      </button>
    </div>
  )
}

export default Home

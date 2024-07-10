import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addEVMWallet, addSOLWallet, setEVMBalances } from '../redux/appSlice'
import axios from 'axios'
import MultiSelect from 'components/MultiSelect'
import { RootState } from 'redux/store'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentSupportChainId = useSelector((state: RootState) => state.app.supportChainId)
  // console.log('__currentSupportChainId_redux: ', currentSupportChainId)
  // const evmWallets = useSelector((state: RootState) => state.app.evm)
  // const solWallets = useSelector((state: RootState) => state.app.sol)

  const [evmInput, setEvmInput] = useState<string>('')
  const evmPlaceholder = '0xD2F0B248c77C0bc7D78379Ca628833cAB929EC68, 0xd89782F11a141da8523BFBe5A2a77375aFFA06e0, ...'
  const [solInput, setSolInput] = useState<string>('')
  const solPlaceholder = '6aPGSriG4XfYincvptujaUZ9Rgx1V24EhZYW9G7cqyAU, CV7qFEaNjyoZFdX9PMtpzTPBTr8GFCbCzwjokBS2uDEw, ...'

  const isDisable = !!evmInput || !!solInput
  const handleCheckBalance = async () => {
    if (!evmInput && !solInput) {
      return
    }
    if (evmInput) {
      const sanitizedEvmInput = evmInput.trim().replace(/\s+/g, '').replace(/,$/, '')
      const addressArray = sanitizedEvmInput.split(',').filter((address) => address !== '')
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
      const sanitizedSolInput = solInput.replace(/\s+/g, '')
      const addressArray = sanitizedSolInput.split(',').map((address) => address.trim())
      addressArray.forEach((address) => {
        dispatch(addSOLWallet(address))
      })
    }
    // ;(evmInput || solInput) && navigate('/balance')
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="font-bold text-2xl">Balance Manager</div>
      <div className="w-full">
        <div>Support EVM Chains: </div>
        <div className="w-full mb-4">
          <MultiSelect />
        </div>
        <div>Paste all EVM wallet here (separated by commas `,`)</div>
        <textarea
          value={evmInput}
          className="w-full border border-gray-950 rounded-lg p-2"
          placeholder={evmPlaceholder}
          onChange={(e) => setEvmInput(e.target.value)}
        />
      </div>
      <div className="w-full mt-4">
        <div>Paste all SOL wallet here (separated by commas `,`)</div>
        <textarea
          value={solInput}
          className="w-full border border-gray-950 rounded-lg p-2"
          placeholder={solPlaceholder}
          onChange={(e) => setSolInput(e.target.value)}
        />
      </div>
      <button
        disabled={!isDisable}
        onClick={handleCheckBalance}
        className={`border border-gray-950 rounded-lg p-2 mt-4 ${!isDisable ? 'bg-slate-500' : 'bg-green-500'}`}
      >
        Check balance
      </button>
    </div>
  )
}

export default Home

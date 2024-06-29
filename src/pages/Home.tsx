import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from 'redux/store'
import { addEVMWallet, addSOLWallet } from '../redux/appSlice'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const evmWallets = useSelector((state: RootState) => state.app.evm)
  // const solWallets = useSelector((state: RootState) => state.app.sol)

  const [evmInput, setEvmInput] = useState<string>('')
  const evmPlaceholder = '0xD2F0B248c77C0bc7D78379Ca628833cAB929EC68, 0xd89782F11a141da8523BFBe5A2a77375aFFA06e0, ...'
  const [solInput, setSolInput] = useState<string>('')
  const solPlaceholder = '6aPGSriG4XfYincvptujaUZ9Rgx1V24EhZYW9G7cqyAU, CV7qFEaNjyoZFdX9PMtpzTPBTr8GFCbCzwjokBS2uDEw, ...'

  const isDisable = !!evmInput || !!solInput
  const handleCheckBalance = () => {
    if (evmInput) {
      const addressArray = evmInput.split(',').map((address) => address.trim())
      addressArray.forEach((address) => {
        dispatch(addEVMWallet(address))
      })
    }
    if (solInput) {
      const addressArray = solInput.split(',').map((address) => address.trim())
      addressArray.forEach((address) => {
        dispatch(addSOLWallet(address))
      })
    }
    ;(evmInput || solInput) && navigate('/balance')
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="font-bold text-2xl">Balance Manager</div>
      <div className="w-full">
        <div>Paste all EVM wallet here (separated by commas `,`)</div>
        <div>We support: </div>
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

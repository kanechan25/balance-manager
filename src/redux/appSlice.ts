import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IWalletSlice {
  evm: string[]
  sol: string[]
  evmBalanceData: Record<string, any>
  solBalanceData: Record<string, any>
}
const initialState: IWalletSlice = {
  evm: [],
  sol: [],
  evmBalanceData: {},
  solBalanceData: {},
}
export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    addEVMWallet(state, action: PayloadAction<string>) {
      state.evm.push(action.payload)
    },
    removeAllEVMWallet(state, action) {
      state.evm = []
    },
    setEVMBalances(state, action: PayloadAction<{ chainId: string | number; address: string; balanceData: any }>) {
      const { chainId, address, balanceData } = action.payload
      if (!state.evmBalanceData[chainId]) {
        state.evmBalanceData[chainId] = {}
      }
      state.evmBalanceData[chainId][address] = balanceData
    },
    addSOLWallet(state, action: PayloadAction<string>) {
      state.sol.push(action.payload)
    },
    removeAllSOLWallet(state, action) {
      state.sol = []
    },
  },
})

export const { addEVMWallet, removeAllEVMWallet, addSOLWallet, removeAllSOLWallet, setEVMBalances } = appSlice.actions

export default appSlice.reducer

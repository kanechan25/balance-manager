import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { supportChains } from 'constants/index'
import { IWalletSlice, OptionChains } from 'types'

const initialState: IWalletSlice = {
  evm: [],
  sol: [],
  evmBalanceData: {},
  solBalanceData: {},
  supportChains: [supportChains[0]],
  supportChainId: [1],
  isDark: true,
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
    setSupportChains(state, action: PayloadAction<OptionChains[]>) {
      state.supportChains = action.payload
    },
    setSupportChainId(state, action: PayloadAction<number[]>) {
      state.supportChainId = action.payload
    },
    setTheme(state, action: PayloadAction<boolean>) {
      state.isDark = action.payload
    },
  },
})

export const {
  addEVMWallet,
  removeAllEVMWallet,
  addSOLWallet,
  removeAllSOLWallet,
  setTheme,
  setEVMBalances,
  setSupportChainId,
  setSupportChains,
} = appSlice.actions

export default appSlice.reducer

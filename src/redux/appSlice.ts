import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IWalletSlice {
  evm: string[]
  sol: string[]
}
const initialState: IWalletSlice = {
  evm: [],
  sol: [],
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
    addSOLWallet(state, action: PayloadAction<string>) {
      state.sol.push(action.payload)
    },
    removeAllSOLWallet(state, action) {
      state.sol = []
    },
  },
})

export const { addEVMWallet, removeAllEVMWallet, addSOLWallet, removeAllSOLWallet } = appSlice.actions

export default appSlice.reducer

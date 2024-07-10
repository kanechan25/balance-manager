export interface OptionChains {
  label: string
  value: string
}
export interface IWalletSlice {
  evm: string[]
  sol: string[]
  evmBalanceData: Record<string, any>
  solBalanceData: Record<string, any>
  supportChains: OptionChains[]
  supportChainId: number[]
}

export interface OptionChains {
  label: string
  value: number
}
export interface IWalletSlice {
  evm: string[]
  sol: string[]
  evmBalanceData: Record<string, any>
  solBalanceData: Record<string, any>
  supportChains: OptionChains[]
  supportChainId: number[]
  isDark: boolean
}

export interface IWalletData {
  chainId: string
  dataInChain: any[]
}
export interface ISolBalanceData {
  addrSol: string
  dataInChain: any
}
export interface IChainConfig {
  chainId: string
  displayName: string
  rpcTarget: string
  blockExplorerUrl: string
  decimals: number
  ticker: string
  tickerName: string
  logo: string
  network: string
  networkId: number
}

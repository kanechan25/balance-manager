import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useEVMWalletBalances = (params: { walletAddress: string; chain: string }) => {
  return useQuery(
    [`${params.chain}`, params],
    (): Promise<any> => {
      return axios.get(`https://account.api.cx.metamask.io/accounts/${params.walletAddress}?chainId=${params.chain}&includePrices=true`)
    },
    {
      staleTime: Infinity,
      enabled: !!params.walletAddress,
    },
  )
}
export const useSOLWalletBalances = (walletAddress: string) => {
  return useQuery(
    [`${walletAddress}`],
    (): Promise<any> => {
      return axios.get(`https://wallet-api.solflare.com/v3/portfolio/tokens/${walletAddress}?network=mainnet&currency=USD`)
    },
    {
      staleTime: Infinity,
      enabled: !!walletAddress,
    },
  )
}

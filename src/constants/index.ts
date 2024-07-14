import { IChainConfig, OptionChains } from 'types'
import ethereumIcon from 'assets/icons/ethereum.svg'
import baseIcon from 'assets/icons/base.png'
import bnbIcon from 'assets/icons/bnb.svg'
import polygonIcon from 'assets/icons/polygon.svg'
import solanaIcon from 'assets/icons/solana.svg'
import opIcon from 'assets/icons/op.svg'
import arbitrumIcon from 'assets/icons/arbitrum.svg'
import avaxIcon from 'assets/icons/op.svg'

export const CHAIN_KEYS: Record<string, string> = Object.freeze({
  ETHEREUM: 'Ethereum',
  OP: 'Optimism',
  BNB: 'BNB',
  POLYGON: 'Polygon',
  BASE: 'Base',
  ARBITRUM: 'Arbitrum One',
  AVAX: 'Avalanche',
})
export const CHAIN_VALUE_KEYS: Record<string, string> = Object.freeze({
  ETHEREUM: 'evm',
  OP: 'op',
  BNB: 'bnb',
  POLYGON: 'polygon',
  BASE: 'base',
  ARBITRUM: 'arbitrum',
  AVAX: 'avax',
})
export const CHAIN_ID_KEYS: Record<string, number> = {
  ETHEREUM: 1,
  OP: 10,
  BNB: 56,
  POLYGON: 137,
  BASE: 8453,
  ARBITRUM: 42161,
  AVAX: 43114,
}
export const CHAIN_ID_COLORS: Record<number, string> = {
  1: '#6781eb',
  10: '#ff182a',
  56: '#f2ba21',
  137: '#874ce7',
  8453: '#0f57fd',
  42161: '#27384d',
  43114: '#e74948',
}
export const SUPPORT_CHAINS = [
  CHAIN_ID_KEYS.ETHEREUM,
  CHAIN_ID_KEYS.OP,
  CHAIN_ID_KEYS.BNB,
  CHAIN_ID_KEYS.POLYGON,
  CHAIN_ID_KEYS.BASE,
  CHAIN_ID_KEYS.ARBITRUM,
  CHAIN_ID_KEYS.AVAX,
]

export const supportChains: OptionChains[] = [
  { label: CHAIN_KEYS.ETHEREUM, value: CHAIN_VALUE_KEYS.ETHEREUM },
  { label: CHAIN_KEYS.OP, value: CHAIN_VALUE_KEYS.OP },
  { label: CHAIN_KEYS.BNB, value: CHAIN_VALUE_KEYS.BNB },
  { label: CHAIN_KEYS.POLYGON, value: CHAIN_VALUE_KEYS.POLYGON },
  { label: CHAIN_KEYS.BASE, value: CHAIN_VALUE_KEYS.BASE },
  { label: CHAIN_KEYS.ARBITRUM, value: CHAIN_VALUE_KEYS.ARBITRUM },
  { label: CHAIN_KEYS.AVAX, value: CHAIN_VALUE_KEYS.AVAX },
]
export const chains: {
  [key: number]: IChainConfig
} = {
  [CHAIN_ID_KEYS.ETHEREUM]: {
    chainId: '0x1',
    networkId: 1,
    network: CHAIN_VALUE_KEYS.ETHEREUM,
    displayName: CHAIN_KEYS.ETHEREUM,
    // rpcTarget: 'https://rpc.ankr.com/eth',
    rpcTarget: 'https://eth-mainnet.g.alchemy.com/v2/DyedBfeTLbm3QprjU2qg4PPuezn0mtU8',
    blockExplorerUrl: 'https://etherscan.io',
    decimals: 18,
    ticker: 'ETH',
    tickerName: 'Ethereum',
    logo: ethereumIcon,
  },
  [CHAIN_ID_KEYS.OP]: {
    chainId: '0xa', // hex of 10
    networkId: 10,
    network: CHAIN_VALUE_KEYS.OP,
    displayName: CHAIN_KEYS.OP,
    rpcTarget: 'https://optimism.llamarpc.com',
    blockExplorerUrl: 'https://optimistic.etherscan.io',
    decimals: 18,
    ticker: 'ETH',
    tickerName: 'Ethereum',
    logo: opIcon,
  },
  [CHAIN_ID_KEYS.BNB]: {
    chainId: '0x38', // hex of 56
    networkId: 56,
    network: CHAIN_VALUE_KEYS.BNB,
    displayName: CHAIN_KEYS.BNB,
    rpcTarget: 'https://binance.llamarpc.com',
    blockExplorerUrl: 'https://bscscan.com',
    decimals: 18,
    ticker: 'BNB',
    tickerName: 'BNB',
    logo: bnbIcon,
  },
  [CHAIN_ID_KEYS.POLYGON]: {
    chainId: '0x89', // hex of 137, polygon mainnet
    networkId: 137,
    network: CHAIN_VALUE_KEYS.POLYGON,
    displayName: CHAIN_KEYS.POLYGON,
    rpcTarget: 'https://rpc.ankr.com/polygon',
    blockExplorerUrl: 'https://polygonscan.com',
    decimals: 18,
    ticker: 'MATIC',
    tickerName: 'Matic',
    logo: polygonIcon,
  },
  [CHAIN_ID_KEYS.BASE]: {
    chainId: '0x2105', // hex of 8453
    networkId: 8453,
    network: CHAIN_VALUE_KEYS.BASE,
    displayName: CHAIN_KEYS.BASE,
    rpcTarget: 'https://mainnet.base.org',
    blockExplorerUrl: 'https://explorer.base.org',
    decimals: 18,
    ticker: 'ETH',
    tickerName: 'ETH',
    logo: baseIcon,
  },
  [CHAIN_ID_KEYS.ARBITRUM]: {
    chainId: '0xa4b1', // hex of 42161
    networkId: 42161,
    network: CHAIN_VALUE_KEYS.ARBITRUM,
    displayName: CHAIN_KEYS.ARBITRUM,
    rpcTarget: 'https://arbitrum.llamarpc.com',
    blockExplorerUrl: 'https://arbiscan.io',
    decimals: 18,
    ticker: 'ETH',
    tickerName: 'ETH',
    logo: arbitrumIcon,
  },
  [CHAIN_ID_KEYS.AVAX]: {
    chainId: '0xa86a', // hex of 43114
    networkId: 43114,
    network: CHAIN_VALUE_KEYS.AVAX,
    displayName: CHAIN_KEYS.AVAX,
    rpcTarget: 'https://api.avax.network/ext/bc/C/rpc',
    blockExplorerUrl: 'https://snowscan.xyz',
    decimals: 18,
    ticker: 'AVAX',
    tickerName: 'Avalanche',
    logo: arbitrumIcon,
  },
}

// [CHAIN_ID_KEYS.SOLANA]: {
//   chainId: '0x3', //0x7EA
//   // rpcTarget: 'https://solana-devnet.g.alchemy.com/v2/BJodaiRkcsHJzcaTbJxylVbv7hZSJaOo',
//   rpcTarget: 'https://solana-mainnet.g.alchemy.com/v2/bkNf5RJfn6MHdDcdlY8qm60rS_qmtLJZ',
//   displayName: 'Solana',
//   blockExplorerUrl: 'https://explorer.solana.com/',
//   decimals: 9,
//   ticker: 'SOL',
//   tickerName: 'Solana',
//   logo: solanaIcon,
//   network: 'solana',
//   networkId: 2026,
// },

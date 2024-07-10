import { OptionChains } from 'types'

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
  [CHAIN_KEYS.ETHEREUM]: 1,
  [CHAIN_KEYS.OP]: 10,
  [CHAIN_KEYS.BNB]: 56,
  [CHAIN_KEYS.POLYGON]: 137,
  [CHAIN_KEYS.BASE]: 8453,
  [CHAIN_KEYS.ARBITRUM]: 42161,
  [CHAIN_KEYS.AVAX]: 43114,
}
export const SUPPORT_CHAINS = [
  CHAIN_ID_KEYS[CHAIN_KEYS.ETHEREUM],
  CHAIN_ID_KEYS[CHAIN_KEYS.OP],
  CHAIN_ID_KEYS[CHAIN_KEYS.BNB],
  CHAIN_ID_KEYS[CHAIN_KEYS.POLYGON],
  CHAIN_ID_KEYS[CHAIN_KEYS.BASE],
  CHAIN_ID_KEYS[CHAIN_KEYS.ARBITRUM],
  CHAIN_ID_KEYS[CHAIN_KEYS.AVAX],
]
// TODO: insert SUPPORT_CHAINS as options
export const supportChains: OptionChains[] = [
  { label: CHAIN_KEYS.ETHEREUM, value: CHAIN_VALUE_KEYS.ETHEREUM },
  { label: CHAIN_KEYS.OP, value: CHAIN_VALUE_KEYS.OP },
  { label: CHAIN_KEYS.BNB, value: CHAIN_VALUE_KEYS.BNB },
  { label: CHAIN_KEYS.POLYGON, value: CHAIN_VALUE_KEYS.POLYGON },
  { label: CHAIN_KEYS.BASE, value: CHAIN_VALUE_KEYS.BASE },
  { label: CHAIN_KEYS.ARBITRUM, value: CHAIN_VALUE_KEYS.ARBITRUM },
  { label: CHAIN_KEYS.AVAX, value: CHAIN_VALUE_KEYS.AVAX },
]

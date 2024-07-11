import { CHAIN_KEYS, CHAIN_ID_KEYS, CHAIN_VALUE_KEYS } from 'constants/index'

export const findChainIdByKeyValue = (valueKey: string): number | undefined => {
  const foundKey = Object.keys(CHAIN_VALUE_KEYS).find((key) => CHAIN_VALUE_KEYS[key] === valueKey)

  return foundKey ? CHAIN_ID_KEYS[CHAIN_KEYS[foundKey]] : undefined
}
export function arrayToString(evmWallets: string[]): string {
  if (!evmWallets) {
    return ''
  }
  return evmWallets.join(', ')
}
export function stringToArray(input: string): string[] {
  if (!input) {
    return []
  }
  const sanitizedInput = input.trim().replace(/\s+/g, '').replace(/,$/, '')
  const addressArray = sanitizedInput.split(',').filter((address) => address !== '')
  const uniqueAddressArray = Array.from(new Set(addressArray))
  return uniqueAddressArray
}

import { CHAIN_KEYS, CHAIN_ID_KEYS, CHAIN_VALUE_KEYS } from 'constants/index'

export const findChainIdByKeyValue = (valueKey: string): number | undefined => {
  const foundKey = Object.keys(CHAIN_VALUE_KEYS).find((key) => CHAIN_VALUE_KEYS[key] === valueKey)

  return foundKey ? CHAIN_ID_KEYS[CHAIN_KEYS[foundKey]] : undefined
}

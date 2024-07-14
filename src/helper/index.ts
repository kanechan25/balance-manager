import { CHAIN_KEYS, CHAIN_ID_KEYS, CHAIN_VALUE_KEYS } from 'constants/index'
import { IWalletData } from 'types'

export const findChainIdByKeyValue = (valueKey: string): number | undefined => {
  const foundKey = Object.keys(CHAIN_VALUE_KEYS).find((key) => CHAIN_VALUE_KEYS[key] === valueKey)

  return foundKey ? CHAIN_ID_KEYS[CHAIN_KEYS[foundKey]] : undefined
}
export function arrayToString(evmWallets: string[]): string {
  if (!evmWallets) {
    return ''
  }
  const arrString = evmWallets.join(', ')
  const validatedString = removeDuplicateAddresses(arrString)
  return validatedString
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

export function transformEVMBalanceData(evmBalanceData: Record<string, Record<string, any>>): IWalletData[] {
  return Object.entries(evmBalanceData).map(([chainId, accounts]) => ({
    chainId,
    dataInChain: Object.values(accounts).map((account) => ({
      ...account,
    })),
  }))
}
export const shortenAddress = (text: string | null | undefined, prefix: number, suffix: number) => {
  if (text) {
    const firstStrings = text.slice(0, prefix)
    const lastStrings = text.slice(-suffix)
    const formatString = firstStrings + '...' + lastStrings
    return formatString
  }
  return ''
}
export function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777216).toString(16)
  return '#' + randomColor.padStart(6, '0')
}
export function removeDuplicateAddresses(walletStrings: string): string {
  const walletArray = walletStrings.split(/\s*,\s*/)

  const uniqueWalletSet = new Set(walletArray)

  const uniqueWalletArray = Array.from(uniqueWalletSet)

  const uniqueWalletString = uniqueWalletArray.join(', ')

  return uniqueWalletString
}

export const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value)
}

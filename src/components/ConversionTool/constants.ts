import { appConfig } from '../../core/app-config.ts'

export const defaultCurrencies: [string, string] = [
  appConfig.currencyFrom,
  appConfig.currencyTo,
]
export const defaultAmount = 1

import type { CurrencyDTO } from '../model/currency.ts'

export const parseData = (data: CurrencyDTO[]) => {
  const parsedData = [...data]
  parsedData.sort((a, b) => a.name.localeCompare(b.name))
  return parsedData
}

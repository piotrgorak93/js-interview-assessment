import type { CurrencyDTO } from '../../model/currency.ts'

type CurrencyList = {
  currencyList: CurrencyDTO[]
}
export const CurrencyList = ({ currencyList }: CurrencyList) => {
  return (
    <select>
      {currencyList.map((currency) => (
        <option key={currency.id}>{currency.name}</option>
      ))}
    </select>
  )
}

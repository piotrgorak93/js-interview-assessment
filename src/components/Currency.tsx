import { CurrencyList } from './CurrencyList/CurrencyList.tsx'
import type { CurrencyDTO } from '../model/currency.ts'

type CurrencyProps = {
  currencyList: CurrencyDTO[]
}
export const Currency = ({ currencyList }: CurrencyProps) => (
  <div>
    <input />
    <CurrencyList currencyList={currencyList} />
  </div>
)

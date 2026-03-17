import { Currency } from './Currency.tsx'
import { useGetCurrencyList } from './CurrencyList/useGetCurrencyList.ts'
import { CurrencyErrorComponent } from './CurrencyErrorComponent.tsx'

export const ConversionTool = () => {
  const { data = [], error } = useGetCurrencyList()

  if (error) {
    return <CurrencyErrorComponent />
  }

  return (
    <>
      <Currency currencyList={data} />
      <Currency currencyList={data} />
    </>
  )
}

import { Currency } from './Currency/Currency.tsx'
import { useGetCurrencyList } from './CurrencyList/useGetCurrencyList.ts'
import { CurrencyErrorComponent } from './CurrencyErrorComponent.tsx'
import { Flex } from 'antd'
import { defaultCurrencies } from './constants.ts'
import { useState } from 'react'
import { parseData } from './parser.ts'

export const ConversionTool = () => {
  const { data = [], error } = useGetCurrencyList(parseData)
  const [[from, to], setSelectedCurrencies] = useState(defaultCurrencies)

  if (error) {
    return <CurrencyErrorComponent />
  }

  return (
    <Flex gap="medium" vertical style={{ width: '20%' }}>
      <Currency
        currencyList={data}
        value={from}
        onChange={(selectedCurrency) => {
          setSelectedCurrencies(([from, to]) => {
            if (to === selectedCurrency) {
              return [to, from]
            }
            return [selectedCurrency, to]
          })
        }}
      />
      <Currency
        currencyList={data}
        value={to}
        onChange={(selectedCurrency) => {
          setSelectedCurrencies(([from, to]) => {
            if (from === selectedCurrency) {
              return [to, from]
            }
            return [from, selectedCurrency]
          })
        }}
      />
    </Flex>
  )
}

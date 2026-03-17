import { CurrencyErrorComponent } from '../CurrencyErrorComponent.tsx'
import { Flex } from 'antd'
import { defaultCurrencies } from './constants.ts'
import { useState } from 'react'
import { useConvert } from './useConvert/useConvert.ts'
import { parseData } from './data-parser/data-parser.ts'
import { useGetCurrencyList } from './CurrencyList/useGetCurrencyList/useGetCurrencyList.ts'
import { Currency } from './Currency/Currency.tsx'
import { ConversionToolSkeleton } from './ConversionToolSkeleton.tsx'

export const ConversionTool = () => {
  const [[from, to], setSelectedCurrencies] = useState(defaultCurrencies)
  const [amount, setAmount] = useState(1)
  const {
    data: currencyList = [],
    error: currencyListError,
    isLoading: isCurrencyListLoading,
  } = useGetCurrencyList(parseData)

  const {
    data: conversion = {
      amount: 1,
      value: 0,
    },
    error: conversionError,
  } = useConvert(from, to, amount)

  if (isCurrencyListLoading) {
    return <ConversionToolSkeleton />
  }

  if (currencyListError || conversionError) {
    return <CurrencyErrorComponent />
  }

  const onAmountChange = (amount: number | null) => {
    if (amount) {
      setAmount(amount)
    }
  }

  return (
    <Flex gap="medium" vertical style={{ width: '20%' }}>
      <Currency
        currencyList={currencyList}
        selectedCurrency={from}
        disabled={isCurrencyListLoading}
        onCurrencyChange={(selectedCurrency) => {
          setSelectedCurrencies(([from, to]) => {
            if (to === selectedCurrency) {
              return [to, from]
            }
            return [selectedCurrency, to]
          })
        }}
        onAmountChange={onAmountChange}
        amount={conversion.amount}
        min={1}
      />
      <Currency
        currencyList={currencyList}
        selectedCurrency={to}
        disabled={true}
        onCurrencyChange={(selectedCurrency) => {
          setSelectedCurrencies(([from, to]) => {
            if (from === selectedCurrency) {
              return [to, from]
            }
            return [from, selectedCurrency]
          })
        }}
        onAmountChange={onAmountChange}
        amount={conversion.value}
      />
    </Flex>
  )
}

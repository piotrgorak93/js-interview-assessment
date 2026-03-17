import { afterEach, describe, expect, it, vi } from 'vitest'
import { ConversionTool } from './ConversionTool.tsx'
import { render } from 'vitest-browser-react'
import { userEvent } from 'vitest/browser'
import * as useConvertModule from './useConvert/useConvert.ts'
import type { CurrencyDTO } from '../../model/currency.ts'

const convertMock = vi.mocked(useConvertModule.useConvert)
const mockedCurrencyList: CurrencyDTO[] = [
  { id: 1, name: 'Złoty', short_code: 'PLN' },
  { id: 2, name: 'US Dollar', short_code: 'USD' },
  { id: 3, name: 'Euro', short_code: 'EUR' },
  { id: 4, name: 'Pound Sterling', short_code: 'GBP' },
]
vi.mock('./CurrencyList/useGetCurrencyList/useGetCurrencyList.ts', () => ({
  useGetCurrencyList: vi.fn(() => ({
    data: mockedCurrencyList,
  })),
}))

vi.mock('./useConvert/useConvert.ts', () => ({
  useConvert: vi.fn(() => ({
    data: {
      value: 4.23,
      amount: 1,
    },
  })),
}))

describe('ConversionTool component', () => {
  it('should call for conversion when currency FROM is changed', async () => {
    const { getByRole } = await render(<ConversionTool />)
    const [fromCurrencyInput] = getByRole('combobox').elements()

    await userEvent.type(fromCurrencyInput, 'EU')
    await userEvent.keyboard('{Enter}')

    expect(convertMock).toHaveBeenNthCalledWith(1, 'PLN', 'GBP', 1)
    expect(convertMock).toHaveBeenNthCalledWith(2, 'EUR', 'GBP', 1)
  })

  it('should call for conversion when currency TO is changed', async () => {
    const { getByRole } = await render(<ConversionTool />)
    const [, toCurrencyInput] = getByRole('combobox').elements()

    await userEvent.type(toCurrencyInput, 'EU')
    await userEvent.keyboard('{Enter}')

    expect(convertMock).toHaveBeenNthCalledWith(1, 'PLN', 'GBP', 1)
    expect(convertMock).toHaveBeenNthCalledWith(2, 'PLN', 'EUR', 1)
  })

  it('should call for conversion when amount FROM is changed', async () => {
    const { getByRole } = await render(<ConversionTool />)
    const [fromAmountInput] = getByRole('spinbutton').elements()

    await userEvent.fill(fromAmountInput, '20')
    await userEvent.keyboard('{Enter}')

    expect(convertMock).toHaveBeenNthCalledWith(1, 'PLN', 'GBP', 1)
    expect(convertMock).toHaveBeenNthCalledWith(2, 'PLN', 'GBP', 20)
  })

  it('should not call for conversion when amount is empty', async () => {
    const { getByRole } = await render(<ConversionTool />)
    const [fromAmountInput] = getByRole('spinbutton').elements()
    await userEvent.fill(fromAmountInput, '')

    expect(convertMock).toHaveBeenCalledExactlyOnceWith('PLN', 'GBP', 1)
  })

  it('should flip the currencies if TO currency is the same as FROM currency', async () => {
    const { getByRole } = await render(<ConversionTool />)
    const [, toCurrencyInput] = getByRole('combobox').elements()

    await userEvent.type(toCurrencyInput, 'Zł')
    await userEvent.keyboard('{Enter}')

    expect(convertMock).toHaveBeenNthCalledWith(1, 'PLN', 'GBP', 1)
    expect(convertMock).toHaveBeenNthCalledWith(2, 'GBP', 'PLN', 1)
  })

  it('should flip the currencies if FROM currency is the same as TO currency', async () => {
    const { getByRole } = await render(<ConversionTool />)
    const [fromCurrencyInput] = getByRole('combobox').elements()

    await userEvent.type(fromCurrencyInput, 'Pound')
    await userEvent.keyboard('{Enter}')

    expect(convertMock).toHaveBeenNthCalledWith(1, 'PLN', 'GBP', 1)
    expect(convertMock).toHaveBeenNthCalledWith(2, 'GBP', 'PLN', 1)
  })
})

afterEach(() => {
  convertMock.mockReset()
})

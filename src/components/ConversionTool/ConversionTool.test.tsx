import { describe, expect, it, vi } from 'vitest'
import { ConversionTool } from './ConversionTool.tsx'
import { render } from 'vitest-browser-react'
import { userEvent } from 'vitest/browser'
import * as useConvertModule from './useConvert/useConvert.ts'

const mock = vi.mocked(useConvertModule.useConvert)

vi.mock('./CurrencyList/useGetCurrencyList/useGetCurrencyList.ts', () => ({
  useGetCurrencyList: vi.fn(() => ({
    data: [
      { id: 1, name: 'Złoty', short_code: 'PLN' },
      { id: 2, name: 'US Dollar', short_code: 'USD' },
      { id: 3, name: 'Euro', short_code: 'EUR' },
      { id: 4, name: 'Pound Sterling', short_code: 'GBP' },
    ],
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

describe('Conversion Tool', () => {
  it('should display conversion', async () => {
    const { getByTitle } = await render(<ConversionTool />)
    await userEvent.type(getByTitle('Złoty'), 'EU')
    await userEvent.keyboard('{Enter}')

    expect(mock).toHaveBeenCalledWith([])
  })
})

import { describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { Currency } from './Currency.tsx'
import { userEvent } from 'vitest/browser'

describe('Currency component', () => {
  it('should call onAmountChange when FROM input is changed', async () => {
    const onAmountChange = vi.fn()
    const { getByRole } = await render(
      <Currency
        onAmountChange={onAmountChange}
        amount={10}
        onCurrencyChange={vi.fn()}
        disabled={false}
        selectedCurrency={'USD'}
        currencyList={[
          {
            short_code: 'PLN',
            name: 'Złoty',
            id: 1,
          },
          {
            short_code: 'USD',
            name: 'US Dollar',
            id: 2,
          },
          {
            short_code: 'GBP',
            name: 'Pound Sterling',
            id: 3,
          },
        ]}
      />
    )
    await userEvent.type(getByRole('spinbutton'), '2')

    expect(onAmountChange).toHaveBeenCalledWith(102)
  })
})

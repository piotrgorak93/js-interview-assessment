import { describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { Currency } from './Currency.tsx'
import { userEvent } from 'vitest/browser'

describe('Currency component', () => {
  it('should call onAmountChange when input is changed', async () => {
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

  it('should call onCurrencyChange when select is changed', async () => {
    const onCurrencyChange = vi.fn()
    const { getByRole } = await render(
      <Currency
        onAmountChange={vi.fn()}
        amount={10}
        onCurrencyChange={onCurrencyChange}
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
    await userEvent.type(getByRole('combobox'), 'Zł')
    await userEvent.keyboard('{Enter}')

    expect(onCurrencyChange).toHaveBeenCalledWith('PLN')
  })
  describe('with disabled prop', () => {
    it('should NOT change input', async () => {
      const onAmountChange = vi.fn()
      const { getByRole } = await render(
        <Currency
          onAmountChange={onAmountChange}
          amount={10}
          onCurrencyChange={vi.fn()}
          disabled={true}
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

      expect(onAmountChange).not.toHaveBeenCalled()
    })

    it('should NOT change select', async () => {
      const onCurrencyChange = vi.fn()
      const { getByRole } = await render(
        <Currency
          onAmountChange={vi.fn()}
          amount={10}
          onCurrencyChange={onCurrencyChange}
          disabled={true}
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
      await userEvent.type(getByRole('combobox'), 'Zł')
      await userEvent.keyboard('{Enter}')

      expect(onCurrencyChange).toHaveBeenCalledWith('PLN')
    })
  })
})

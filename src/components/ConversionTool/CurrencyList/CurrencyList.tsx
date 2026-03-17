import { Select } from 'antd'
import styles from './CurrencyList.module.css'
import type { CurrencyDTO } from '../../../model/currency.ts'

type CurrencyList = {
  currencyList: CurrencyDTO[]
  value: CurrencyDTO['short_code']
  onChange: (selectedCurrency: CurrencyDTO['short_code']) => void
}
export const CurrencyList = ({
  currencyList,
  value,
  onChange,
}: CurrencyList) => (
  <Select
    value={value}
    showSearch={{ optionFilterProp: 'label' }}
    options={currencyList.map(({ name, short_code }) => ({
      value: short_code,
      label: name,
      className: styles.select,
    }))}
    onChange={(value) => {
      onChange(value)
    }}
    className={styles.select}
  />
)

import { CurrencyList } from '../CurrencyList/CurrencyList.tsx'
import { Col, InputNumber, Row } from 'antd'
import styles from './Currency.module.css'
import type { CurrencyDTO } from '../../../model/currency.ts'

type CurrencyProps = {
  currencyList: CurrencyDTO[]
  selectedCurrency: CurrencyDTO['short_code']
  onCurrencyChange: (selectedCurrency: CurrencyDTO['short_code']) => void
  onAmountChange: (amount: number | null) => void
  amount: number
  min?: number
  disabled: boolean
}
export const Currency = ({
  currencyList,
  selectedCurrency,
  onCurrencyChange,
  onAmountChange,
  amount,
  min,
  disabled,
}: CurrencyProps) => (
  <Row gutter={16}>
    <Col span={12}>
      <InputNumber
        min={min}
        className={styles.input}
        onChange={onAmountChange}
        disabled={disabled}
        value={amount}
      />
    </Col>
    <Col span={12}>
      <CurrencyList
        currencyList={currencyList}
        value={selectedCurrency}
        onChange={onCurrencyChange}
      />
    </Col>
  </Row>
)

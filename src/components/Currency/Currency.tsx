import { CurrencyList } from '../CurrencyList/CurrencyList.tsx'
import type { CurrencyDTO } from '../../model/currency.ts'
import { Col, InputNumber, Row } from 'antd'
import styles from './Currency.module.css'

type CurrencyProps = {
  currencyList: CurrencyDTO[]
  value: CurrencyDTO['short_code']
  onChange: (selectedCurrency: CurrencyDTO['short_code']) => void
}
export const Currency = ({ currencyList, value, onChange }: CurrencyProps) => (
  <Row gutter={16}>
    <Col span={12}>
      <InputNumber min={1} className={styles.input} />
    </Col>
    <Col span={12}>
      <CurrencyList
        currencyList={currencyList}
        value={value}
        onChange={onChange}
      />
    </Col>
  </Row>
)

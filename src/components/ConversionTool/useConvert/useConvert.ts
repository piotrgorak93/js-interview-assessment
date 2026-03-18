import { useApiClient } from '../../../core/api-client/api-client.ts'
import type {
  CurrencyConversionDTO,
  CurrencyDTO,
} from '../../../model/currency.ts'
import { Api } from '../../../core/model/urls.ts'

export const useConvert = (
  from: CurrencyDTO['short_code'],
  to: CurrencyDTO['short_code'],
  amount: number
) =>
  useApiClient<CurrencyConversionDTO>(Api.CONVERT, {
    params: {
      from,
      to,
      amount,
    },
  })

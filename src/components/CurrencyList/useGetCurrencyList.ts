import { Api } from '../../core/model/urls.ts'
import { useApiClient } from '../../core/api-client.ts'
import type { CurrencyDTO } from '../../model/currency.ts'

export const useGetCurrencyList = () =>
  useApiClient<CurrencyDTO[]>(Api.CURRENCIES)

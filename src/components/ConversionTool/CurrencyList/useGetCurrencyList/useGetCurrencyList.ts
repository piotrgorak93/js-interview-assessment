import type { CurrencyDTO } from '../../../../model/currency.ts'
import { useApiClient } from '../../../../core/api-client/api-client.ts'
import { Api } from '../../../../core/model/urls.ts'

export const useGetCurrencyList = (
  mapper: (data: CurrencyDTO[]) => CurrencyDTO[]
) => useApiClient<CurrencyDTO[]>(Api.CURRENCIES, { onFetch: mapper })

import useSWR from 'swr'
import {
  prepareQueryParams,
  type RequestParams,
} from '../query-params/query-params.ts'
import { swrConfig } from '../swr.ts'
import { appConfig } from '../app-config.ts'

const fetcher = async (url: string, params?: RequestParams) => {
  const newParams = new URLSearchParams(prepareQueryParams(params))
  const queryParams = newParams.size ? `?${newParams}` : ''
  const response = await fetch(`${appConfig.apiURL}${url}${queryParams}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${appConfig.apiKey}`,
    },
  })
  return await response.json().then(({ response }) => response)
}

const apiClient = <T, U = T>(
  url: string,
  params?: RequestParams,
  onFetch?: (data: T) => U
) => fetcher(url, params).then(onFetch)

export const useApiClient = <T>(
  url: string,
  params?: { onFetch?: (data: T) => T; params?: RequestParams }
) =>
  useSWR<T>(
    [url, params?.params],
    () => apiClient(url, params?.params, params?.onFetch),
    swrConfig
  )

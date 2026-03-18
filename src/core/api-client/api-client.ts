import useSWR from 'swr'
import {
  prepareQueryParams,
  type RequestParams,
} from '../query-params/query-params.ts'
import { swrConfig } from './swr.ts'
import { appConfig } from '../app-config.ts'

const fetcher = async (url: string, requestParams?: RequestParams) => {
  const newParams = new URLSearchParams(prepareQueryParams(requestParams))
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
  params?: { onFetch?: (data: T) => T; requestParams?: RequestParams }
) =>
  useSWR<T>(
    [url, params?.requestParams],
    () => apiClient(url, params?.requestParams, params?.onFetch),
    swrConfig
  )

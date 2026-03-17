import useSWR from 'swr'
import {
  prepareQueryParams,
  type RequestParams,
} from './query-params/query-params.ts'
import { swrConfig } from './swr.ts'

const fetcher = async (url: string, params?: RequestParams) => {
  const apiURL = import.meta.env.VITE_API_URL
  const apiKey = import.meta.env.VITE_API_KEY

  const newParams = new URLSearchParams(prepareQueryParams(params))
  newParams.set('api_key', apiKey)

  const response = await fetch(`${apiURL}${url}?${newParams}`, {
    method: 'GET',
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

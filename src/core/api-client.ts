import useSWR from 'swr'
import { swrConfig } from './swr.ts'

const fetcher = async (url: string) => {
  const apiURL = import.meta.env.VITE_API_URL
  const apiKey = import.meta.env.VITE_API_KEY

  const response = await fetch(`${apiURL}${url}?api_key=${apiKey}`, {
    method: 'GET',
  })
  return await response.json().then(({ response }) => response)
}

const apiClient = (url: string) => fetcher(url)

export const useApiClient = <T>(url: string) =>
  useSWR<T>(url, apiClient, swrConfig)

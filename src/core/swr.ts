import type { SWRConfiguration } from 'swr'

export const swrConfig: SWRConfiguration = {
  suspense: true,
  revalidateOnFocus: false,
  keepPreviousData: true,
}

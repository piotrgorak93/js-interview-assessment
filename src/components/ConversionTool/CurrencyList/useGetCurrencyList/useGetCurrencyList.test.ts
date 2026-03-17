import { describe, expect, it, vi } from 'vitest'
import { renderHook } from 'vitest-browser-react'
import { useGetCurrencyList } from './useGetCurrencyList.ts'

const mapper = vi.fn()
const mockedResponse = [{ id: 1, name: 'UAE Dirham', short_code: 'AED' }]
vi.stubGlobal(
  'fetch',
  vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ response: mockedResponse }),
    })
  )
)
describe('useGetCurrencyList hook', () => {
  it('should call API', async () => {
    await renderHook(() => useGetCurrencyList(mapper))
    expect(mapper).toHaveBeenCalledWith(mockedResponse)
  })
})

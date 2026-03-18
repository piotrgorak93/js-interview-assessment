import { describe, expect, it, vi } from 'vitest'
import { renderHook } from 'vitest-browser-react'
import { useApiClient } from './api-client.ts'

const mock = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ response: [] }),
  })
)
vi.stubGlobal('fetch', mock)

describe('useApiClient hook', () => {
  it('should call fetch with parameters', async () => {
    await renderHook(() =>
      useApiClient('/url-with-params', { params: { a: 1, b: 2 } })
    )
    expect(mock).toHaveBeenCalledWith(
      expect.stringMatching(/url-with-params\?a=1&b=2$/),
      expect.anything()
    )
  })
  it('should call fetch without parameters', async () => {
    await renderHook(() => useApiClient('/url-without-params'))
    expect(mock).toHaveBeenCalledWith(
      expect.stringMatching(/url-without-params$/),
      expect.anything()
    )
  })
})

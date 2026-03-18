import { describe, expect, it, vi } from 'vitest'
import { renderHook } from 'vitest-browser-react'
import { useConvert } from './useConvert.ts'

import * as apiClientModule from '../../../core/api-client/api-client.ts'

vi.mock('../../../core/api-client/api-client.ts', () => ({
  useApiClient: vi.fn(),
}))

describe('useConvert hook', () => {
  it('should call API', async () => {
    await renderHook(() => useConvert('PLN', 'USD', 1000))
    expect(apiClientModule.useApiClient).toHaveBeenCalledWith('/convert', {
      params: {
        amount: 1000,
        from: 'PLN',
        to: 'USD',
      },
    })
  })
})

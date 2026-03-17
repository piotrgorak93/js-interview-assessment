import { describe, expect, it } from 'vitest'
import { prepareQueryParams } from './query-params.ts'

describe('query-params', () => {
  it('should return object with stringified values', () => {
    expect(
      prepareQueryParams({
        a: 1,
        b: 2,
        c: '3',
      })
    ).toEqual({
      a: '1',
      b: '2',
      c: '3',
    })
  })
})

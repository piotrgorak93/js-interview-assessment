import { describe, expect, it } from 'vitest'
import { parseData } from './data-parser.ts'

describe('data-parser', () => {
  it('should sort data ASC', () => {
    expect(
      parseData([
        {
          short_code: 'PLN',
          name: 'Złoty',
          id: 1,
        },
        {
          short_code: 'USD',
          name: 'US Dollar',
          id: 2,
        },
        {
          short_code: 'GBP',
          name: 'Pound Sterling',
          id: 3,
        },
      ])
    ).toEqual([
      {
        short_code: 'GBP',
        name: 'Pound Sterling',
        id: 3,
      },
      {
        short_code: 'USD',
        name: 'US Dollar',
        id: 2,
      },
      {
        short_code: 'PLN',
        name: 'Złoty',
        id: 1,
      },
    ])
  })
})

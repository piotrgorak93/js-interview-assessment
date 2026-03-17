import { describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import App from './App.tsx'

vi.stubGlobal(
  'fetch',
  vi.fn(() =>
    Promise.reject({
      json: () => Promise.reject(),
    })
  )
)
describe('App', () => {
  it('should display error message if any error occurs', async () => {
    const { getByRole } = await render(<App />)
    expect(getByRole('alert')).toBeInTheDocument()
  })
})

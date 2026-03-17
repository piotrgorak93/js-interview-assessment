import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { ErrorBoundary } from './ErrorBoundary.tsx'

const FaultyComponent = () => {
  throw new Error('FaultyComponent')
}

describe('ErrorBoundary component', () => {
  it('should render default fallback component', async () => {
    const { getByRole } = await render(
      <ErrorBoundary>
        <FaultyComponent />
      </ErrorBoundary>
    )

    expect(getByRole('alert')).toBeInTheDocument()
  })

  it('should render default fallback component', async () => {
    const { getByText } = await render(
      <ErrorBoundary fallback={<div>Custom error</div>}>
        <FaultyComponent />
      </ErrorBoundary>
    )

    expect(getByText('Custom error')).toBeInTheDocument()
  })
})

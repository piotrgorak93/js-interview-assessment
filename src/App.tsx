import { ConversionTool } from './components/ConversionTool.tsx'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.tsx'
import { CurrencyErrorComponent } from './components/CurrencyErrorComponent.tsx'
import { Suspense } from 'react'

function App() {
  return (
    <ErrorBoundary fallback={<CurrencyErrorComponent />}>
      <Suspense fallback={'Loading'}>
        <ConversionTool />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App

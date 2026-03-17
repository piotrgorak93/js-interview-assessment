import { ConversionTool } from './components/ConversionTool.tsx'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.tsx'
import { CurrencyErrorComponent } from './components/CurrencyErrorComponent.tsx'
import { Suspense } from 'react'
import { Flex } from 'antd'

function App() {
  return (
    <Flex
      gap="medium"
      align="center"
      justify="center"
      vertical
      style={{ minHeight: '100vh' }}
    >
      <ErrorBoundary fallback={<CurrencyErrorComponent />}>
        <Suspense fallback={'Loading'}>
          <ConversionTool />
        </Suspense>
      </ErrorBoundary>
    </Flex>
  )
}

export default App

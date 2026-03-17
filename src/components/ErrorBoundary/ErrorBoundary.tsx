import { Component, type PropsWithChildren, type ReactNode } from 'react'
import { GenericErrorComponent } from './GenericErrorComponent.tsx'

type Props = PropsWithChildren<{ fallback?: ReactNode }>
type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <GenericErrorComponent />
    }

    return this.props.children
  }
}

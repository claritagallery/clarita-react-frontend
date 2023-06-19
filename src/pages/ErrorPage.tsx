import React from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Header, Footer } from "../components"

export interface ErrorParams {
  message: string
}

interface ErrorBoundaryProps {
  children: React.ReactNode
}
interface ErrorBoundaryState {
  hasError: boolean
  message: string
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, message: "" }
  }

  static getDerivedStateFromError(error: any) {
    let message = ""
    if (error instanceof Error) {
      message = error.message
    }

    return { hasError: true, message }
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Header />
          <div>{this.state.message}</div>
          <Footer />
        </>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary

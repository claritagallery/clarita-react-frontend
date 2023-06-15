import React from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export interface ErrorParams {
  message: string
}
function useError({ message }: ErrorParams) {
  toast.error(message, {
    autoClose: 5000,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })
  return (
    <ToastContainer
      limit={1}
      position="top-center"
      closeButton={false}
      closeOnClick={true}
      //style={{ position: "absolute", top: "30%" }}
      bodyClassName="styles-toast-container"
      toastClassName="toast-styles"
    />
  )
}

interface ErrorBoundaryProps {
  children: React.ReactNode
}
interface ErrorBoundaryState {
  hasError: boolean
  message: string
}

class ErrorBoundaryComponent extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, message: "" }
  }

  static getDerivedStateFromError(error: any) {
    let message = ""
    if (error instanceof Error) {
      message = error.message
    }
    console.log(error)
    return { hasError: true, message }
  }

  render() {
    if (this.state.hasError) {
      const errorToast = useError({ message: this.state.message })
      return errorToast
    }
    return this.props.children
  }
}

export default ErrorBoundaryComponent

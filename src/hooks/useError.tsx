import React from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export interface ErrorParams {
  message: string
}
function useError({ message }: ErrorParams) {
  toast.error(message, {
    // position: toast.POSITION.TOP_CENTER,
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
      style={{ position: "absolute", top: "30%" }}
      bodyClassName="styles-toast-container"
      toastClassName="toast-styles"
    />
  )
}

export default useError

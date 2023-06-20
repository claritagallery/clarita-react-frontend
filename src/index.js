import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
const container = document.getElementById("root")
const root = createRoot(container)
import ErrorPage from "./pages/ErrorPage"

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorPage>
        <App />
      </ErrorPage>
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

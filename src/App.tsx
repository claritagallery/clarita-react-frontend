import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Route, Routes } from "react-router-dom"
import "./App.scss"
import DrawerProvider from "./contexts/Drawer"
import "./styles/albumList.scss"
import { Footer, Header } from "./components"
import ErrorBoundaryComponent from "./ErrorBoundaryComponent"
import {
  AlbumDetailPage,
  AlbumListPage,
  PhotoListPage,
  PhotoPage,
  NotFound,
} from "./pages"

const queryClient = new QueryClient({
  defaultOptions: {},
})

function App() {
  const [showHeader, setShowHeader] = React.useState<boolean>(true)
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {showHeader && <Header />}

        <div className="Main">
          <div>
            <main>
              <div className="routes-container">
                <DrawerProvider>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <ErrorBoundaryComponent>
                          <AlbumListPage />{" "}
                        </ErrorBoundaryComponent>
                      }
                    />

                    <Route
                      path="/albums/:albumId/photos/:photoId"
                      element={
                        <ErrorBoundaryComponent>
                          <PhotoPage setShowHeader={setShowHeader} />
                        </ErrorBoundaryComponent>
                      }
                    />
                    <Route
                      path="/albums/:albumId"
                      element={
                        <ErrorBoundaryComponent>
                          <AlbumDetailPage />
                        </ErrorBoundaryComponent>
                      }
                    />
                    <Route
                      path="/albums"
                      element={
                        <ErrorBoundaryComponent>
                          <AlbumListPage />
                        </ErrorBoundaryComponent>
                      }
                    />
                    <Route
                      path="/photos/:photoId"
                      element={
                        <ErrorBoundaryComponent>
                          <PhotoPage setShowHeader={setShowHeader} />
                        </ErrorBoundaryComponent>
                      }
                    />
                    <Route
                      path="/photos"
                      element={
                        <ErrorBoundaryComponent>
                          <PhotoListPage />
                        </ErrorBoundaryComponent>
                      }
                    />
                    <Route element={<NotFound />} />
                  </Routes>
                </DrawerProvider>
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App

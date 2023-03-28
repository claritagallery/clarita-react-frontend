import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import "./styles/albumList.scss";
import { Footer, Header } from "./components";
import {
  AlbumDetailPage,
  AlbumListPage,
  PhotoInAlbumPage,
  PhotoListPage,
  PhotoPage,
  NotFound,
} from "./pages";

const queryClient = new QueryClient({
  defaultOptions: {},
});

function App() {
  const [showHeader, setShowHeader] = React.useState<boolean>(true);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {showHeader && <Header />}

        <div className="Main">
          <div>
            <main>
              <div className="routes-container">
                <Routes>
                  <Route path="/" element={<AlbumListPage />} />
                  <Route
                    path="/albums/:albumId/photos/:photoId"
                    element={<PhotoInAlbumPage toggleHeader={setShowHeader} />}
                  />
                  <Route path="/albums/:albumId" element={<AlbumDetailPage />} />
                  <Route path="/albums" element={<AlbumListPage />} />

                  <Route
                    path="/photos/:photoId"
                    element={<PhotoPage toggleHeader={setShowHeader} />}
                  />

                  <Route path="/photos" element={<PhotoListPage />} />
                  <Route element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

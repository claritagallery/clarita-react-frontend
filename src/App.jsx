import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import "./App.css";

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
  return (
    <QueryClientProvider client={queryClient}>
      <Container className="App" fluid>
        <Header />
        <Row className="Main">
          <Col>
            <main>
              <div>
                <Routes>
                  <Route path="/" element={<AlbumListPage />} />
                  <Route
                    path="/albums/:albumId/photos/:photoId"
                    element={<PhotoInAlbumPage />}
                  />
                  <Route path="/albums/:albumId" element={<AlbumDetailPage />} />
                  <Route path="/albums" element={<AlbumListPage />} />
                  <Route path="/photos/:photoId" element={<PhotoPage />} />
                  <Route path="/photos" element={<PhotoListPage />} />
                  {/* <Route component={NotFound} /> */}
                </Routes>
              </div>
            </main>
          </Col>
        </Row>
        <Footer />
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

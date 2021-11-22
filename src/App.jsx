import { Container, Row, Col } from 'react-bootstrap';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AlbumListPage from './components/AlbumListPage';
import AlbumDetailPage from './components/AlbumDetailPage';
import Footer from './components/Footer';
import Header from './components/Header';
import PhotoInAlbumPage from './components/PhotoInAlbumPage';
import PhotoListPage from './components/PhotoListPage';
import PhotoPage from './components/PhotoPage';
import NotFound from './components/NotFound';

const queryClient = new QueryClient({
  defaultOptions: {},
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container className="App" fluid>
        <Header/>
        <Row className="Main">
          <Col>
            <main>
              <div>
                <Switch>
                  <Route exact path="/" component={AlbumListPage} />
                  <Route path="/albums/:albumId/photos/:photoId" component={PhotoInAlbumPage} />
                  <Route path="/albums/:albumId" component={AlbumDetailPage} />
                  <Route exact path="/albums" component={AlbumListPage} />
                  <Route exact path="/photos/:photoId" component={PhotoPage} />
                  <Route exact path="/photos" component={PhotoListPage} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </main>
          </Col>
        </Row>
        <Footer/>
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

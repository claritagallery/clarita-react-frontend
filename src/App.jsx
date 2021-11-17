import {Container, Row, Col} from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import AlbumListPage from './components/AlbumList';
import AlbumDetailPage from './components/AlbumDetail';
import Footer from './components/Footer';
import Header from './components/Header';
import {PhotoInAlbumPage} from './components/Photo';
import NotFound from './components/NotFound';

function App() {
  return (
    <Container className="App" fluid>
      <Header/>
      <Row className="Main">
        <Col>
          <main>
            <div>
              <Switch>
                <Route exact path="/" component={AlbumListPage} />
                <Route path="/albums/:albumid/photos/:photoid" component={PhotoInAlbumPage} />
                <Route path="/albums/:id" component={AlbumDetailPage} />
                <Route exact path="/albums" component={AlbumListPage} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </main>
        </Col>
      </Row>
      <Footer/>
    </Container>
  );
}

export default App;

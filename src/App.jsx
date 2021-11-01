import {Container, Row, Col} from 'react-bootstrap';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';
import AlbumListPage from './components/AlbumList'
import AlbumDetailPage from './components/AlbumDetail'
import {PhotoInAlbumPage} from './components/Photo';
import NotFound from './components/NotFound'

function App() {
  return (
    <Container className="App" fluid>
      <Row>
        <Col>
          <header className="App-header">
            <nav>
              <Link to="/">Home</Link>
            </nav>
          </header>
        </Col>
      </Row>
      <Row>
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
    </Container>
  );
}

export default App;

import {Breadcrumb} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Breadcrumbs = ({crumbs, current}) => (
  <Breadcrumb>
    <LinkContainer to="/">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
    </LinkContainer>
    { crumbs.map(crumb => (
      <LinkContainer key={crumb.id} to={`/albums/${crumb.id}`}>
        <Breadcrumb.Item>
          {crumb.name}
        </Breadcrumb.Item>
      </LinkContainer>
    )) }
    <Breadcrumb.Item active>{current}</Breadcrumb.Item>
  </Breadcrumb>
)

export default Breadcrumbs;

import {Breadcrumb} from 'react-bootstrap';

const Breadcrumbs = ({crumbs, current}) => (
  <Breadcrumb>
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    { crumbs.map(crumb => (
      <Breadcrumb.Item key={crumb.id} href={`/albums/${crumb.id}`}>
        {crumb.name}
      </Breadcrumb.Item>
    )) }
    <Breadcrumb.Item active>{current}</Breadcrumb.Item>
  </Breadcrumb>
)

export default Breadcrumbs;

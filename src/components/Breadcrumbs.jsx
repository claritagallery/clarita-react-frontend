import { Breadcrumb } from "react-bootstrap";

import { Link } from "react-router-dom";

const Breadcrumbs = ({ crumbs, current }) => (
  <Breadcrumb>
    <Link to="/">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
    </Link>
    {crumbs.map((crumb) => (
      <Link key={crumb.id} to={`/albums/${crumb.id}`}>
        <Breadcrumb.Item>{crumb.name}</Breadcrumb.Item>
      </Link>
    ))}
    <Breadcrumb.Item active>{current}</Breadcrumb.Item>
  </Breadcrumb>
);

export default Breadcrumbs;

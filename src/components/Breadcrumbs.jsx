import React from "react";

import { Link } from "react-router-dom";

const Breadcrumbs = ({ crumbs, current }) => (
  <div>
    <Link to="/">
      <span>Home</span>
    </Link>
    {crumbs.map((crumb) => (
      <Link key={crumb.id} to={`/albums/${crumb.id}`}>
        <span>{crumb.name}</span>
      </Link>
    ))}
    <span>{current}</span>
  </div>
);

export default Breadcrumbs;

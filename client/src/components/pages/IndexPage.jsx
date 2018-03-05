import React from 'react';

import { Link } from 'react-router-dom';

/**
 * IndexPage component
 * @returns {JSX} react element
 */
const IndexPage = () => (
  // static displayName = 'IndexPage';
  <div className="text-center" id="messagebox">
    <h1>Welcome to More Recipes</h1>
    <br />
    <h2>Share your recipes with the world.</h2>
    <Link
      className="btn btn-lg btn-primary"
      href="/browse"
      to="/browse"
    >
      Browse Site
    </Link>
  </div>
);


export default IndexPage;

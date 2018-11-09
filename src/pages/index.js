import { Link } from 'gatsby';
import React from 'react';
import Image from '../components/image';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Hi people</h1>
      <p>Welcome to my new fabulous blog</p>
      <Link to="/big-boom/">Go to Big boom page</Link>
    </div>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

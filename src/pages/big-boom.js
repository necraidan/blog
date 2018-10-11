import React from 'react';
import Link from 'gatsby-link';

const SecondPage = () => (
    <div>
        <h1>Big boom big bada boom</h1>
        <p>Welcome to this awesome page 2</p>
        <img src="https://images.unsplash.com/photo-1517482134031-62dd4b75c1fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6eb399026f9a9a40d0ebea1e05268536&auto=format&fit=crop&w=1434&q=80" />
        <Link to="/about">Go to this amazing about page !</Link>
    </div>
);

export default SecondPage;

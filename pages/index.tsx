import React from 'react';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
    return (
        <div className="coming-soon">
            <h1>Coming soon.</h1>
            <p>Follow our <a href="http://www.facebook.com/pangea55" target="_blank">Facebook</a> for updates.<br/>
            We will be back up as soon as possible.
            </p>
            <img className="coming-logo" src="/images/pg55_logo_l.png" alt="pangea55 logo" />
        </div>  
    )
};
export default HomePage;
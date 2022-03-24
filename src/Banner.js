import React from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Banner() {
  const history = useHistory();

    return (
        <div className='banner'>
          <div className='banner__info'>
            <h1>Get out and stretch your imagination</h1>
            <h4>Plan a different kind of getaway to uncover the hidden gems near you.</h4>
            <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
          </div>
        </div>
    );
}

export default Banner;
